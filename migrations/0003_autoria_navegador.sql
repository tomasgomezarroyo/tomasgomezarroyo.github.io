ALTER TABLE publicaciones ADD COLUMN autor_token_hash TEXT;
ALTER TABLE respuestas ADD COLUMN autor_token_hash TEXT;
ALTER TABLE respuestas ADD COLUMN actualizado_en TEXT;
