import {
  excedeLimite,
  extensionSegura,
  json,
  nuevoId,
  nuevoTokenAutor,
  publicacionPublica,
  sha256,
  textoLimpio,
  validarTurnstile,
} from '../../_lib/comun.js';
import { corsPreflight } from '../../_lib/comun.js';

export function onRequestOptions() { return corsPreflight(); }

const MAX_ORIGINAL = 15 * 1024 * 1024;
const MAX_VISTA = 3 * 1024 * 1024;
const MAX_SOLICITUD = 20 * 1024 * 1024;

export async function onRequestGet({ env }) {
  try {
    const { results: publicaciones } = await env.DB.prepare(`
      SELECT * FROM publicaciones
      WHERE estado = 'visible'
      ORDER BY creado_en DESC
      LIMIT 100
    `).all();

    if (!publicaciones.length) return json({ publicaciones: [] });
    const marcadores = publicaciones.map(() => '?').join(',');
    const { results: respuestas } = await env.DB.prepare(`
      SELECT id, publicacion_id, nombre, comentario, creado_en
      FROM respuestas
      WHERE estado = 'visible' AND publicacion_id IN (${marcadores})
      ORDER BY creado_en ASC
      LIMIT 500
    `).bind(...publicaciones.map((item) => item.id)).all();

    const porPublicacion = new Map();
    for (const respuesta of respuestas) {
      if (!porPublicacion.has(respuesta.publicacion_id)) porPublicacion.set(respuesta.publicacion_id, []);
      porPublicacion.get(respuesta.publicacion_id).push(respuesta);
    }

    return json({
      publicaciones: publicaciones.map((item) => publicacionPublica(item, porPublicacion.get(item.id) || [])),
    });
  } catch (error) {
    console.error('No se pudo leer el libro de visitas', error);
    return json({ error: 'lectura' }, 500);
  }
}

export async function onRequestPost({ request, env }) {
  const longitud = Number(request.headers.get('content-length'));
  if (Number.isFinite(longitud) && longitud > MAX_SOLICITUD) return json({ error: 'tamano' }, 413);

  let datos;
  try {
    datos = await request.formData();
  } catch {
    return json({ error: 'formato' }, 400);
  }

  if (textoLimpio(datos.get('website'), 100)) return json({ ok: true });
  const turnoValido = await validarTurnstile(request, env, datos.get('cf-turnstile-response'));
  if (!turnoValido) return json({ error: 'verificacion' }, 403);

  const nombre = textoLimpio(datos.get('nombre'), 80);
  const email = textoLimpio(datos.get('email'), 160);
  const comentario = textoLimpio(datos.get('comentario'), 3000);
  const pieFoto = textoLimpio(datos.get('pieFoto'), 500);
  const fechaFoto = textoLimpio(datos.get('fechaFoto'), 100);
  const lugar = textoLimpio(datos.get('lugar'), 160);
  const personas = textoLimpio(datos.get('personas'), 500);
  const contexto = textoLimpio(datos.get('contexto'), 1500);
  const procedencia = textoLimpio(datos.get('procedencia'), 300);
  const capitulo = textoLimpio(datos.get('capitulo'), 40);
  const ciudad = textoLimpio(datos.get('ciudad'), 80);
  const pais = textoLimpio(datos.get('pais'), 80);
  const fotoVista = datos.get('fotoVista');
  const fotoOriginal = datos.get('fotoOriginal');
  const tieneFoto = fotoVista instanceof File && fotoVista.size > 0;

  if (nombre.length < 2) return json({ error: 'nombre' }, 400);
  if (comentario.length < 2) return json({ error: 'comentario' }, 400);
  if (tieneFoto && pieFoto.length < 3) return json({ error: 'pieFoto' }, 400);
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json({ error: 'email' }, 400);
  const grupoLimite = tieneFoto ? 'publicar-foto-v2' : 'publicar-mensaje-v2';
  const limite = tieneFoto ? 10 : 15;
  if (await excedeLimite(request, grupoLimite, limite, 3600)) return json({ error: 'limite' }, 429);

  if (tieneFoto && !env.PHOTOS) {
    return json({ error: 'almacenamiento' }, 503);
  }

  if (tieneFoto) {
    if (fotoVista.size > MAX_VISTA || extensionSegura(await fotoVista.arrayBuffer()) !== 'jpg') {
      return json({ error: 'fotoVista' }, 400);
    }
    if (!(fotoOriginal instanceof File) || !fotoOriginal.size || fotoOriginal.size > MAX_ORIGINAL) {
      return json({ error: 'fotoOriginal' }, 400);
    }
  }

  const id = nuevoId('pub');
  const tokenAutor = nuevoTokenAutor();
  const tokenAutorHash = await sha256(tokenAutor);
  const ahora = new Date().toISOString();
  let claveVista = null;
  let claveOriginal = null;

  try {
    if (tieneFoto) {
      const originalBytes = await fotoOriginal.arrayBuffer();
      const extension = extensionSegura(originalBytes);
      if (!extension) return json({ error: 'tipoFoto' }, 400);

      claveOriginal = `originales/${id}.${extension}`;
      claveVista = `publicas/${id}.jpg`;
      await env.PHOTOS.put(claveOriginal, originalBytes, {
        httpMetadata: { contentType: fotoOriginal.type || 'application/octet-stream' },
        customMetadata: { publicacion: id, clase: 'original' },
      });
      await env.PHOTOS.put(claveVista, await fotoVista.arrayBuffer(), {
        httpMetadata: { contentType: 'image/jpeg', cacheControl: 'private, no-store' },
        customMetadata: { publicacion: id, clase: 'vista' },
      });
    }

    await env.DB.prepare(`
      INSERT INTO publicaciones (
        id, tipo, nombre, email, comentario, pie_foto, fecha_foto, lugar, personas,
        contexto, procedencia, capitulo, ciudad, pais, foto_original_key, foto_vista_key,
        autor_token_hash, estado, creado_en, actualizado_en
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'visible', ?, ?)
    `).bind(
      id, tieneFoto ? 'fotografia' : 'mensaje', nombre, email || null, comentario,
      pieFoto, fechaFoto, lugar, personas, contexto, procedencia, capitulo, ciudad, pais,
      claveOriginal, claveVista, tokenAutorHash, ahora, ahora,
    ).run();

    return json({ ok: true, publicacion: {
      id,
      tipo: tieneFoto ? 'fotografia' : 'mensaje',
      nombre,
      comentario,
      pieFoto,
      fechaFoto,
      lugar,
      personas,
      contexto,
      procedencia,
      capitulo,
      ciudad,
      pais,
      tieneFoto,
      fotoUrl: tieneFoto ? `/fotos/${id}` : null,
      creadoEn: ahora,
      respuestas: [],
    }, tokenAutor }, 201);
  } catch (error) {
    console.error('No se pudo publicar', error);
    if (claveVista) await env.PHOTOS.delete(claveVista).catch(() => {});
    if (claveOriginal) await env.PHOTOS.delete(claveOriginal).catch(() => {});
    return json({ error: 'publicacion' }, 500);
  }
}
