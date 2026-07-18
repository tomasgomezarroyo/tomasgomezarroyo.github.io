export interface ImagenBuque {
  src: string;
  alt: string;
  pie: string;
  referencia: string;
}

export interface Buque {
  slug: string;
  nombre: string;
  tipo: string;
  anos: string;
  nota: string;
  cap: string;
  imagenes: ImagenBuque[];
}

export const buques: Buque[] = [
  {
    slug: 'rey-jaime-i',
    nombre: 'Rey Jaime I',
    tipo: 'Crucero auxiliar',
    anos: '1938 – 1939',
    nota: 'Correo de la Trasmediterránea convertido en buque de guerra. Fue el primer destino de Tomás como marinero voluntario, en las patrullas del Estrecho.',
    cap: 'capitulo-primero',
    imagenes: [
      {
        src: '/fotos/buques/rey-jaime-i-armado-guerra-civil.jpg',
        alt: 'Rey Jaime I armado como crucero auxiliar durante la Guerra Civil',
        pie: 'El Rey Jaime I armado como crucero auxiliar, configuración relacionada con el servicio narrado en 1938.',
        referencia: 'Referencia: colección de Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-motonave.jpg',
        alt: 'Motonave de pasaje Rey Jaime I vista de costado',
        pie: 'El mismo buque en su configuración civil de motonave correo.',
        referencia: 'Referencia: Historia Naval de España / Todoavante; autor no identificado.',
      },
    ],
  },
  {
    slug: 'jj-sister',
    nombre: 'J.J. Sister',
    tipo: 'Motonave',
    anos: '1938',
    nota: 'El buque que lo llevó de Las Palmas a Cádiz al alistarse. La galería reúne dos imágenes de época y una maqueta claramente identificada.',
    cap: 'capitulo-primero',
    imagenes: [
      {
        src: '/fotos/buques/jj-sister-armamento-1938.jpg',
        alt: 'J.J. Sister con armamento añadido en 1938',
        pie: 'El J.J. Sister con el armamento añadido en 1938, el año del viaje narrado.',
        referencia: 'Referencia: Todoavante; autor no identificado, licencia general CC BY-NC 3.0 del sitio.',
      },
      {
        src: '/fotos/buques/jj-sister-retrato.jpg',
        alt: 'Motonave J.J. Sister navegando',
        pie: 'Vista general de la motonave J.J. Sister.',
        referencia: 'Referencia: Todoavante; autor no identificado, licencia general CC BY-NC 3.0 del sitio.',
      },
      {
        src: '/fotos/buques/jj-sister-maqueta-museu-maritim.jpg',
        alt: 'Maqueta del J.J. Sister en el Museu Marítim de Barcelona',
        pie: 'Maqueta del J.J. Sister. No es una fotografía histórica del buque real.',
        referencia: 'Foto: Jordiferrer, Wikimedia Commons, CC BY-SA 4.0.',
      },
    ],
  },
  {
    slug: 'jose-luis-diez',
    nombre: 'José Luis Díez',
    tipo: 'Destructor',
    anos: '1938',
    nota: 'Su intento de forzar el Estrecho y el combate posterior forman parte del contexto naval del primer capítulo.',
    cap: 'capitulo-primero',
    imagenes: [
      {
        src: '/fotos/buques/jose-luis-diez-1930.jpg',
        alt: 'Destructor José Luis Díez hacia 1930',
        pie: 'El destructor José Luis Díez, de la clase Churruca, hacia 1930.',
        referencia: 'Fotografía de dominio público, vía Wikimedia Commons.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-bandera-gibraltar-2015.jpg',
        alt: 'Bandera del José Luis Díez conservada en Gibraltar',
        pie: 'Bandera republicana del buque conservada en Gibraltar; fotografía de la pieza expuesta en 2015.',
        referencia: 'Foto: infogibraltar, Wikimedia Commons, CC BY 2.0.',
      },
    ],
  },
  {
    slug: 'vulcano',
    nombre: 'Vulcano',
    tipo: 'Cañonero-minador',
    anos: '1938',
    nota: 'El minador que combatió al José Luis Díez frente a Gibraltar. Se incluye por ser protagonista directo del episodio narrado, no como destino de Tomás.',
    cap: 'capitulo-primero',
    imagenes: [
      {
        src: '/fotos/buques/vulcano-cartagena-casau.jpg',
        alt: 'Cañonero-minador Vulcano en Cartagena',
        pie: 'El Vulcano modernizado, fotografiado en Cartagena.',
        referencia: 'Foto: Casaú; referencia consultada en Todoavante, licencia general CC BY-NC 3.0 del sitio.',
      },
      {
        src: '/fotos/buques/vulcano-maqueta-museo-naval.jpg',
        alt: 'Maqueta del Vulcano en el Museo Naval de Ferrol',
        pie: 'Maqueta del Vulcano. Sirve para observar la silueta y distribución; no es una foto de época.',
        referencia: 'Foto: Oilisab, Wikimedia Commons, CC BY-SA 4.0.',
      },
    ],
  },
  {
    slug: 'marte',
    nombre: 'Marte',
    tipo: 'Minador',
    anos: '1946 – 1948',
    nota: 'Destino en Las Palmas tras obtener la especialidad de Artillería y Tiro Naval, durante los años del noviazgo con Vivi.',
    cap: 'capitulo-sexto',
    imagenes: [{
      src: '/fotos/buques/marte-archivo-armada.jpg',
      alt: 'Minador Marte visto de costado',
      pie: 'El minador Marte, de la clase Júpiter.',
      referencia: 'Referencia: Archivo General de la Armada, reproducida por Todoavante; permiso de reproducción pendiente de confirmar.',
    }],
  },
  {
    slug: 'churruca',
    nombre: 'Churruca',
    tipo: 'Destructor',
    anos: '1948 – 1951',
    nota: 'Destino de Tomás en la División Naval del Mediterráneo. La segunda vista es del Císcar, buque gemelo, y se muestra solo como comparación de clase.',
    cap: 'capitulo-octavo',
    imagenes: [
      {
        src: '/fotos/buques/churruca-cartagena.jpg',
        alt: 'Destructor Churruca en Cartagena',
        pie: 'El destructor Churruca en Cartagena.',
        referencia: 'Referencia: Todoavante; autor individual no identificado, licencia general CC BY-NC 3.0 del sitio.',
      },
      {
        src: '/fotos/buques/churruca-gemelo-ciscar-1931.jpg',
        alt: 'Destructor Císcar, buque gemelo del Churruca',
        pie: 'El Císcar, buque gemelo de la clase Churruca. Imagen comparativa, no es el barco exacto de Tomás.',
        referencia: 'Fotografía de dominio público, vía Wikimedia Commons.',
      },
    ],
  },
  {
    slug: 'rr-28',
    nombre: 'RR 28',
    tipo: 'Patrullero',
    anos: '1950 – 1951',
    nota: 'Su primer mando, con base en Ceuta. El capítulo noveno confirma que existen fotografías familiares de aquellas excursiones; queda reservado este espacio para incorporarlas cuando lleguen.',
    cap: 'capitulo-noveno',
    imagenes: [],
  },
  {
    slug: 'miguel-de-cervantes',
    nombre: 'Miguel de Cervantes',
    tipo: 'Crucero',
    anos: '1954 – 1956',
    nota: 'El último buque alcanzado por las memorias, fotografiado en Cartagena en el mismo periodo de su servicio a bordo.',
    cap: 'capitulo-decimo',
    imagenes: [{
      src: '/fotos/buques/miguel-de-cervantes-cartagena-1950.jpg',
      alt: 'Crucero Miguel de Cervantes en Cartagena hacia 1950',
      pie: 'El crucero Miguel de Cervantes en Cartagena, hacia 1950.',
      referencia: 'Foto: Francisco Martínez Asuar, Wikimedia Commons, CC BY-SA 3.0.',
    }],
  },
];
