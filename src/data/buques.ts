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
        src: '/fotos/buques/rey-jaime-i-armado-guerra-civil-hd.jpg',
        alt: 'Rey Jaime I armado como crucero auxiliar durante la Guerra Civil',
        pie: 'El Rey Jaime I armado como crucero auxiliar, configuración relacionada con el servicio narrado en 1938.',
        referencia: 'Referencia: Archivo Manuel Rodríguez Aguilar, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-motonave.jpg',
        alt: 'Motonave de pasaje Rey Jaime I vista de costado',
        pie: 'El mismo buque en su configuración civil de motonave correo.',
        referencia: 'Referencia: Historia Naval de España / Todoavante; autor no identificado.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-islena-maritima-1918.jpg',
        alt: 'Rey Jaime I bajo bandera de la Isleña Marítima',
        pie: 'El buque en sus primeros años, bajo bandera de la Isleña Marítima, antes de integrarse en Trasmediterránea en 1918.',
        referencia: 'Referencia: archivo LGF, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-barcelona-posguerra-1939.jpg',
        alt: 'Puerto de Barcelona al terminar la Guerra Civil, con el Rey Jaime I',
        pie: 'El puerto de Barcelona nada más terminar la guerra, en 1939, poco después del servicio narrado.',
        referencia: 'Referencia: colección de la Comisión de la Armada para salvamento de buques, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-palma-mallorca-1910s.jpg',
        alt: 'Rey Jaime I atracado en el puerto de Palma de Mallorca',
        pie: 'El buque atracado en Palma de Mallorca, en su etapa civil de entreguerras.',
        referencia: 'Referencia: fondo documental del Museu Marítim de Barcelona, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-pauta-1947.jpg',
        alt: 'Plano de camarotes y características técnicas del Rey Jaime I, 1947',
        pie: 'Plano de cubiertas, camarotes por clase y ficha técnica del buque (eslora, manga, potencia, velocidad), publicado en agosto de 1947. No es una fotografía.',
        referencia: 'Referencia: archivo Manuel Rodríguez Barrientos, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-plano-camaras-1926.jpg',
        alt: 'Plano de las cámaras del Rey Jaime I, 1926',
        pie: 'Plano de distribución de cámaras y camarotes por clase, año 1926, veintiún años antes del plano técnico de 1947 ya incluido. No es una fotografía.',
        referencia: 'Referencia: archivo Jaime Cifré Sánchez, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-postal-interiores.jpg',
        alt: 'Postal con vistas interiores del Rey Jaime I: vestíbulo, cubierta, fumador y comedor',
        pie: 'Postal corporativa de época con vistas del interior: vestíbulo, cubierta, salón fumador y comedor de primera clase.',
        referencia: 'Referencia: archivo LGF, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-torre-jaime-i-panoramica.jpg',
        alt: 'Rey Jaime I atracado en Barcelona, junto a la Torre Jaime I del puerto',
        pie: 'El buque atracado en el puerto de Barcelona, a los pies de la Torre Jaime I del teleférico portuario.',
        referencia: 'Referencia: fondo documental del Museu Marítim de Barcelona, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-cubierta-proa-puente.jpg',
        alt: 'Vista de la cubierta de proa del Rey Jaime I desde el puente, con mar gruesa',
        pie: 'La cubierta de proa vista desde el puente de mando, con mar gruesa rompiendo sobre la roda.',
        referencia: 'Referencia: fotografía de Juan Vera Quiñones, vía Trasmeships; derechos individuales pendientes de confirmación.',
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
        src: '/fotos/buques/jj-sister-canon-popa-1938-comparar.jpg',
        alt: 'J.J. Sister con armamento añadido en 1938',
        pie: 'El J.J. Sister con el armamento añadido en 1938, el año del viaje narrado.',
        referencia: 'Referencia: "Astilleros del ayer al hoy. 1877-1991", vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jj-sister-retrato.jpg',
        alt: 'Motonave J.J. Sister navegando',
        pie: 'Vista general de la motonave J.J. Sister.',
        referencia: 'Referencia: Todoavante; autor no identificado, licencia general CC BY-NC 3.0 del sitio.',
      },
      {
        src: '/fotos/buques/jj-sister-carraca-1938.jpg',
        alt: 'Obras de transformación del J.J. Sister en La Carraca, 1938',
        pie: 'Las obras de transformación en crucero auxiliar, en el arsenal de La Carraca (Cádiz), 1938.',
        referencia: 'Referencia: Rafael González Echegaray, "La Marina Mercante y el tráfico marítimo en la guerra civil", vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jj-sister-desembarco-menorca-1939.jpg',
        alt: 'Flota nacional en el desembarco de Menorca, febrero de 1939',
        pie: 'Parte de la flota nacional en el desembarco de Menorca, febrero de 1939; el J.J. Sister participó en operaciones de este tipo.',
        referencia: 'Referencia: Biblioteca Nacional de España, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jj-sister-perfil-babor.jpg',
        alt: 'Perfil de babor del J.J. Sister',
        pie: 'Perfil de babor del buque, en su etapa civil de entreguerras.',
        referencia: 'Referencia: fondo documental del Museu Marítim de Barcelona, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jj-sister-melilla.jpg',
        alt: 'J.J. Sister atracando en Melilla',
        pie: 'El buque atracando en Melilla, en los años treinta.',
        referencia: 'Referencia: archivo Jaume Cifré Sánchez, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jj-sister-galileo-galilei-napoles.jpg',
        alt: 'El buque como Galileo Galilei, bajo bandera italiana, en Nápoles',
        pie: 'El mismo casco en su vida anterior, como Galileo Galilei bajo bandera italiana, en Nápoles.',
        referencia: 'Referencia: simplonpc.co.uk, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jj-sister-comedor-primera-clase.jpg',
        alt: 'Comedor de primera clase del J.J. Sister',
        pie: 'El comedor de primera clase, una de las pocas vistas de interiores localizadas del buque.',
        referencia: 'Referencia: libro corporativo "Trasmediterránea. Hacia el nuevo milenio", vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jj-sister-plano-sala-maquinas.jpg',
        alt: 'Plano de la sala de máquinas del J.J. Sister tras su conversión a motonave',
        pie: 'Plano de distribución de la sala de máquinas, tras la conversión de vapor a motonave en 1924. No es una fotografía.',
        referencia: 'Referencia: revista "The Motor Ship" (mayo 1924), vía Trasmeships; derechos individuales pendientes de confirmación.',
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
      {
        src: '/fotos/buques/jose-luis-diez-catalan-bay-1938.jpg',
        alt: 'José Luis Díez varado en Catalan Bay, Gibraltar',
        pie: 'El destructor varado en Catalan Bay (Playa de los Catalanes), Gibraltar, diciembre de 1938, tras el combate narrado.',
        referencia: 'Referencia: Casa de la Memoria La Sauceda (asociación de memoria histórica); derechos pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-antes-1938.jpg',
        alt: 'El José Luis Díez antes del combate de 1938',
        pie: 'El buque en puerto, en una imagen anterior a los hechos de diciembre de 1938, con la tripulación en cubierta de gala y botes atracados al costado.',
        referencia: 'Referencia: Gibraltar National Archives (crédito confirmado; misma fotografía reproducida también por Casa de la Memoria La Sauceda), vía infogibraltar.com.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-croquis-combate-1938.jpg',
        alt: 'Ilustración del combate entre el José Luis Díez y el Vulcano',
        pie: 'Ilustración pintada del combate entre el José Luis Díez y el Vulcano, la noche del 30 de diciembre de 1938, frente a Punta Europa. No es una fotografía.',
        referencia: 'Referencia: documento de un archivo familiar publicado en blog de historia naval; derechos pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-cubierta-tripulacion-bne.jpg',
        alt: 'El José Luis Díez con la tripulación formada en cubierta y embarcaciones menores al costado',
        pie: 'El buque con la tripulación formada en cubierta y varias embarcaciones menores atracadas al costado.',
        referencia: 'Foto: Biblioteca Nacional de España, vía infogibraltar.com (portal oficial del Gobierno de Gibraltar); la BNE declara CC BY 4.0 para material en acceso abierto, pendiente de confirmar la condición exacta de este ítem en bnedigital.bne.es.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-gibraltar-sepia.jpg',
        alt: 'El José Luis Díez atracado al pie del Peñón de Gibraltar, con lonas de camuflaje',
        pie: 'El buque atracado al pie del Peñón de Gibraltar, con lonas de camuflaje sobre la proa y embarcaciones menores alrededor.',
        referencia: 'Referencia: archivo personal de Francis Silva (coautor de "Red Ship & Red Tape: The Jose Luis Diez Remembered"), vía infogibraltar.com; derechos pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-encallado-levante-penon.jpg',
        alt: 'El José Luis Díez encallado en la zona de Levante del Peñón de Gibraltar',
        pie: 'El buque encallado en la zona de Levante del Peñón, con el pueblo de Catalan Bay al fondo.',
        referencia: 'Foto: Biblioteca Nacional de España, vía infogibraltar.com; CC BY 4.0 declarado por la BNE para material en acceso abierto, pendiente de confirmar la condición exacta de este ítem.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-espinal-ayerra-bandera.jpg',
        alt: 'José Espinal Ayerra, tripulante del José Luis Díez, con la bandera del buque en una visita a Gibraltar',
        pie: 'José Espinal Ayerra, miembro de la tripulación del José Luis Díez, sostiene la bandera del buque en una visita posterior a Gibraltar (años 70-80). La única imagen localizada que pone cara y nombre a un tripulante concreto.',
        referencia: 'Referencia: Archivo Casa de la Memoria La Sauceda, vía infogibraltar.com; derechos pendientes de confirmación.',
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
      {
        src: '/fotos/buques/vulcano-palma-mallorca-feb1938-a.jpg',
        alt: 'Cubierta del Vulcano en Palma de Mallorca, febrero de 1938',
        pie: 'La cubierta del Vulcano en Palma de Mallorca, el 3 de febrero de 1938, meses antes del combate narrado.',
        referencia: 'Referencia: álbum familiar publicado en blog de historia naval; derechos pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/vulcano-palma-mallorca-feb1938-b.jpg',
        alt: 'Tripulantes del Vulcano junto a un cañón, Palma de Mallorca, 1938',
        pie: 'Tripulantes del Vulcano frente a un cañón, en Palma de Mallorca, el 26 de febrero de 1938.',
        referencia: 'Referencia: álbum familiar publicado en blog de historia naval; derechos pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/vulcano-tanger-1940.jpg',
        alt: 'El Vulcano en Tánger, 1940',
        pie: 'El Vulcano en Tánger, ya terminada la Guerra Civil, en 1940.',
        referencia: 'Referencia: álbum familiar publicado en blog de historia naval; derechos pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/vulcano-en-puerto.jpg',
        alt: 'Cañonero-minador Vulcano atracado en puerto, con ciudad de fondo',
        pie: 'El Vulcano (numeral F-12 visible en la proa) atracado en un muelle, con la ciudad y colinas urbanizadas al fondo.',
        referencia: 'Referencia: amigosdelamili.com; derechos particulares del sitio, pendientes de confirmación.',
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
    imagenes: [
      {
        src: '/fotos/buques/marte-archivo-armada.jpg',
        alt: 'Minador Marte visto de costado',
        pie: 'El minador Marte, de la clase Júpiter.',
        referencia: 'Referencia: Archivo General de la Armada, reproducida por Todoavante; permiso de reproducción pendiente de confirmar.',
      },
      {
        src: '/fotos/buques/marte-santander-1969.jpg',
        alt: 'Minador Marte en el puerto de Santander, 1969',
        pie: 'El Marte atracado en Santander, en 1969, ya en una etapa posterior de su servicio.',
        referencia: 'Referencia: reproducida en un blog de historia naval; autor y procedencia original no identificados.',
      },
      {
        src: '/fotos/buques/marte-monumento-almuradiel-1975.jpg',
        alt: 'Monumento al cañonero-minador Marte en Almuradiel, 1975',
        pie: 'El palo de mesana del Marte, convertido en monumento en Almuradiel (Ciudad Real), 1975, tras darse de baja el buque. No es una fotografía del buque en servicio.',
        referencia: 'Referencia: publicación pública en Facebook; autor no identificado en la publicación.',
      },
    ],
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
        src: '/fotos/buques/churruca-principios-1950s.jpg',
        alt: 'Destructor Churruca a principios de los años 50',
        pie: 'El Churruca, probablemente a principios de los años 50 — los mismos años en que Tomás sirvió a bordo.',
        referencia: 'Foto cortesía de Miquel Rosselló, vía Balearspotting; permiso de reproducción pendiente de confirmar.',
      },
      {
        src: '/fotos/buques/churruca-alta-resolucion.jpg',
        alt: 'Destructor Churruca, vista de mayor detalle',
        pie: 'El Churruca en otra ocasión, con mayor detalle de su silueta.',
        referencia: 'Foto cortesía de Miquel Rosselló, vía Balearspotting; permiso de reproducción pendiente de confirmar.',
      },
      {
        src: '/fotos/buques/churruca-gemelo-ciscar-1931.jpg',
        alt: 'Destructor Císcar, buque gemelo del Churruca',
        pie: 'El Císcar, buque gemelo de la clase Churruca. Imagen comparativa, no es el barco exacto de Tomás.',
        referencia: 'Fotografía de dominio público, vía Wikimedia Commons.',
      },
      {
        src: '/fotos/buques/churruca-gemelo-miranda-tripulacion.jpg',
        alt: 'Tripulación formada en cubierta del destructor Almirante Miranda, buque gemelo del Churruca',
        pie: 'La tripulación formada en cubierta del Almirante Miranda, buque gemelo de la clase Churruca. Imagen comparativa, no es el barco exacto de Tomás.',
        referencia: 'Referencia: amigosdelamili.com; derechos particulares del sitio, pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/churruca-gemelo-miranda-oficiales.jpg',
        alt: 'Oficiales del destructor Almirante Miranda, buque gemelo del Churruca',
        pie: 'Grupo de oficiales del Almirante Miranda, buque gemelo de la clase Churruca. Imagen comparativa, no es el barco exacto de Tomás.',
        referencia: 'Referencia: amigosdelamili.com; derechos particulares del sitio, pendientes de confirmación.',
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
    imagenes: [
      {
        src: '/fotos/buques/miguel-de-cervantes-cartagena-1950.jpg',
        alt: 'Crucero Miguel de Cervantes en Cartagena hacia 1950',
        pie: 'El crucero Miguel de Cervantes en Cartagena, hacia 1950.',
        referencia: 'Foto: Francisco Martínez Asuar, Wikimedia Commons, CC BY-SA 3.0.',
      },
      {
        src: '/fotos/buques/miguel-de-cervantes-san-sebastian-1949.jpg',
        alt: 'Miguel de Cervantes en el Muelle de San Sebastián, 1949',
        pie: 'El crucero atracado en el Muelle de San Sebastián, el 24 de agosto de 1949.',
        referencia: 'Foto: Vicente Martín (Estudio Photo Carte), Kutxa Fototeka, CC BY-NC 4.0.',
      },
      {
        src: '/fotos/buques/miguel-de-cervantes-gibraltar-1936.jpg',
        alt: 'Miguel de Cervantes cerca de Gibraltar, 1936',
        pie: 'El buque en 1936, durante la Guerra Civil, en su etapa republicana anterior al servicio de Tomás.',
        referencia: 'Foto: colección del Australian War Memorial, dominio público, vía Wikimedia Commons.',
      },
    ],
  },
];
