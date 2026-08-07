import { firmaAdministracionValida, json } from '../../../../_lib/comun.js';

export async function onRequestPost({ request, env, params }) {
  let datos;
  try { datos = await request.json(); } catch { return json({ error: 'formato' }, 400); }
  if (!datos || typeof datos !== 'object' || Array.isArray(datos)) return json({ error: 'formato' }, 400);
  if (!(await firmaAdministracionValida(params.id, datos.token, env.ADMIN_SECRET, datos.exp))) {
    return json({ error: 'acceso' }, 403);
  }
  if (!['restaurar', 'retirar'].includes(datos.accion)) return json({ error: 'accion' }, 400);

  const ahora = new Date().toISOString();
  if (datos.accion === 'restaurar') {
    const resultados = await env.DB.batch([
      env.DB.prepare(`
        UPDATE publicaciones SET estado = 'visible', actualizado_en = ?
        WHERE id = ? AND estado = 'oculta'
      `).bind(ahora, params.id),
      env.DB.prepare(`
        UPDATE denuncias SET restaurada_en = ?
        WHERE publicacion_id = ? AND restaurada_en IS NULL
          AND EXISTS (
            SELECT 1 FROM publicaciones
            WHERE id = ? AND estado = 'visible' AND actualizado_en = ?
          )
      `).bind(ahora, params.id, params.id, ahora),
    ]);
    if (!resultados[0].meta.changes) return json({ error: 'transicion' }, 409);
  } else {
    const resultado = await env.DB.prepare(`
      UPDATE publicaciones SET estado = 'retirada', actualizado_en = ? WHERE id = ?
        AND estado IN ('visible', 'oculta')
    `).bind(ahora, params.id).run();
    if (!resultado.meta.changes) return json({ error: 'transicion' }, 409);
  }
  return json({ ok: true, estado: datos.accion === 'restaurar' ? 'visible' : 'retirada' });
}
