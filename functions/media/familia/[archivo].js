const ARCHIVOS = new Map([
  ['abuelo-hablando.mp4', { ruta: '/audio/familia/abuelo-hablando.mp4', tipo: 'video/mp4' }],
  ['julio91-espana.mp4', { ruta: '/audio/familia/julio91-espana.mp4', tipo: 'video/mp4' }],
  ['oda-a-vivi.mp3', { ruta: '/audio/familia/oda-a-vivi.mp3', tipo: 'audio/mpeg' }],
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
  const archivo = ARCHIVOS.get(nombre);
  if (!archivo) return null;

  const url = new URL(context.request.url);
  url.pathname = archivo.ruta;
  const origen = await context.env.ASSETS.fetch(new Request(url, { method: 'GET' }));
  if (!origen.ok) return null;
  return { archivo, datos: await origen.arrayBuffer() };
}

export async function onRequestGet(context) {
  const resultado = await obtenerArchivo(context);
  if (!resultado) return new Response('No encontrado', { status: 404 });

  const { archivo, datos } = resultado;
  const longitud = datos.byteLength;
  const cabeceras = new Headers({
    'accept-ranges': 'bytes',
    'cache-control': 'public, max-age=31536000, immutable',
    'content-type': archivo.tipo,
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
  const resultado = await obtenerArchivo(context);
  if (!resultado) return new Response(null, { status: 404 });
  return new Response(null, {
    headers: {
      'accept-ranges': 'bytes',
      'cache-control': 'public, max-age=31536000, immutable',
      'content-length': String(resultado.datos.byteLength),
      'content-type': resultado.archivo.tipo,
      'x-content-type-options': 'nosniff',
    },
  });
}
