-- Ancla opcional de cada aportación a un capítulo (época de la vida de Tomás)
-- y al puerto desde el que escribe quien firma. Ambos son declarados por la
-- persona, nunca deducidos: no hay geolocalización ni inferencia automática.
ALTER TABLE publicaciones ADD COLUMN capitulo TEXT NOT NULL DEFAULT '';
ALTER TABLE publicaciones ADD COLUMN puerto TEXT NOT NULL DEFAULT '';

CREATE INDEX IF NOT EXISTS publicaciones_capitulo
  ON publicaciones(capitulo, estado, creado_en DESC);
