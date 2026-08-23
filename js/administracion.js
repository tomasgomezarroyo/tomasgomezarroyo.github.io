const raiz = document.querySelector('[data-administracion]');

if (raiz) {
  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get('id') || '';
  const token = parametros.get('token') || '';
  const exp = parametros.get('exp') || '';
  const carga = raiz.querySelector('[data-panel-carga]');
  const error = raiz.querySelector('[data-panel-error]');
  const textoError = raiz.querySelector('[data-texto-error]');
  const ficha = raiz.querySelector('[data-ficha-publicacion]');
  const boton = raiz.querySelector('[data-cambiar-estado]');
  const estadoAccion = raiz.querySelector('[data-estado-accion]');
  let publicacionActual;

  const formatearFecha = (valor, conHora = false) => {
    if (!valor) return 'Sin fecha registrada';
    const fecha = new Date(valor);
    if (Number.isNaN(fecha.getTime())) return valor;
    return new Intl.DateTimeFormat('es-ES', {
      dateStyle: 'long',
      ...(conHora ? { timeStyle: 'short' } : {}),
    }).format(fecha);
  };

  const texto = (valor) => String(valor || '').trim();
  const estadoLegible = (estado) => estado === 'visible' ? 'Visible en el sitio' : estado === 'retirada' ? 'Retirada del sitio' : estado || 'Sin estado';
  const tipoLegible = (tipo) => tipo === 'fotografia' ? 'Fotografía aportada' : 'Mensaje en el libro';

  function mostrarError(mensaje) {
    carga.hidden = true;
    ficha.hidden = true;
    textoError.textContent = mensaje;
    error.hidden = false;
    error.focus();
  }

  function añadirDato(lista, etiqueta, valor) {
    const contenido = texto(valor);
    if (!contenido) return;
    const envoltorio = document.createElement('div');
    const termino = document.createElement('dt');
    const descripcion = document.createElement('dd');
    termino.textContent = etiqueta;
    descripcion.textContent = contenido;
    envoltorio.append(termino, descripcion);
    lista.append(envoltorio);
  }

  function mostrarPublicacion(publicacion) {
    publicacionActual = publicacion;
    raiz.querySelector('[data-tipo-publicacion]').textContent = tipoLegible(publicacion.tipo);
    raiz.querySelector('[data-nombre-publicacion]').textContent = texto(publicacion.nombre) || 'Sin nombre';
    raiz.querySelector('[data-fecha-registro]').textContent = `Recibido el ${formatearFecha(publicacion.creadoEn, true)}`;
    const insignia = raiz.querySelector('[data-estado-publicacion]');
    insignia.textContent = estadoLegible(publicacion.estado);
    insignia.dataset.estado = publicacion.estado || '';

    const bloqueComentario = raiz.querySelector('[data-bloque-comentario]');
    const comentario = texto(publicacion.comentario);
    bloqueComentario.hidden = !comentario;
    raiz.querySelector('[data-comentario-publicacion]').textContent = comentario;

    const bloqueFoto = raiz.querySelector('[data-bloque-foto]');
    bloqueFoto.hidden = !publicacion.fotoUrl;
    if (publicacion.fotoUrl) {
      const imagen = raiz.querySelector('[data-foto-privada]');
      imagen.src = publicacion.fotoUrl;
      imagen.alt = `Fotografía aportada por ${texto(publicacion.nombre) || 'una persona visitante'}`;
      raiz.querySelector('[data-pie-foto]').textContent = texto(publicacion.pieFoto) || 'Fotografía aportada al archivo familiar.';
    }

    const datos = raiz.querySelector('[data-datos-publicacion]');
    datos.replaceChildren();
    añadirDato(datos, 'Correo privado', publicacion.email);
    añadirDato(datos, 'Fecha de la fotografía', publicacion.fechaFoto);
    añadirDato(datos, 'Lugar', publicacion.lugar);
    añadirDato(datos, 'Personas', publicacion.personas);
    añadirDato(datos, 'Contexto', publicacion.contexto);
    añadirDato(datos, 'Procedencia', publicacion.procedencia);
    if (!datos.children.length) añadirDato(datos, 'Información adicional', 'No se añadieron datos adicionales.');

    const respuestas = Array.isArray(publicacion.respuestas) ? publicacion.respuestas : [];
    const bloqueRespuestas = raiz.querySelector('[data-bloque-respuestas]');
    const lista = raiz.querySelector('[data-lista-respuestas]');
    lista.replaceChildren();
    bloqueRespuestas.hidden = !respuestas.length;
    respuestas.forEach((respuesta) => {
      const item = document.createElement('li');
      const encabezado = document.createElement('div');
      const nombre = document.createElement('strong');
      const fecha = document.createElement('time');
      const contenido = document.createElement('p');
      nombre.textContent = texto(respuesta.nombre) || 'Sin nombre';
      fecha.textContent = formatearFecha(respuesta.creadoEn, true);
      fecha.dateTime = respuesta.creadoEn || '';
      contenido.textContent = texto(respuesta.comentario) || 'Respuesta sin texto.';
      if (respuesta.estado && respuesta.estado !== 'visible') {
        contenido.className = 'respuesta-oculta';
        contenido.textContent = `${contenido.textContent} (${respuesta.estado})`;
      }
      encabezado.append(nombre, fecha);
      item.append(encabezado, contenido);
      lista.append(item);
    });
    actualizarAccion();
    carga.hidden = true;
    ficha.hidden = false;
  }

  function actualizarAccion() {
    const retirada = publicacionActual?.estado === 'retirada';
    boton.dataset.accion = retirada ? 'restaurar' : 'retirar';
    boton.textContent = retirada ? 'Restaurar publicación' : 'Retirar del sitio';
    raiz.querySelector('[data-explicacion-estado]').textContent = retirada
      ? 'Esta colaboración está retirada y no aparece en el Libro de visitas público.'
      : 'Esta colaboración está visible actualmente en el Libro de visitas público.';
  }

  async function cargar() {
    if (!id || !token || !exp) {
      mostrarError('Este enlace está incompleto. Abre de nuevo el enlace privado que recibiste por correo.');
      return;
    }
    try {
      const respuesta = await fetch(`/api/administracion/publicacion/${encodeURIComponent(id)}?token=${encodeURIComponent(token)}&exp=${encodeURIComponent(exp)}`, { headers: { Accept: 'application/json' } });
      if (respuesta.status === 403) throw new Error('Este enlace privado no es válido o ha dejado de estar disponible. Solicita un nuevo aviso si necesitas revisar la publicación.');
      if (respuesta.status === 404) throw new Error('No encontramos esta colaboración. Puede que el enlace corresponda a un aporte que ya no está disponible.');
      if (!respuesta.ok) throw new Error('No fue posible cargar la colaboración ahora. Inténtalo de nuevo en unos minutos.');
      const datos = await respuesta.json();
      mostrarPublicacion(datos.publicacion);
    } catch (problema) {
      mostrarError(problema.message || 'No fue posible abrir esta revisión.');
    }
  }

  boton.addEventListener('click', async () => {
    if (!publicacionActual) return;
    const accion = boton.dataset.accion;
    const pregunta = accion === 'retirar'
      ? '¿Retirar esta publicación del sitio público? El aporte permanecerá guardado en el archivo.'
      : '¿Restaurar esta publicación para que vuelva a aparecer en el sitio público?';
    if (!window.confirm(pregunta)) return;
    boton.disabled = true;
    estadoAccion.className = 'estado-accion';
    estadoAccion.textContent = accion === 'retirar' ? 'Retirando la publicación…' : 'Restaurando la publicación…';
    try {
      const respuesta = await fetch(`/api/administracion/publicacion/${encodeURIComponent(id)}/estado`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ token, exp, accion }),
      });
      if (!respuesta.ok) throw new Error('No se pudo guardar el cambio. La publicación conserva su estado anterior.');
      const datos = await respuesta.json();
      publicacionActual.estado = datos.estado;
      const insignia = raiz.querySelector('[data-estado-publicacion]');
      insignia.textContent = estadoLegible(datos.estado);
      insignia.dataset.estado = datos.estado;
      actualizarAccion();
      estadoAccion.className = 'estado-accion exito';
      estadoAccion.textContent = datos.estado === 'retirada'
        ? 'La publicación se ha retirado del sitio público. El aporte sigue conservado en el archivo.'
        : 'La publicación se ha restaurado y vuelve a estar visible en el sitio público.';
    } catch (problema) {
      estadoAccion.className = 'estado-accion error';
      estadoAccion.textContent = problema.message || 'No se pudo guardar el cambio.';
    } finally {
      boton.disabled = false;
    }
  });

  cargar();
}
