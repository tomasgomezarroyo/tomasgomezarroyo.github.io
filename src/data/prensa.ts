export interface PaginaPrensa {
  src: string;
  alt: string;
  pie: string;
}

export interface Publicacion {
  slug: string;
  titulo: string;
  fecha: string;
  resumen: string;
  paginas: PaginaPrensa[];
  fuenteTexto: string;
  fuenteUrl: string;
  documentoUrl: string;
  documentoTamano: string;
}

export const publicaciones: Publicacion[] = [
  {
    slug: 'bip-41-junio-1985',
    titulo: 'Boletín Informativo de Personal (BIP) nº 41',
    fecha: 'Junio de 1985',
    resumen: 'Dos páginas de este número lo muestran ya como Vicealmirante: un retrato individual como Presidente de la Asociación, y una fotografía junto al contralmirante Manzano Monis. Identidad confirmada por la familia.',
    paginas: [
      {
        src: '/fotos/prensa/bip41-1985-p38-retrato-individual.jpg',
        alt: 'Página del BIP 41 con retrato individual de Tomás Gómez Arroyo',
        pie: 'Retrato individual. Pie original: «Vicealmirante D. Tomás Gómez Arroyo, Presidente de la Asociación».',
      },
      {
        src: '/fotos/prensa/bip41-1985-p41-manzano-monis.jpg',
        alt: 'Página del BIP 41 con Tomás Gómez Arroyo y el contralmirante Manzano Monis',
        pie: 'Tomás Gómez Arroyo (sentado a la izquierda) y el contralmirante Manzano Monis (a la derecha), en el despacho del primero.',
      },
    ],
    fuenteTexto: 'Armada Española — Archivo Mar Digital, Revistas',
    fuenteUrl: 'https://armada.defensa.gob.es/archivo/mardigitalrevistas/bip/1985/198501.pdf',
    documentoUrl: '/documentos/prensa/BIP-41-junio-1985.pdf',
    documentoTamano: '47 MB',
  },
  {
    slug: 'bip-39-marzo-1984',
    titulo: 'Boletín Informativo de Personal (BIP) nº 39',
    fecha: 'Marzo de 1984',
    resumen: 'Fotografía de la despedida de Tomás Gómez Arroyo por parte de los oficiales de El Ferrol. Identidad confirmada por la familia.',
    paginas: [
      {
        src: '/fotos/prensa/bip39-1984-p59-despedida-ferrol.jpg',
        alt: 'Página del BIP 39 con la despedida de Tomás Gómez Arroyo en El Ferrol',
        pie: 'Pie original: «C.N. Oficiales El Ferrol: despedida al V.A. Gómez Arroyo».',
      },
    ],
    fuenteTexto: 'Armada Española — Archivo Mar Digital, Revistas',
    fuenteUrl: 'https://armada.defensa.gob.es/archivo/mardigitalrevistas/bip/1984/198401.pdf',
    documentoUrl: '/documentos/prensa/BIP-39-marzo-1984.pdf',
    documentoTamano: '53 MB',
  },
];
