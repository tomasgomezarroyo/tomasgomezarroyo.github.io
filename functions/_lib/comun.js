export const RESPUESTAS_JSON = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store',
  'x-content-type-options': 'nosniff',
};

export function json(datos, estado = 200) {
  return new Response(JSON.stringify(datos), { status: estado, headers: RESPUESTAS_JSON });
}

export function textoLimpio(valor, maximo = 2000) {
  return String(valor ?? '').replace(/\u0000/g, '').trim().slice(0, maximo);
}

export function escaparHtml(valor) {
  return String(valor ?? '').replace(/[&<>"']/g, (caracter) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[caracter]));
}

export function nuevoId(prefijo = 'pub') {
  return `${prefijo}_${crypto.randomUUID().replaceAll('-', '')}`;
}

export async function sha256(valor) {
  const bytes = new TextEncoder().encode(String(valor));
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function base64Url(bytes) {
  let binario = '';
  for (const byte of bytes) binario += String.fromCharCode(byte);
  return btoa(binario).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
}

export function vencimientoAdministracion(dias = 45) {
  return Math.floor(Date.now() / 1000) + (dias * 24 * 60 * 60);
}

export async function firmaAdministracion(id, secreto, vencimiento) {
  if (!secreto || !Number.isSafeInteger(vencimiento)) return '';
  const clave = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secreto),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const firma = await crypto.subtle.sign(
    'HMAC',
    clave,
    new TextEncoder().encode(`publicacion:${id}:${vencimiento}`),
  );
  return base64Url(new Uint8Array(firma));
}

export async function firmaAdministracionValida(id, firma, secreto, vencimiento) {
  const expiraEn = Number(vencimiento);
  if (!firma || !secreto || !Number.isSafeInteger(expiraEn) || expiraEn <= Math.floor(Date.now() / 1000)) {
    return false;
  }
  const esperada = await firmaAdministracion(id, secreto, expiraEn);
  if (firma.length !== esperada.length) return false;
  let diferencia = 0;
  for (let i = 0; i < firma.length; i += 1) diferencia |= firma.charCodeAt(i) ^ esperada.charCodeAt(i);
  return diferencia === 0;
}

export async function excedeLimite(request, grupo, limite, ventanaSegundos) {
  try {
    const ip = request.headers.get('CF-Connecting-IP') || 'local';
    const claveIp = (await sha256(ip)).slice(0, 24);
    const clave = new Request(`https://limite.memoria.local/${grupo}/${claveIp}`);
    const cache = caches.default;
    const anterior = await cache.match(clave);
    const cantidad = anterior ? Number.parseInt(await anterior.text(), 10) || 0 : 0;
    if (cantidad >= limite) return true;
    await cache.put(clave, new Response(String(cantidad + 1), {
      headers: { 'cache-control': `max-age=${ventanaSegundos}` },
    }));
    return false;
  } catch {
    return false;
  }
}

export async function validarTurnstile(request, env, token) {
  if (env.ENTORNO === 'local' && !env.TURNSTILE_SECRET) return true;
  if (!env.TURNSTILE_SECRET || !token) return false;

  const cuerpo = new FormData();
  cuerpo.set('secret', env.TURNSTILE_SECRET);
  cuerpo.set('response', String(token));
  const ip = request.headers.get('CF-Connecting-IP');
  if (ip) cuerpo.set('remoteip', ip);

  try {
    const respuesta = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: cuerpo,
    });
    const resultado = await respuesta.json();
    return resultado.success === true;
  } catch {
    return false;
  }
}

export function extensionSegura(archivo) {
  const cabecera = new Uint8Array(archivo.slice(0, 16));
  const ascii = String.fromCharCode(...cabecera);
  if (cabecera[0] === 0xff && cabecera[1] === 0xd8 && cabecera[2] === 0xff) return 'jpg';
  if (cabecera[0] === 0x89 && ascii.slice(1, 4) === 'PNG') return 'png';
  if (ascii.slice(0, 4) === 'RIFF' && ascii.slice(8, 12) === 'WEBP') return 'webp';
  if (ascii.slice(4, 8) === 'ftyp' && /heic|heix|hevc|hevx|mif1|msf1|avif/.test(ascii.slice(8, 16))) return 'heic';
  return '';
}

export function publicacionPublica(fila, respuestas = []) {
  return {
    id: fila.id,
    tipo: fila.tipo,
    nombre: fila.nombre,
    comentario: fila.comentario,
    pieFoto: fila.pie_foto,
    fechaFoto: fila.fecha_foto,
    lugar: fila.lugar,
    personas: fila.personas,
    contexto: fila.contexto,
    procedencia: fila.procedencia,
    tieneFoto: Boolean(fila.foto_vista_key),
    fotoUrl: fila.foto_vista_key ? `/fotos/${fila.id}` : null,
    creadoEn: fila.creado_en,
    respuestas: respuestas.map((respuesta) => ({
      id: respuesta.id,
      nombre: respuesta.nombre,
      comentario: respuesta.comentario,
      creadoEn: respuesta.creado_en,
    })),
  };
}
