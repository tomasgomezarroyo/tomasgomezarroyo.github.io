const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const MB = 1024 * 1024;
const AUTHORSHIP_KEY = 'libro-visitas-autoria-v1';
const root = $('[data-libro-visitas]');
const apiOrigin = (document.querySelector('meta[name="api-origin"]')?.getAttribute('content') || '').replace(/\/+$/, '');
const apiUrl = (url) => /^https?:\/\//i.test(url) ? url : `${apiOrigin}${url}`;

if (root) {
  const formMessage = $('[data-form-mensaje]');
  const dialogPhoto = $('[data-dialogo-foto]');
  const formPhoto = $('[data-form-foto]');
  const fileInput = $('#archivo-foto');
  const preview = $('[data-vista-previa]');
  const previewImage = $('[data-imagen-previa]');
  const fileDetails = $('[data-datos-archivo]');
  const optimizeState = $('[data-estado-optimizacion]');
  const list = $('[data-lista]');
  const listState = $('[data-estado-lista]');
  const empty = $('[data-vacio]');
  const counter = $('[data-contador]');
  const notices = $('[data-avisos-restauracion]');
  const actionVerification = $('[data-verificacion-acciones]');
  const viewer = $('[data-visor-foto]');
  const showEmail = $('[data-mostrar-correo]');
  const visibleEmail = $('[data-correo-visible]');
  const logbook = $('[data-bitacora]');
  const filters = $('[data-filtros]');
  const filterSelect = $('[data-filtro-epoca]');
  const placesBox = $('[data-lugares]');
  const placesList = $('[data-lista-lugares]');
  let selectedPhoto = null;
  let publications = [];
  let activeEpoch = '';

  // Épocas y puertos que la carta sabe situar. Los inyecta la página porque este
  // guion vive en /public y no puede importar de src.
  const bookData = (() => {
    try { return JSON.parse($('[data-datos-libro]')?.textContent || '{}'); } catch { return {}; }
  })();
  const epochs = bookData.epocas || [];
  const epochBySlug = new Map(epochs.map((e) => [e.slug, e]));

  // El lugar de quien firma se muestra tal como lo escribió: «Oporto, Portugal».
  // No se traduce a coordenadas ni se coteja contra ninguna lista, así vale
  // cualquier lugar del mundo sin mantenimiento alguno.
  const placeText = (p) => [p.ciudad, p.pais].filter(Boolean).join(', ');

  const setState = (node, text, kind = '') => {
    node.textContent = text;
    node.className = `estado-formulario${kind ? ` ${kind}` : ''}`;
  };
  const errorText = (error) => ({ verificacion: 'Completa la verificación.', limite: 'Se alcanzó el límite temporal. Inténtalo más tarde.', almacenamiento: 'El almacenamiento de fotografías todavía no está activado.', nombre: 'Escribe un nombre válido.', comentario: 'Escribe un mensaje.', campos: 'Completa el nombre y el texto.', pieFoto: 'Añade un pie de foto.', fotoVista: 'No se pudo preparar la versión pública de la foto.', fotoOriginal: 'La fotografía es demasiado grande.', tipoFoto: 'El formato de imagen no es válido.', noDisponible: 'Esta aportación ya no está disponible o fue creada desde otro navegador.' }[error] || 'No se pudo guardar el cambio. Inténtalo de nuevo.');
  const formatBytes = (bytes) => `${(bytes / MB).toFixed(bytes >= MB ? 1 : 2)} MB`;
  const dateText = (value) => { const d = new Date(value); return Number.isNaN(d.getTime()) ? '' : new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' }).format(d); };
  const text = (tag, value, className) => { const el = document.createElement(tag); if (className) el.className = className; el.textContent = value || ''; return el; };
  const button = (label, className = 'accion-texto') => { const el = document.createElement('button'); el.type = 'button'; el.className = className; el.textContent = label; return el; };

  function storedAuthorship() {
    try {
      const value = JSON.parse(localStorage.getItem(AUTHORSHIP_KEY) || '{}');
      return value && typeof value === 'object' ? value : {};
    } catch { return {}; }
  }
  function authorToken(kind, id) { return storedAuthorship()?.[kind]?.[id] || ''; }
  function rememberAuthorship(kind, id, token) {
    if (!id || !token) return;
    const value = storedAuthorship();
    value[kind] = value[kind] && typeof value[kind] === 'object' ? value[kind] : {};
    value[kind][id] = token;
    try { localStorage.setItem(AUTHORSHIP_KEY, JSON.stringify(value)); } catch {}
  }
  function forgetAuthorship(kind, id) {
    const value = storedAuthorship();
    if (!value[kind]) return;
    delete value[kind][id];
    try { localStorage.setItem(AUTHORSHIP_KEY, JSON.stringify(value)); } catch {}
  }

  function editField(labelText, name, value, { textarea = false, maxLength = 500, rows = 3 } = {}) {
    const field = document.createElement('label'); field.className = 'campo campo-edicion';
    if (textarea) field.classList.add('campo-edicion-ancho');
    field.append(text('span', labelText));
    const control = document.createElement(textarea ? 'textarea' : 'input');
    control.name = name; control.maxLength = maxLength; control.value = value || '';
    if (textarea) control.rows = rows;
    field.append(control);
    return field;
  }

  function turnstileToken(form) { return $('[name="cf-turnstile-response"]', form)?.value || ''; }
  function resetTurnstile(form) { const widget = $('.cf-turnstile', form); if (window.turnstile && widget) { try { window.turnstile.reset(widget); } catch {} } }
  function actionTurnstileToken() { return $('[name="cf-turnstile-response"]', actionVerification)?.value || ''; }
  function resetActionTurnstile() { const widget = $('[data-turnstile-acciones]'); if (window.turnstile && widget) { try { window.turnstile.reset(widget); } catch {} } }
  async function api(url, options = {}) { const response = await fetch(apiUrl(url), options); let data = {}; try { data = await response.json(); } catch {} if (!response.ok) throw Object.assign(new Error(data.error || 'request'), { code: data.error, status: response.status }); return data; }

  function render() {
    const visible = activeEpoch ? publications.filter((p) => p.capitulo === activeEpoch) : publications;
    list.replaceChildren();
    visible.forEach((publication) => list.append(renderPublication(publication)));
    listState.hidden = true;
    empty.hidden = publications.length > 0;
    counter.textContent = activeEpoch
      ? `${visible.length} de ${publications.length} ${publications.length === 1 ? 'firma' : 'firmas'}`
      : `${publications.length} ${publications.length === 1 ? 'firma' : 'firmas'}`;
    renderLogbook();
    renderFilter();
    renderPlaces();
  }

  // Línea de bitácora: cuántas firmas lleva el libro y de dónde vino la última.
  function renderLogbook() {
    if (!logbook) return;
    if (!publications.length) {
      logbook.textContent = 'El libro está en blanco. La primera firma puede ser la tuya.';
      return;
    }
    const total = publications.length;
    const last = publications[0];
    const cuando = dateText(last.creadoEn);
    const lugar = placeText(last);
    const desde = lugar ? ` desde ${lugar}` : '';
    logbook.textContent = total === 1
      ? `El libro lleva una firma${desde ? `,${desde}` : ''}.`
      : `El libro lleva ${total} firmas; la última${desde}${cuando ? `, el ${cuando}` : ''}.`;
  }

  // El filtro solo aparece cuando hay firmas ancladas a más de una época: antes
  // de eso sería un control vacío que no hace nada.
  function renderFilter() {
    if (!filters || !filterSelect) return;
    const used = [...new Set(publications.map((p) => p.capitulo).filter(Boolean))];
    if (used.length < 2) {
      filters.hidden = true;
      return;
    }
    const previous = filterSelect.value;
    filterSelect.replaceChildren();
    filterSelect.append(new Option(`Todas las firmas (${publications.length})`, ''));
    epochs.forEach((epoch) => {
      const count = publications.filter((p) => p.capitulo === epoch.slug).length;
      if (!count) return;
      filterSelect.append(new Option(`${epoch.titulo} (${count})`, epoch.slug));
    });
    filterSelect.value = previous;
    if (filterSelect.value !== previous) {
      filterSelect.value = '';
      activeEpoch = '';
    }
    filters.hidden = false;
  }

  // Los lugares desde los que se ha firmado, tal como los escribieron. Sin
  // coordenadas ni listas cerradas: sirve igual para Ferrol que para Melbourne.
  function renderPlaces() {
    if (!placesBox || !placesList) return;
    const lugares = [...new Set(publications.map(placeText).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b, 'es'));
    placesList.replaceChildren();
    lugares.forEach((lugar) => placesList.append(text('li', lugar)));
    placesBox.hidden = lugares.length === 0;
  }
  function inicial(nombre) { return (String(nombre || '?').trim().charAt(0) || '?').toUpperCase(); }
  function renderPublication(p) {
    const article = document.createElement('article'); article.className = 'entrada-libro'; article.dataset.id = p.id;
    article.append(text('div', inicial(p.nombre), 'entrada-avatar'));
    const body = document.createElement('div'); body.className = 'entrada-cuerpo';
    const head = document.createElement('div'); head.className = 'entrada-cabecera';
    head.append(text('h3', p.nombre, 'entrada-autor'));
    const lugarEntrada = placeText(p);
    if (lugarEntrada) head.append(text('span', `desde ${lugarEntrada}`, 'entrada-puerto'));
    head.append(text('time', dateText(p.creadoEn), 'entrada-fecha'));
    if (p.tipo === 'fotografia') head.append(text('span', 'Fotografía', 'entrada-tipo'));
    body.append(head);
    if (p.comentario) body.append(text('p', p.comentario, 'entrada-texto'));
    const epoch = p.capitulo ? epochBySlug.get(p.capitulo) : null;
    if (epoch) {
      const link = document.createElement(epoch.capitulo ? 'a' : 'span');
      link.className = 'entrada-epoca';
      link.textContent = `Sobre: ${epoch.titulo}`;
      if (epoch.capitulo) link.href = `/capitulo/${epoch.capitulo}`;
      body.append(link);
    }
    if (p.tieneFoto && p.fotoUrl) {
      const figure = document.createElement('figure'); figure.className = 'foto-aporte'; const open = button('Ampliar fotografía');
      const img = document.createElement('img'); img.src = apiUrl(p.fotoUrl); img.alt = p.pieFoto || 'Fotografía aportada'; img.loading = 'lazy'; open.append(img); open.addEventListener('click', () => openViewer(p)); figure.append(open, text('figcaption', p.pieFoto));
      const meta = document.createElement('div'); meta.className = 'metadatos-foto'; [[p.fechaFoto, 'Fecha'], [p.lugar, 'Lugar'], [p.personas, 'Personas'], [p.procedencia, 'Procedencia']].forEach(([v, k]) => { if (v) meta.append(text('span', `${k}: ${v}`)); }); if (meta.childNodes.length) figure.append(meta); if (p.contexto) figure.append(text('p', p.contexto, 'contexto-foto')); body.append(figure);
    }
    const answers = document.createElement('div'); answers.className = 'respuestas'; (p.respuestas || []).forEach((answer) => answers.append(renderAnswer(answer, p)));
    const answerForm = document.createElement('form'); answerForm.className = 'form-respuesta'; answerForm.hidden = true;
    const name = document.createElement('input'); name.required = true; name.maxLength = 80; name.name = 'nombre'; name.placeholder = 'Tu nombre'; name.setAttribute('aria-label', 'Tu nombre');
    const comment = document.createElement('input'); comment.required = true; comment.maxLength = 2000; comment.name = 'comentario'; comment.placeholder = 'Escribe tu respuesta'; comment.setAttribute('aria-label', 'Tu respuesta');
    answerForm.append(name, comment, (() => { const b = document.createElement('button'); b.textContent = 'Publicar respuesta'; return b; })()); answerForm.addEventListener('submit', (event) => submitAnswer(event, p, answers));
    const actions = document.createElement('div'); actions.className = 'acciones-entrada';
    const reply = button('Responder', 'accion-texto responder'); reply.setAttribute('aria-expanded', 'false');
    reply.addEventListener('click', () => {
      answerForm.hidden = !answerForm.hidden;
      reply.setAttribute('aria-expanded', String(!answerForm.hidden));
      if (!answerForm.hidden) name.focus();
    });
    const token = authorToken('publicaciones', p.id);
    let editForm = null;
    if (token) {
      editForm = publicationEditForm(p);
      editForm.hidden = true;
      const edit = button('Editar', 'accion-texto editar'); edit.setAttribute('aria-expanded', 'false');
      edit.addEventListener('click', () => {
        editForm.hidden = !editForm.hidden;
        edit.setAttribute('aria-expanded', String(!editForm.hidden));
        if (!editForm.hidden) $('[name="nombre"]', editForm)?.focus();
      });
      const remove = button('Eliminar', 'accion-texto eliminar');
      remove.addEventListener('click', () => deletePublication(p));
      actions.append(reply, edit, remove);
    } else {
      actions.append(reply);
    }
    const report = button('Denunciar', 'accion-texto denunciar'); report.addEventListener('click', () => reportPublication(p, article));
    actions.append(report);
    body.append(answers, actions, answerForm);
    if (editForm) body.append(editForm);
    article.append(body); return article;
  }
  function renderAnswer(answer, publication) {
    const item = document.createElement('article'); item.className = 'respuesta';
    item.append(text('div', inicial(answer.nombre), 'respuesta-avatar'));
    const body = document.createElement('div'); body.className = 'respuesta-cuerpo';
    const head = document.createElement('div'); head.className = 'respuesta-cabecera';
    head.append(text('h4', answer.nombre, 'respuesta-autor'), text('time', dateText(answer.creadoEn), 'respuesta-fecha'));
    body.append(head, text('p', answer.comentario, 'respuesta-texto'));
    const token = authorToken('respuestas', answer.id);
    if (token) {
      const actions = document.createElement('div'); actions.className = 'acciones-respuesta';
      const form = answerEditForm(answer, publication); form.hidden = true;
      const edit = button('Editar', 'accion-texto editar'); edit.setAttribute('aria-expanded', 'false');
      edit.addEventListener('click', () => {
        form.hidden = !form.hidden;
        edit.setAttribute('aria-expanded', String(!form.hidden));
        if (!form.hidden) $('[name="nombre"]', form)?.focus();
      });
      const remove = button('Eliminar', 'accion-texto eliminar');
      remove.addEventListener('click', () => deleteAnswer(answer, publication));
      actions.append(edit, remove); body.append(actions, form);
    }
    item.append(body);
    return item;
  }
  function publicationEditForm(p) {
    const form = document.createElement('form'); form.className = 'form-edicion form-edicion-publicacion';
    form.append(text('strong', 'Editar tu publicación', 'titulo-edicion'));
    const name = editField('Tu nombre', 'nombre', p.nombre, { maxLength: 80 });
    $('[name="nombre"]', name).required = true;
    const comment = editField('Tu mensaje', 'comentario', p.comentario, { textarea: true, maxLength: 3000, rows: 4 });
    $('[name="comentario"]', comment).required = true;
    form.append(
      name,
      comment,
      editField('Tu ciudad', 'ciudad', p.ciudad, { maxLength: 80 }),
      editField('Tu país', 'pais', p.pais, { maxLength: 80 }),
    );
    // La época se edita con un desplegable, no con texto libre: es una lista
    // cerrada y escribirla a mano solo produciría valores que no casan.
    const epochField = document.createElement('label');
    epochField.className = 'campo campo-edicion campo-edicion-ancho';
    epochField.append(text('span', 'Época relacionada'));
    const epochSelect = document.createElement('select');
    epochSelect.name = 'capitulo';
    epochSelect.append(new Option('No se relaciona con una época concreta', ''));
    epochs.forEach((e) => epochSelect.append(new Option(e.periodo ? `${e.titulo} · ${e.periodo}` : e.titulo, e.slug)));
    epochSelect.value = p.capitulo || '';
    epochField.append(epochSelect);
    form.append(epochField);
    if (p.tipo === 'fotografia') {
      const caption = editField('Pie de foto', 'pieFoto', p.pieFoto, { textarea: true, maxLength: 500, rows: 3 });
      $('[name="pieFoto"]', caption).required = true;
      form.append(
        caption,
        editField('Fecha o época', 'fechaFoto', p.fechaFoto, { maxLength: 100 }),
        editField('Lugar', 'lugar', p.lugar, { maxLength: 160 }),
        editField('Personas que aparecen', 'personas', p.personas, { maxLength: 500 }),
        editField('Contexto o dato histórico', 'contexto', p.contexto, { textarea: true, maxLength: 1500, rows: 4 }),
        editField('Procedencia', 'procedencia', p.procedencia, { maxLength: 300 }),
      );
    }
    const status = text('p', '', 'estado-edicion'); status.setAttribute('role', 'status');
    const controls = document.createElement('div'); controls.className = 'controles-edicion';
    const cancel = button('Cancelar', 'boton secundario'); cancel.addEventListener('click', () => { form.hidden = true; });
    const save = document.createElement('button'); save.type = 'submit'; save.className = 'boton primario'; save.textContent = 'Guardar cambios';
    controls.append(cancel, save); form.append(status, controls);
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); save.disabled = true; status.textContent = 'Guardando cambios…';
      const values = Object.fromEntries(new FormData(form).entries()); values.token = authorToken('publicaciones', p.id);
      try {
        const result = await api(`/api/autoria/publicaciones/${encodeURIComponent(p.id)}`, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify(values) });
        Object.assign(p, result.publicacion, { respuestas: p.respuestas || [] }); render();
      } catch (error) { status.textContent = errorText(error.code); save.disabled = false; }
    });
    return form;
  }
  function answerEditForm(answer, publication) {
    const form = document.createElement('form'); form.className = 'form-edicion form-edicion-respuesta';
    const name = editField('Tu nombre', 'nombre', answer.nombre, { maxLength: 80 }); $('[name="nombre"]', name).required = true;
    const comment = editField('Tu respuesta', 'comentario', answer.comentario, { textarea: true, maxLength: 2000, rows: 3 }); $('[name="comentario"]', comment).required = true;
    const status = text('p', '', 'estado-edicion'); status.setAttribute('role', 'status');
    const controls = document.createElement('div'); controls.className = 'controles-edicion';
    const cancel = button('Cancelar', 'boton secundario'); cancel.addEventListener('click', () => { form.hidden = true; });
    const save = document.createElement('button'); save.type = 'submit'; save.className = 'boton primario'; save.textContent = 'Guardar respuesta';
    controls.append(cancel, save); form.append(name, comment, status, controls);
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); save.disabled = true; status.textContent = 'Guardando cambios…';
      const values = Object.fromEntries(new FormData(form).entries()); values.token = authorToken('respuestas', answer.id);
      try {
        const result = await api(`/api/autoria/respuestas/${encodeURIComponent(answer.id)}`, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify(values) });
        Object.assign(answer, result.respuesta); render();
      } catch (error) { status.textContent = errorText(error.code); save.disabled = false; }
    });
    return form;
  }
  async function deletePublication(p) {
    if (!confirm('¿Eliminar tu publicación del Libro de visitas? Dejará de verse inmediatamente, pero podrá recuperarse desde administración.')) return;
    try {
      await api(`/api/autoria/publicaciones/${encodeURIComponent(p.id)}`, { method: 'DELETE', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ token: authorToken('publicaciones', p.id) }) });
      forgetAuthorship('publicaciones', p.id); publications = publications.filter((item) => item.id !== p.id); render();
    } catch (error) { alert(errorText(error.code)); }
  }
  async function deleteAnswer(answer, publication) {
    if (!confirm('¿Eliminar esta respuesta? Dejará de verse inmediatamente.')) return;
    try {
      await api(`/api/autoria/respuestas/${encodeURIComponent(answer.id)}`, { method: 'DELETE', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ token: authorToken('respuestas', answer.id) }) });
      forgetAuthorship('respuestas', answer.id); publication.respuestas = (publication.respuestas || []).filter((item) => item.id !== answer.id); render();
    } catch (error) { alert(errorText(error.code)); }
  }
  async function submitAnswer(event, p, container) { event.preventDefault(); const form = event.currentTarget; const submit = $('button', form); const verification = actionTurnstileToken(); if (!verification) { alert(errorText('verificacion')); actionVerification?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; } submit.disabled = true; try { const result = await api(`/api/publicaciones/${encodeURIComponent(p.id)}/respuestas`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ nombre: form.nombre.value, comentario: form.comentario.value, website: '', 'cf-turnstile-response': verification }) }); rememberAuthorship('respuestas', result.respuesta.id, result.tokenAutor); p.respuestas.push(result.respuesta); container.append(renderAnswer(result.respuesta, p)); form.reset(); } catch (e) { alert(errorText(e.code)); } finally { resetActionTurnstile(); submit.disabled = false; } }
  function openViewer(p) { $('[data-visor-imagen]', viewer).src = apiUrl(p.fotoUrl); $('[data-visor-imagen]', viewer).alt = p.pieFoto || 'Fotografía aportada'; $('[data-visor-pie]', viewer).textContent = p.pieFoto || ''; viewer.showModal(); }

  function storedReports() { try { return JSON.parse(localStorage.getItem('libro-visitas-denuncias') || '[]'); } catch { return []; } }
  function saveReports(entries) { localStorage.setItem('libro-visitas-denuncias', JSON.stringify(entries)); }
  function renderRestoreNotices() { notices.replaceChildren(); storedReports().forEach((entry) => { const box = document.createElement('div'); box.className = 'aviso-restaurar'; box.append(text('span', 'Has denunciado una publicación. Si fue un error, puedes restaurarla.'), (() => { const b = button('Restaurar publicación', 'boton secundario'); b.addEventListener('click', () => restore(entry, b)); return b; })()); notices.append(box); }); }
  async function reportPublication(p, article) { const verification = actionTurnstileToken(); if (!verification) { alert(errorText('verificacion')); actionVerification?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; } if (!confirm('La publicación se ocultará inmediatamente. ¿Quieres denunciarla?')) return; try { const result = await api(`/api/publicaciones/${encodeURIComponent(p.id)}/denunciar`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ 'cf-turnstile-response': verification }) }); const entries = storedReports().filter((item) => item.id !== p.id); entries.push({ id: p.id, token: result.token }); saveReports(entries); article.replaceWith(Object.assign(document.createElement('article'), { className: 'publicacion-oculta', textContent: 'Esta publicación fue ocultada tras una denuncia.' })); renderRestoreNotices(); } catch (e) { alert(errorText(e.code)); } finally { resetActionTurnstile(); } }
  async function restore(entry, control) { control.disabled = true; try { await api(`/api/publicaciones/${encodeURIComponent(entry.id)}/restaurar`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ token: entry.token }) }); saveReports(storedReports().filter((item) => item.id !== entry.id)); renderRestoreNotices(); await load(); } catch (e) { control.disabled = false; alert('No se pudo restaurar la publicación.'); } }

  async function canvasFile(source, maxSide, maxBytes) {
    const bitmap = await createImageBitmap(source); let scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height)); let quality = 0.9;
    for (let attempt = 0; attempt < 12; attempt += 1) { const canvas = document.createElement('canvas'); canvas.width = Math.max(1, Math.round(bitmap.width * scale)); canvas.height = Math.max(1, Math.round(bitmap.height * scale)); canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height); const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', quality)); if (!blob) throw new Error('canvas'); if (blob.size <= maxBytes) { bitmap.close(); return new File([blob], 'fotografia.jpg', { type: 'image/jpeg' }); } quality -= 0.1; if (quality < 0.45) { quality = 0.82; scale *= 0.78; } }
    bitmap.close(); throw new Error('size');
  }
  async function preparePhoto(file) {
    optimizeState.className = 'estado-optimizacion'; optimizeState.textContent = 'Preparando versiones de la fotografía…';
    if (/heic|heif/i.test(file.type) || /\.hei[cf]$/i.test(file.name)) throw new Error('heic');
    const view = await canvasFile(file, 1800, 3 * MB);
    const original = file.size <= 15 * MB ? file : await canvasFile(file, Math.max(1800, 5000), 15 * MB);
    selectedPhoto = { view, original }; const url = URL.createObjectURL(view); if (previewImage.dataset.url) URL.revokeObjectURL(previewImage.dataset.url); previewImage.src = url; previewImage.dataset.url = url; preview.hidden = false;
    fileDetails.textContent = `Original: ${formatBytes(file.size)} · copia pública: ${formatBytes(view.size)}${original !== file ? ` · original reducido: ${formatBytes(original.size)}` : ''}`;
    optimizeState.className = 'estado-optimizacion exito'; optimizeState.textContent = original === file ? 'La fotografía está lista.' : 'La fotografía superaba 15 MB y fue reducida para conservarla.';
  }

  async function load() { try { const data = await api('/api/publicaciones'); publications = data.publicaciones || []; render(); } catch { listState.textContent = 'No pudimos abrir el Libro de visitas. Comprueba tu conexión y vuelve a intentarlo.'; } }
  function openPhotoDialog(source) {
    const messageForm = source.closest('[data-form-mensaje]');
    if (messageForm) {
      const messageName = $('#mensaje-nombre', messageForm)?.value.trim() || '';
      const messageText = $('#mensaje-texto', messageForm)?.value.trim() || '';
      const photoName = $('#foto-nombre', formPhoto);
      const photoComment = $('#foto-comentario', formPhoto);
      if (messageName) photoName.value = messageName;
      if (messageText) photoComment.value = messageText;
    }
    dialogPhoto.showModal();
  }
  $$('[data-abrir-foto]').forEach((b) => b.addEventListener('click', () => openPhotoDialog(b)));
  showEmail?.addEventListener('click', () => {
    const fromCodes = (codes) => String.fromCharCode(...codes);
    const user = fromCodes([116, 111, 109, 103, 111, 109, 101, 122, 102]);
    const provider = fromCodes([103, 109, 97, 105, 108]);
    const suffix = fromCodes([99, 111, 109]);
    visibleEmail.textContent = `${user} @ ${provider} . ${suffix}`;
    visibleEmail.hidden = false;
    showEmail.hidden = true;
  });
  $('[data-cancelar-foto]').addEventListener('click', () => dialogPhoto.close());
  $('[data-cerrar-visor]').addEventListener('click', () => viewer.close());
  fileInput.addEventListener('change', async () => { selectedPhoto = null; if (!fileInput.files?.[0]) return; try { await preparePhoto(fileInput.files[0]); } catch (e) { preview.hidden = true; optimizeState.className = 'estado-optimizacion error'; optimizeState.textContent = e.message === 'heic' ? 'Este navegador no puede convertir HEIC. Convierte la foto a JPEG antes de subirla.' : 'No se pudo procesar la fotografía. Prueba con JPEG, PNG o WebP.'; } });
  formMessage.addEventListener('submit', async (event) => { event.preventDefault(); const state = $('[data-estado-mensaje]'); const submit = $('button[type="submit"]', formMessage); submit.disabled = true; setState(state, 'Publicando…'); try { const data = new FormData(formMessage); data.set('cf-turnstile-response', turnstileToken(formMessage)); const result = await api('/api/publicaciones', { method: 'POST', body: data }); rememberAuthorship('publicaciones', result.publicacion.id, result.tokenAutor); publications.unshift(result.publicacion); render(); formMessage.reset(); setState(state, 'Mensaje publicado. Desde este navegador podrás editarlo o eliminarlo.', 'exito'); resetTurnstile(formMessage); } catch (e) { setState(state, errorText(e.code), 'error'); resetTurnstile(formMessage); } finally { submit.disabled = false; } });
  formPhoto.addEventListener('submit', async (event) => { event.preventDefault(); const state = $('[data-estado-foto]'); const submit = $('[data-publicar-foto]'); if (!selectedPhoto) { setState(state, 'Selecciona una fotografía válida.', 'error'); return; } submit.disabled = true; setState(state, 'Publicando fotografía…'); try { const data = new FormData(formPhoto); data.set('fotoVista', selectedPhoto.view); data.set('fotoOriginal', selectedPhoto.original); data.set('cf-turnstile-response', turnstileToken(formPhoto)); const result = await api('/api/publicaciones', { method: 'POST', body: data }); rememberAuthorship('publicaciones', result.publicacion.id, result.tokenAutor); publications.unshift(result.publicacion); render(); const messageText = $('#mensaje-texto', formMessage); if (messageText) messageText.value = ''; formPhoto.reset(); selectedPhoto = null; preview.hidden = true; dialogPhoto.close(); resetTurnstile(formPhoto); } catch (e) { setState(state, errorText(e.code), 'error'); resetTurnstile(formPhoto); } finally { submit.disabled = false; } });
  filterSelect?.addEventListener('change', () => {
    activeEpoch = filterSelect.value;
    render();
  });

  // Las tres puertas de entrada: llevan al mismo libro, pero dejan el formulario
  // orientado a lo que la persona venía a contar.
  const prompts = {
    conoci: 'Cuéntanos qué relación tenías con él —familiar, amigo o compañero—, en qué años y qué recuerdas.',
    lei: '¿Qué te ha dejado la lectura? Un recuerdo que te trajo, una impresión, unas palabras para la familia.',
  };
  $$('[data-pregunta]').forEach((card) => {
    card.addEventListener('click', () => {
      const kind = card.dataset.pregunta;
      if (kind === 'aporto') { openPhotoDialog(card); return; }
      const area = $('#mensaje-texto');
      const name = $('#mensaje-nombre');
      if (area && prompts[kind]) area.placeholder = prompts[kind];
      $('#firmar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => name?.focus({ preventScroll: true }), 420);
    });
  });

  // Enlace desde un capítulo: /libro-de-visitas?epoca=<slug> abre el libro ya
  // filtrado por esa época.
  function applyDeepLink() {
    const wanted = new URLSearchParams(location.search).get('epoca');
    if (!wanted || !publications.some((p) => p.capitulo === wanted)) return;
    activeEpoch = wanted;
    render();
    if (filterSelect) filterSelect.value = wanted;
    document.getElementById('titulo-participaciones')?.scrollIntoView({ block: 'start' });
  }

  renderRestoreNotices();
  load().then(applyDeepLink);
}
