const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const MB = 1024 * 1024;
const root = $('[data-libro-visitas]');

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
  let selectedPhoto = null;
  let publications = [];

  const setState = (node, text, kind = '') => {
    node.textContent = text;
    node.className = `estado-formulario${kind ? ` ${kind}` : ''}`;
  };
  const errorText = (error) => ({ verificacion: 'Completa la verificación.', limite: 'Se alcanzó el límite temporal. Inténtalo más tarde.', nombre: 'Escribe un nombre válido.', comentario: 'Escribe un mensaje.', pieFoto: 'Añade un pie de foto.', fotoVista: 'No se pudo preparar la versión pública de la foto.', fotoOriginal: 'La fotografía es demasiado grande.', tipoFoto: 'El formato de imagen no es válido.' }[error] || 'No se pudo publicar. Inténtalo de nuevo.');
  const formatBytes = (bytes) => `${(bytes / MB).toFixed(bytes >= MB ? 1 : 2)} MB`;
  const dateText = (value) => { const d = new Date(value); return Number.isNaN(d.getTime()) ? '' : new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' }).format(d); };
  const text = (tag, value, className) => { const el = document.createElement(tag); if (className) el.className = className; el.textContent = value || ''; return el; };
  const button = (label, className = 'accion-texto') => { const el = document.createElement('button'); el.type = 'button'; el.className = className; el.textContent = label; return el; };

  function turnstileToken(form) { return $('[name="cf-turnstile-response"]', form)?.value || ''; }
  function resetTurnstile(form) { const widget = $('.cf-turnstile', form); if (window.turnstile && widget) { try { window.turnstile.reset(widget); } catch {} } }
  function actionTurnstileToken() { return $('[name="cf-turnstile-response"]', actionVerification)?.value || ''; }
  function resetActionTurnstile() { const widget = $('[data-turnstile-acciones]'); if (window.turnstile && widget) { try { window.turnstile.reset(widget); } catch {} } }
  async function api(url, options = {}) { const response = await fetch(url, options); let data = {}; try { data = await response.json(); } catch {} if (!response.ok) throw Object.assign(new Error(data.error || 'request'), { code: data.error, status: response.status }); return data; }

  function render() {
    list.replaceChildren();
    publications.forEach((publication) => list.append(renderPublication(publication)));
    listState.hidden = true;
    empty.hidden = publications.length > 0;
    counter.textContent = `${publications.length} ${publications.length === 1 ? 'aportación' : 'aportaciones'}`;
  }
  function inicial(nombre) { return (String(nombre || '?').trim().charAt(0) || '?').toUpperCase(); }
  function renderPublication(p) {
    const article = document.createElement('article'); article.className = 'entrada-libro'; article.dataset.id = p.id;
    article.append(text('div', inicial(p.nombre), 'entrada-avatar'));
    const body = document.createElement('div'); body.className = 'entrada-cuerpo';
    const head = document.createElement('div'); head.className = 'entrada-cabecera';
    head.append(text('h3', p.nombre, 'entrada-autor'), text('time', dateText(p.creadoEn), 'entrada-fecha'));
    if (p.tipo === 'fotografia') head.append(text('span', 'Fotografía', 'entrada-tipo'));
    body.append(head);
    if (p.comentario) body.append(text('p', p.comentario, 'entrada-texto'));
    if (p.tieneFoto && p.fotoUrl) {
      const figure = document.createElement('figure'); figure.className = 'foto-aporte'; const open = button('Ampliar fotografía');
      const img = document.createElement('img'); img.src = p.fotoUrl; img.alt = p.pieFoto || 'Fotografía aportada'; img.loading = 'lazy'; open.append(img); open.addEventListener('click', () => openViewer(p)); figure.append(open, text('figcaption', p.pieFoto));
      const meta = document.createElement('div'); meta.className = 'metadatos-foto'; [[p.fechaFoto, 'Fecha'], [p.lugar, 'Lugar'], [p.personas, 'Personas'], [p.procedencia, 'Procedencia']].forEach(([v, k]) => { if (v) meta.append(text('span', `${k}: ${v}`)); }); if (meta.childNodes.length) figure.append(meta); if (p.contexto) figure.append(text('p', p.contexto, 'contexto-foto')); body.append(figure);
    }
    const answers = document.createElement('div'); answers.className = 'respuestas'; (p.respuestas || []).forEach((answer) => answers.append(renderAnswer(answer)));
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
    const report = button('Denunciar', 'accion-texto denunciar'); report.addEventListener('click', () => reportPublication(p, article));
    actions.append(reply, report);
    body.append(answers, actions, answerForm); article.append(body); return article;
  }
  function renderAnswer(answer) {
    const item = document.createElement('article'); item.className = 'respuesta';
    item.append(text('div', inicial(answer.nombre), 'respuesta-avatar'));
    const body = document.createElement('div');
    const head = document.createElement('div'); head.className = 'respuesta-cabecera';
    head.append(text('h4', answer.nombre, 'respuesta-autor'), text('time', dateText(answer.creadoEn), 'respuesta-fecha'));
    body.append(head, text('p', answer.comentario, 'respuesta-texto'));
    item.append(body);
    return item;
  }
  async function submitAnswer(event, p, container) { event.preventDefault(); const form = event.currentTarget; const submit = $('button', form); const verification = actionTurnstileToken(); if (!verification) { alert(errorText('verificacion')); actionVerification?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; } submit.disabled = true; try { const result = await api(`/api/publicaciones/${encodeURIComponent(p.id)}/respuestas`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ nombre: form.nombre.value, comentario: form.comentario.value, website: '', 'cf-turnstile-response': verification }) }); p.respuestas.push(result.respuesta); container.append(renderAnswer(result.respuesta)); form.reset(); } catch (e) { alert(errorText(e.code)); } finally { resetActionTurnstile(); submit.disabled = false; } }
  function openViewer(p) { $('[data-visor-imagen]', viewer).src = p.fotoUrl; $('[data-visor-imagen]', viewer).alt = p.pieFoto || 'Fotografía aportada'; $('[data-visor-pie]', viewer).textContent = p.pieFoto || ''; viewer.showModal(); }

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
  $$('[data-abrir-foto]').forEach((b) => b.addEventListener('click', () => dialogPhoto.showModal()));
  $('[data-cancelar-foto]').addEventListener('click', () => dialogPhoto.close());
  $('[data-cerrar-visor]').addEventListener('click', () => viewer.close());
  fileInput.addEventListener('change', async () => { selectedPhoto = null; if (!fileInput.files?.[0]) return; try { await preparePhoto(fileInput.files[0]); } catch (e) { preview.hidden = true; optimizeState.className = 'estado-optimizacion error'; optimizeState.textContent = e.message === 'heic' ? 'Este navegador no puede convertir HEIC. Convierte la foto a JPEG antes de subirla.' : 'No se pudo procesar la fotografía. Prueba con JPEG, PNG o WebP.'; } });
  formMessage.addEventListener('submit', async (event) => { event.preventDefault(); const state = $('[data-estado-mensaje]'); const submit = $('button[type="submit"]', formMessage); submit.disabled = true; setState(state, 'Publicando…'); try { const data = new FormData(formMessage); data.set('cf-turnstile-response', turnstileToken(formMessage)); const result = await api('/api/publicaciones', { method: 'POST', body: data }); publications.unshift(result.publicacion); render(); formMessage.reset(); setState(state, 'Mensaje publicado.', 'exito'); resetTurnstile(formMessage); } catch (e) { setState(state, errorText(e.code), 'error'); resetTurnstile(formMessage); } finally { submit.disabled = false; } });
  formPhoto.addEventListener('submit', async (event) => { event.preventDefault(); const state = $('[data-estado-foto]'); const submit = $('[data-publicar-foto]'); if (!selectedPhoto) { setState(state, 'Selecciona una fotografía válida.', 'error'); return; } submit.disabled = true; setState(state, 'Publicando fotografía…'); try { const data = new FormData(formPhoto); data.set('fotoVista', selectedPhoto.view); data.set('fotoOriginal', selectedPhoto.original); data.set('cf-turnstile-response', turnstileToken(formPhoto)); const result = await api('/api/publicaciones', { method: 'POST', body: data }); publications.unshift(result.publicacion); render(); formPhoto.reset(); selectedPhoto = null; preview.hidden = true; dialogPhoto.close(); resetTurnstile(formPhoto); } catch (e) { setState(state, errorText(e.code), 'error'); resetTurnstile(formPhoto); } finally { submit.disabled = false; } });
  renderRestoreNotices(); load();
}
