import {
  excedeLimite,
  json,
  publicacionPublica,
  textoLimpio,
  tokenAutorValido,
} from '../../../_lib/comun.js';
import { corsPreflight } from '../../../_lib/comun.js';

export function onRequestOptions() { return corsPreflight(); }

const MAX_JSON = 16 * 1024;

async function datosJson(request) {
  const longitud = Number(request.headers.get('content-length'));
  if (Number.isFinite(longitud) && longitud > MAX_JSON) return null;
  try {
    const datos = await request.json();
    return datos && typeof datos === 'object' && !Array.isArray(datos) ? datos : null;
  } catch {
    return null;
  }
}

async function publicacionAutorizada(env, id, token) {
  const fila = await env.DB.prepare(
    'SELECT * FROM publicaciones WHERE id = ? AND estado = ?'
  ).bind(id, 'visible').first();
  if (!fila || !(await tokenAutorValido(token, fila.autor_token_hash))) return null;
  return fila;
}

export async function onRequestPatch({ request, env, params }) {
  const datos = await datosJson(request);
  if (!datos) return json({ error: 'formato' }, 400);

  const actual = await publicacionAutorizada(env, params.id, datos.token);
  if (!actual) return json({ error: 'noDisponible' }, 404);
  if (await excedeLimite(request, 'editar-autor', 40, 3600)) return json({ error: 'limite' }, 429);

  const nombre = textoLimpio(datos.nombre, 80);
  const comentario = textoLimpio(datos.comentario, 3000);
  if (nombre.length < 2) return json({ error: 'nombre' }, 400);
  if (comentario.length < 2) return json({ error: 'comentario' }, 400);

  // La ciudad, el país y la época se pueden corregir en cualquier publicación,
  // sea mensaje o fotografía.
  const ciudad = textoLimpio(datos.ciudad, 80);
  const pais = textoLimpio(datos.pais, 80);
  const capitulo = textoLimpio(datos.capitulo, 40);

  const ahora = new Date().toISOString();
  if (actual.tipo === 'fotografia') {
    const pieFoto = textoLimpio(datos.pieFoto, 500);
    const fechaFoto = textoLimpio(datos.fechaFoto, 100);
    const lugar = textoLimpio(datos.lugar, 160);
    const personas = textoLimpio(datos.personas, 500);
    const contexto = textoLimpio(datos.contexto, 1500);
    const procedencia = textoLimpio(datos.procedencia, 300);
    if (pieFoto.length < 3) return json({ error: 'pieFoto' }, 400);
    await env.DB.prepare(`
      UPDATE publicaciones
      SET nombre = ?, comentario = ?, pie_foto = ?, fecha_foto = ?, lugar = ?,
          personas = ?, contexto = ?, procedencia = ?, ciudad = ?, pais = ?,
          capitulo = ?, actualizado_en = ?
      WHERE id = ? AND estado = 'visible'
    `).bind(
      nombre, comentario, pieFoto, fechaFoto, lugar,
      personas, contexto, procedencia, ciudad, pais, capitulo, ahora, params.id,
    ).run();
  } else {
    await env.DB.prepare(`
      UPDATE publicaciones
      SET nombre = ?, comentario = ?, ciudad = ?, pais = ?, capitulo = ?, actualizado_en = ?
      WHERE id = ? AND estado = 'visible'
    `).bind(nombre, comentario, ciudad, pais, capitulo, ahora, params.id).run();
  }

  const actualizada = await env.DB.prepare('SELECT * FROM publicaciones WHERE id = ?').bind(params.id).first();
  return json({ ok: true, publicacion: publicacionPublica(actualizada) });
}

export async function onRequestDelete({ request, env, params }) {
  const datos = await datosJson(request);
  if (!datos) return json({ error: 'formato' }, 400);

  const actual = await publicacionAutorizada(env, params.id, datos.token);
  if (!actual) return json({ error: 'noDisponible' }, 404);
  if (await excedeLimite(request, 'eliminar-autor', 20, 3600)) return json({ error: 'limite' }, 429);

  const resultado = await env.DB.prepare(`
    UPDATE publicaciones SET estado = 'retirada', actualizado_en = ?
    WHERE id = ? AND estado = 'visible'
  `).bind(new Date().toISOString(), params.id).run();
  if (!resultado.meta.changes) return json({ error: 'noDisponible' }, 404);
  return json({ ok: true, estado: 'retirada' });
}
