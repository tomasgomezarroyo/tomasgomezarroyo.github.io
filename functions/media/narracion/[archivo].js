const CAPITULOS = new Set([
  'prologo',
  'capitulo-primero',
  'capitulo-segundo',
  'capitulo-tercero',
  'capitulo-cuarto',
  'capitulo-quinto',
  'capitulo-sexto',
  'capitulo-septimo',
  'capitulo-octavo',
  'capitulo-noveno',
  'capitulo-decimo',
]);

function rangoSolicitado(valor, longitud) {
  const coincidencia = /^bytes=(\d*)-(\d*)$/.exec(valor || '');
  if (!coincidencia) return null;

  let inicio;
  let fin;
  if (coincidencia[1] === '') {
    const cantidad = Number(coincidencia[2]);
    if (!Number.isFinite(cantidad) || cantidad <= 0) return null;
    inicio = Math.max(0, longitud - cantidad);
    fin = longitud - 1;
  } else {
    inicio = Number(coincidencia[1]);
    fin = coincidencia[2] === '' ? longitud - 1 : Number(coincidencia[2]);
  }

  if (!Number.isFinite(inicio) || !Number.isFinite(fin) || inicio < 0 || inicio >= longitud || fin < inicio) return null;
  return { inicio, fin: Math.min(fin, longitud - 1) };
}

async function obtenerArchivo(context) {
  const nombre = String(context.params.archivo || '');
  if (!nombre.endsWith('.mp3')) return null;
  const slug = nombre.slice(0, -4);
  if (!CAPITULOS.has(slug)) return null;

  const url = new URL(context.request.url);
  url.pathname = `/audio/narracion/${nombre}`;
  const origen = await context.env.ASSETS.fetch(new Request(url, { method: 'GET' }));
  if (!origen.ok) return null;
  return await origen.arrayBuffer();
}

export async function onRequestGet(context) {
  const datos = await obtenerArchivo(context);
  if (!datos) return new Response('No encontrado', { status: 404 });

  const longitud = datos.byteLength;
  const cabeceras = new Headers({
    'accept-ranges': 'bytes',
    'cache-control': 'public, max-age=31536000, immutable',
    'content-type': 'audio/mpeg',
    'x-content-type-options': 'nosniff',
  });

  const rangoTexto = context.request.headers.get('range');
  if (!rangoTexto) {
    cabeceras.set('content-length', String(longitud));
    return new Response(datos, { status: 200, headers: cabeceras });
  }

  const rango = rangoSolicitado(rangoTexto, longitud);
  if (!rango) {
    cabeceras.set('content-range', `bytes */${longitud}`);
    return new Response(null, { status: 416, headers: cabeceras });
  }

  const fragmento = datos.slice(rango.inicio, rango.fin + 1);
  cabeceras.set('content-length', String(fragmento.byteLength));
  cabeceras.set('content-range', `bytes ${rango.inicio}-${rango.fin}/${longitud}`);
  return new Response(fragmento, { status: 206, headers: cabeceras });
}

export async function onRequestHead(context) {
  const datos = await obtenerArchivo(context);
  if (!datos) return new Response(null, { status: 404 });
  return new Response(null, {
    headers: {
      'accept-ranges': 'bytes',
      'cache-control': 'public, max-age=31536000, immutable',
      'content-length': String(datos.byteLength),
      'content-type': 'audio/mpeg',
      'x-content-type-options': 'nosniff',
    },
  });
}
