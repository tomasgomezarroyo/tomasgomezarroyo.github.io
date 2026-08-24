import { firmaAdministracionValida } from '../../../_lib/comun.js';

export async function onRequestGet({ request, env, params }) {
  const token = new URL(request.url).searchParams.get('token') || '';
  const exp = new URL(request.url).searchParams.get('exp') || '';
  if (!(await firmaAdministracionValida(params.id, token, env.ADMIN_SECRET, exp))) {
    return new Response('Acceso denegado', { status: 403 });
  }
  const publicacion = await env.DB.prepare(`
    SELECT foto_vista_key FROM publicaciones WHERE id = ?
  `).bind(params.id).first();
  if (!publicacion?.foto_vista_key) return new Response('No encontrada', { status: 404 });
  const objeto = await env.PHOTOS.get(publicacion.foto_vista_key);
  if (!objeto) return new Response('No encontrada', { status: 404 });
  return new Response(objeto.body, { headers: {
    'content-type': 'image/jpeg',
    'cache-control': 'private, no-store',
    'x-content-type-options': 'nosniff',
    'access-control-allow-origin': 'https://tomasgomezarroyo.github.io',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'accept',
  } });
}

export function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'access-control-allow-origin': 'https://tomasgomezarroyo.github.io',
      'access-control-allow-methods': 'GET, OPTIONS',
      'access-control-allow-headers': 'accept',
      'access-control-max-age': '86400',
    },
  });
}
