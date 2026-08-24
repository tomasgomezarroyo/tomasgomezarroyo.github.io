import { corsPreflight, firmaAdministracionValida, json } from '../../../_lib/comun.js';

export function onRequestOptions() { return corsPreflight(); }


export async function onRequestGet({ request, env, params }) {
  const token = new URL(request.url).searchParams.get('token') || '';
  const exp = new URL(request.url).searchParams.get('exp') || '';
  if (!(await firmaAdministracionValida(params.id, token, env.ADMIN_SECRET, exp))) {
    return json({ error: 'acceso' }, 403);
  }

  const publicacion = await env.DB.prepare('SELECT * FROM publicaciones WHERE id = ?').bind(params.id).first();
  if (!publicacion) return json({ error: 'noEncontrada' }, 404);
  const { results: respuestas } = await env.DB.prepare(`
    SELECT id, nombre, comentario, estado, creado_en
    FROM respuestas WHERE publicacion_id = ? ORDER BY creado_en ASC
  `).bind(params.id).all();

  return json({ publicacion: {
    id: publicacion.id,
    tipo: publicacion.tipo,
    nombre: publicacion.nombre,
    email: publicacion.email,
    comentario: publicacion.comentario,
    pieFoto: publicacion.pie_foto,
    fechaFoto: publicacion.fecha_foto,
    lugar: publicacion.lugar,
    personas: publicacion.personas,
    contexto: publicacion.contexto,
    procedencia: publicacion.procedencia,
    estado: publicacion.estado,
    creadoEn: publicacion.creado_en,
    fotoUrl: publicacion.foto_vista_key
      ? `/api/administracion/foto/${publicacion.id}?token=${encodeURIComponent(token)}&exp=${encodeURIComponent(exp)}`
      : null,
    respuestas: respuestas.map((respuesta) => ({
      id: respuesta.id,
      nombre: respuesta.nombre,
      comentario: respuesta.comentario,
      estado: respuesta.estado,
      creadoEn: respuesta.creado_en,
    })),
  } });
}
