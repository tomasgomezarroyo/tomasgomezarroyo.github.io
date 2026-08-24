/**
 * Épocas a las que un lector puede anclar su recuerdo en el Libro de visitas.
 *
 * Es la lista que ve quien firma y la que usan los capítulos para mostrar los
 * recuerdos relacionados. El identificador `slug` coincide con el del capítulo
 * cuando lo hay; las épocas posteriores a las memorias escritas (la vida de
 * Tomás siguió hasta 1995, el manuscrito llega a 1954) no tienen capítulo y
 * solo viven en el libro.
 */
export interface Epoca {
  slug: string;
  titulo: string;
  periodo: string;
  /** Slug del capítulo del sitio, si esta época corresponde a uno. */
  capitulo?: string;
}

export const epocas: Epoca[] = [
  { slug: 'prologo', titulo: 'Las Canteras y los últimos años', periodo: '1991', capitulo: 'prologo' },
  { slug: 'capitulo-primero', titulo: 'Infancia y la guerra', periodo: '1920 – 1939', capitulo: 'capitulo-primero' },
  { slug: 'capitulo-segundo', titulo: 'La Escuela Naval', periodo: '1939 – 1941', capitulo: 'capitulo-segundo' },
  { slug: 'capitulo-tercero', titulo: 'Guardiamarina', periodo: '1941 – 1943', capitulo: 'capitulo-tercero' },
  { slug: 'capitulo-cuarto', titulo: 'Alférez de navío', periodo: '1943', capitulo: 'capitulo-cuarto' },
  { slug: 'capitulo-quinto', titulo: 'Pontevedra y el noviazgo', periodo: '1944 – 1945', capitulo: 'capitulo-quinto' },
  { slug: 'capitulo-sexto', titulo: 'Cádiz y Lanzarote', periodo: '1946', capitulo: 'capitulo-sexto' },
  { slug: 'capitulo-septimo', titulo: 'La boda y la familia', periodo: '1946 – 1947', capitulo: 'capitulo-septimo' },
  { slug: 'capitulo-octavo', titulo: 'El Churruca y Cartagena', periodo: '1948 – 1949', capitulo: 'capitulo-octavo' },
  { slug: 'capitulo-noveno', titulo: 'Ceuta y el primer mando', periodo: '1949 – 1952', capitulo: 'capitulo-noveno' },
  { slug: 'capitulo-decimo', titulo: 'El final del manuscrito', periodo: '1952 – 1954', capitulo: 'capitulo-decimo' },
  { slug: 'newport', titulo: 'Newport y el Naval War College', periodo: '1972 – 1973' },
  { slug: 'chile', titulo: 'Chile y la misión diplomática', periodo: '1976 – 1978' },
  { slug: 'almirante', titulo: 'El Ferrol y los años de almirante', periodo: '1979 – 1995' },
  { slug: 'sin-epoca', titulo: 'No se relaciona con una época concreta', periodo: '' },
];

export const epocaPorSlug = new Map(epocas.map((e) => [e.slug, e]));
