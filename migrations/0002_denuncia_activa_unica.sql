-- Permite aplicar la restricción también en bases que ya ejecutaron 0001.
CREATE UNIQUE INDEX IF NOT EXISTS denuncias_una_activa_por_publicacion
  ON denuncias(publicacion_id) WHERE restaurada_en IS NULL;
