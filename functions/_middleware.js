const SITIO_PUBLICO = 'https://tomcontable.github.io';
const RUTAS_BACKEND = ['/api/', '/fotos/', '/media/'];

function esRutaBackend(pathname) {
  return RUTAS_BACKEND.some((prefijo) => pathname === prefijo.slice(0, -1) || pathname.startsWith(prefijo));
}

export async function onRequest(context) {
  const { request } = context;
  if (request.method === 'OPTIONS' || !['GET', 'HEAD'].includes(request.method)) {
    return context.next();
  }

  const url = new URL(request.url);
  const hostname = url.hostname.toLowerCase();
  if (!hostname.endsWith('.pages.dev') || esRutaBackend(url.pathname)) {
    return context.next();
  }

  const destino = new URL(SITIO_PUBLICO);
  destino.pathname = url.pathname;
  destino.search = url.search;
  return Response.redirect(destino.toString(), 308);
}
