import { excedeLimite, json, nuevoId, textoLimpio, validarTurnstile } from '../../../_lib/comun.js';

export async function onRequestPost({ request, env, params }) {
  if (await excedeLimite(request, 'responder', 12, 3600)) return json({ error: 'limite' }, 429);

  let datos;
  try { datos = await request.json(); } catch { return json({ error: 'formato' }, 400); }
  if (!datos || typeof datos !== 'object' || Array.isArray(datos)) return json({ error: 'formato' }, 400);
  if (textoLimpio(datos.website, 100)) return json({ ok: true });
  if (!(await validarTurnstile(request, env, datos['cf-turnstile-response']))) {
    return json({ error: 'verificacion' }, 403);
  }

  const nombre = textoLimpio(datos.nombre, 80);
  const comentario = textoLimpio(datos.comentario, 2000);
  if (nombre.length < 2 || comentario.length < 2) return json({ error: 'campos' }, 400);

  const publicacion = await env.DB.prepare(
    "SELECT id FROM publicaciones WHERE id = ? AND estado = 'visible'",
  ).bind(params.id).first();
  if (!publicacion) return json({ error: 'noEncontrada' }, 404);

  const id = nuevoId('rta');
  const ahora = new Date().toISOString();
  await env.DB.prepare(`
    INSERT INTO respuestas (id, publicacion_id, nombre, comentario, estado, creado_en)
    VALUES (?, ?, ?, ?, 'visible', ?)
  `).bind(id, params.id, nombre, comentario, ahora).run();

  return json({ ok: true, respuesta: { id, nombre, comentario, creadoEn: ahora } }, 201);
}
