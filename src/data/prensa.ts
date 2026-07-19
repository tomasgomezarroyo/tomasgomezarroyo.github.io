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
  tipoDocumento: string;
  referenciaPaginas: string;
  contexto: string;
  personas: string[];
  identificacion: string;
  evidencia: string;
  credito: string;
  derechos: string;
  fechaConsulta: string;
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
    documentoTamano: '16 MB',
    tipoDocumento: 'Publicación oficial de la Armada Española',
    referenciaPaginas: 'PDF pp. 40 y 43; páginas impresas 38 y 41',
    contexto: 'Reportaje sobre la Asociación Benéfica para Huérfanos de los Cuerpos de Oficiales de la Armada. Tomás aparece como presidente de la Asociación.',
    personas: ['Vicealmirante Tomás Gómez Arroyo', 'Contralmirante Manzano Monis'],
    identificacion: 'Confirmación familiar y pies nominales de la publicación',
    evidencia: 'La página impresa 38 contiene un retrato individual con nombre y cargo. La página impresa 41 nombra al presidente Gómez Arroyo y al vicepresidente Manzano Monis; la familia confirmó que Tomás está sentado a la izquierda.',
    credito: 'Origen de los datos: Subdirección General de Publicaciones y Patrimonio Cultural, Ministerio de Defensa.',
    derechos: 'Reutilización conforme al aviso legal de Publicaciones Defensa, citando el origen y sin desnaturalizar la información. El PDF descargable es una copia recomprimida para web (Cloudflare Pages limita cada archivo a 25 MB); el escaneo original de mayor calidad se conserva íntegro en el archivo del proyecto.',
    fechaConsulta: '19 de julio de 2026',
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
    documentoTamano: '26 MB',
    tipoDocumento: 'Publicación oficial de la Armada Española',
    referenciaPaginas: 'PDF p. 59; página impresa 57',
    contexto: 'Sección «Nuestros clubs». La fotografía documenta la despedida ofrecida a Tomás por el Club Naval de Oficiales de El Ferrol al terminar su destino.',
    personas: ['Vicealmirante Tomás Gómez Arroyo', 'Oficiales del Club Naval de El Ferrol no individualizados'],
    identificacion: 'Confirmación familiar y pie nominal de la publicación',
    evidencia: 'El pie original identifica expresamente la escena como «despedida al V.A. Gómez Arroyo». La familia confirmó posteriormente que la fotografía muestra a Tomás.',
    credito: 'Origen de los datos: Subdirección General de Publicaciones y Patrimonio Cultural, Ministerio de Defensa.',
    derechos: 'Reutilización conforme al aviso legal de Publicaciones Defensa, citando el origen y sin desnaturalizar la información. El PDF descargable es una copia recomprimida para web (Cloudflare Pages limita cada archivo a 25 MB); el escaneo original de mayor calidad se conserva íntegro en el archivo del proyecto.',
    fechaConsulta: '19 de julio de 2026',
  },
];
