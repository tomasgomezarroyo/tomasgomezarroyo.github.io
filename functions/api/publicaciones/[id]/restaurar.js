import { json, sha256 } from '../../../_lib/comun.js';

export async function onRequestPost({ request, env, params }) {
  let datos;
  try { datos = await request.json(); } catch { return json({ error: 'formato' }, 400); }
  if (!datos || typeof datos !== 'object' || Array.isArray(datos)) return json({ error: 'formato' }, 400);
  const token = String(datos.token || '');
  if (token.length < 32) return json({ error: 'token' }, 403);
  const hash = await sha256(token);

  const ahora = new Date().toISOString();
  const resultados = await env.DB.batch([
    env.DB.prepare(`
      UPDATE denuncias SET restaurada_en = ?
      WHERE publicacion_id = ? AND token_hash = ? AND restaurada_en IS NULL
        AND EXISTS (
          SELECT 1 FROM publicaciones
          WHERE id = ? AND estado = 'oculta'
        )
    `).bind(ahora, params.id, hash, params.id),
    env.DB.prepare(`
      UPDATE publicaciones SET estado = 'visible', actualizado_en = ?
      WHERE id = ? AND estado = 'oculta'
        AND EXISTS (
          SELECT 1 FROM denuncias
          WHERE publicacion_id = ? AND token_hash = ? AND restaurada_en = ?
        )
    `).bind(ahora, params.id, params.id, hash, ahora),
  ]);
  if (!resultados[0].meta.changes || !resultados[1].meta.changes) {
    return json({ error: 'noDisponible' }, 409);
  }
  return json({ ok: true });
}
