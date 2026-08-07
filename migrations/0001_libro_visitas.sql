PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS publicaciones (
  id TEXT PRIMARY KEY,
  tipo TEXT NOT NULL CHECK (tipo IN ('mensaje', 'fotografia')),
  nombre TEXT NOT NULL,
  email TEXT,
  comentario TEXT NOT NULL DEFAULT '',
  pie_foto TEXT NOT NULL DEFAULT '',
  fecha_foto TEXT NOT NULL DEFAULT '',
  lugar TEXT NOT NULL DEFAULT '',
  personas TEXT NOT NULL DEFAULT '',
  contexto TEXT NOT NULL DEFAULT '',
  procedencia TEXT NOT NULL DEFAULT '',
  foto_original_key TEXT,
  foto_vista_key TEXT,
  estado TEXT NOT NULL DEFAULT 'visible' CHECK (estado IN ('visible', 'oculta', 'retirada')),
  creado_en TEXT NOT NULL,
  actualizado_en TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS respuestas (
  id TEXT PRIMARY KEY,
  publicacion_id TEXT NOT NULL,
  nombre TEXT NOT NULL,
  comentario TEXT NOT NULL,
  estado TEXT NOT NULL DEFAULT 'visible' CHECK (estado IN ('visible', 'retirada')),
  creado_en TEXT NOT NULL,
  FOREIGN KEY (publicacion_id) REFERENCES publicaciones(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS denuncias (
  id TEXT PRIMARY KEY,
  publicacion_id TEXT NOT NULL,
  token_hash TEXT NOT NULL,
  creado_en TEXT NOT NULL,
  restaurada_en TEXT,
  FOREIGN KEY (publicacion_id) REFERENCES publicaciones(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS publicaciones_estado_fecha ON publicaciones(estado, creado_en DESC);
CREATE INDEX IF NOT EXISTS respuestas_publicacion_fecha ON respuestas(publicacion_id, creado_en ASC);
CREATE INDEX IF NOT EXISTS denuncias_publicacion_activa ON denuncias(publicacion_id, restaurada_en);
CREATE UNIQUE INDEX IF NOT EXISTS denuncias_una_activa_por_publicacion
  ON denuncias(publicacion_id) WHERE restaurada_en IS NULL;
