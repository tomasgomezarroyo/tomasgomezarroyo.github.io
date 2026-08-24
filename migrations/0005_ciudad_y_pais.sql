-- El lugar de quien firma pasa de un único campo «puerto» a ciudad y país por
-- separado, para poder mostrarlo siempre igual («Oporto, Portugal») y para que
-- funcione con cualquier lugar del mundo: la familia está repartida entre
-- España, Chile, Portugal, Reino Unido y Australia, y no hay tabla de
-- coordenadas que cubra eso sin mantenimiento perpetuo.
ALTER TABLE publicaciones RENAME COLUMN puerto TO ciudad;
ALTER TABLE publicaciones ADD COLUMN pais TEXT NOT NULL DEFAULT '';
