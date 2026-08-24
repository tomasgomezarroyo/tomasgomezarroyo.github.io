import {
  escaparHtml,
  excedeLimite,
  firmaAdministracion,
  json,
  nuevoId,
  sha256,
  validarTurnstile,
  vencimientoAdministracion,
} from '../../../_lib/comun.js';
import { corsPreflight } from '../../../_lib/comun.js';

export function onRequestOptions() { return corsPreflight(); }

async function enviarAviso(request, env, publicacion) {
  if (!env.BREVO_API_KEY) return;
  const exp = vencimientoAdministracion();
  const firma = await firmaAdministracion(publicacion.id, env.ADMIN_SECRET, exp);
  const origen = (env.SITIO_PUBLICO || 'https://tomcontable.github.io').replace(/\/+$/, '');
  const revision = `${origen}/administracion?id=${encodeURIComponent(publicacion.id)}&token=${encodeURIComponent(firma)}&exp=${encodeURIComponent(exp)}`;
  const contieneFoto = Boolean(publicacion.foto_vista_key);
  const resumen = publicacion.pie_foto || publicacion.comentario || '(Sin texto)';

  const html = `<!doctype html><html lang="es"><body style="margin:0;background:#f2ecdf;font-family:Georgia,serif;color:#262f38;padding:28px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;background:#fffdf7;border:1px solid #d8bd78;padding:28px;">
        <tr><td style="font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:#765f2e;">Libro de visitas y colaboraciones</td></tr>
        <tr><td style="font-size:25px;line-height:1.2;color:#1e3d5c;padding:8px 0 18px;">Una publicación fue denunciada</td></tr>
        <tr><td style="font-size:15px;line-height:1.65;padding:14px 16px;background:#f2ecdf;border-left:3px solid #765f2e;">
          <strong>${escaparHtml(publicacion.nombre)}</strong><br>${escaparHtml(resumen)}
        </td></tr>
        <tr><td style="font-size:14px;line-height:1.6;padding:18px 0;color:#4f606a;">La publicación${contieneFoto ? ' y su fotografía' : ''} ya está oculta. Nada fue eliminado.</td></tr>
        <tr><td><a href="${revision}" style="display:inline-block;background:#1e3d5c;color:#fffdf7;text-decoration:none;padding:12px 18px;font-weight:bold;">Revisar y decidir</a></td></tr>
      </table>
    </td></tr></table>
  </body></html>`;

  const respuesta = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': env.BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: 'Archivo familiar', email: env.EMAIL_FROM || 'hola@tomcontable.cl' },
      to: [{ email: env.ADMIN_EMAIL || 'tomgomezf@gmail.com' }],
      subject: 'Publicación denunciada en el archivo familiar',
      htmlContent: html,
    }),
  });
  if (!respuesta.ok) console.error('Brevo rechazó el aviso de denuncia', respuesta.status);
}

export async function onRequestPost({ request, env, params, waitUntil }) {
  let datos;
  try { datos = await request.json(); } catch { return json({ error: 'formato' }, 400); }
  if (!datos || typeof datos !== 'object' || Array.isArray(datos)) return json({ error: 'formato' }, 400);
  if (!(await validarTurnstile(request, env, datos['cf-turnstile-response']))) {
    return json({ error: 'verificacion' }, 403);
  }
  if (await excedeLimite(request, 'denunciar', 4, 3600)) return json({ error: 'limite' }, 429);

  const publicacion = await env.DB.prepare(`
    SELECT id, nombre, comentario, pie_foto, foto_vista_key, estado
    FROM publicaciones WHERE id = ?
  `).bind(params.id).first();
  if (!publicacion || publicacion.estado !== 'visible') return json({ error: 'noDisponible' }, 409);

  const token = `${crypto.randomUUID()}${crypto.randomUUID()}`.replaceAll('-', '');
  const hash = await sha256(token);
  const ahora = new Date().toISOString();
  const idDenuncia = nuevoId('den');

  try {
    const resultados = await env.DB.batch([
      env.DB.prepare(`
        INSERT INTO denuncias (id, publicacion_id, token_hash, creado_en)
        VALUES (?, ?, ?, ?)
      `).bind(idDenuncia, params.id, hash, ahora),
      env.DB.prepare(`
        UPDATE publicaciones SET estado = 'oculta', actualizado_en = ?
        WHERE id = ? AND estado = 'visible'
      `).bind(ahora, params.id),
    ]);
    if (!resultados[1].meta.changes) return json({ error: 'noDisponible' }, 409);
  } catch (error) {
    const actual = await env.DB.prepare('SELECT estado FROM publicaciones WHERE id = ?').bind(params.id).first();
    if (!actual || actual.estado !== 'visible') return json({ error: 'noDisponible' }, 409);
    console.error('No se pudo registrar la denuncia', error);
    return json({ error: 'denuncia' }, 500);
  }

  waitUntil(enviarAviso(request, env, publicacion).catch((error) => {
    console.error('No se pudo enviar el aviso', error);
  }));

  return json({ ok: true, token, publicacionId: params.id });
}
