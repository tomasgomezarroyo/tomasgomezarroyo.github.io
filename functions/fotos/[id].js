export async function onRequestGet({ env, params }) {
  const publicacion = await env.DB.prepare(`
    SELECT foto_vista_key FROM publicaciones
    WHERE id = ? AND estado = 'visible' AND foto_vista_key IS NOT NULL
  `).bind(params.id).first();
  if (!publicacion) return new Response('No encontrada', { status: 404 });

  const objeto = await env.PHOTOS.get(publicacion.foto_vista_key);
  if (!objeto) return new Response('No encontrada', { status: 404 });
  return new Response(objeto.body, {
    headers: {
      'content-type': 'image/jpeg',
      'cache-control': 'private, no-store',
      'x-content-type-options': 'nosniff',
      'content-disposition': 'inline',
    },
  });
}
