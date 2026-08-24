import {
  excedeLimite,
  json,
  textoLimpio,
  tokenAutorValido,
} from '../../../_lib/comun.js';
import { corsPreflight } from '../../../_lib/comun.js';

export function onRequestOptions() { return corsPreflight(); }

const MAX_JSON = 8 * 1024;

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

async function respuestaAutorizada(env, id, token) {
  const fila = await env.DB.prepare(
    'SELECT * FROM respuestas WHERE id = ? AND estado = ?'
  ).bind(id, 'visible').first();
  if (!fila || !(await tokenAutorValido(token, fila.autor_token_hash))) return null;
  return fila;
}

export async function onRequestPatch({ request, env, params }) {
  const datos = await datosJson(request);
  if (!datos) return json({ error: 'formato' }, 400);
  const actual = await respuestaAutorizada(env, params.id, datos.token);
  if (!actual) return json({ error: 'noDisponible' }, 404);
  if (await excedeLimite(request, 'editar-respuesta-autor', 50, 3600)) return json({ error: 'limite' }, 429);

  const nombre = textoLimpio(datos.nombre, 80);
  const comentario = textoLimpio(datos.comentario, 2000);
  if (nombre.length < 2 || comentario.length < 2) return json({ error: 'campos' }, 400);
  const ahora = new Date().toISOString();
  await env.DB.prepare(`
    UPDATE respuestas SET nombre = ?, comentario = ?, actualizado_en = ?
    WHERE id = ? AND estado = 'visible'
  `).bind(nombre, comentario, ahora, params.id).run();
  return json({ ok: true, respuesta: { id: params.id, nombre, comentario, creadoEn: actual.creado_en } });
}

export async function onRequestDelete({ request, env, params }) {
  const datos = await datosJson(request);
  if (!datos) return json({ error: 'formato' }, 400);
  const actual = await respuestaAutorizada(env, params.id, datos.token);
  if (!actual) return json({ error: 'noDisponible' }, 404);
  if (await excedeLimite(request, 'eliminar-respuesta-autor', 30, 3600)) return json({ error: 'limite' }, 429);

  const resultado = await env.DB.prepare(`
    UPDATE respuestas SET estado = 'retirada', actualizado_en = ?
    WHERE id = ? AND estado = 'visible'
  `).bind(new Date().toISOString(), params.id).run();
  if (!resultado.meta.changes) return json({ error: 'noDisponible' }, 404);
  return json({ ok: true, estado: 'retirada' });
}
