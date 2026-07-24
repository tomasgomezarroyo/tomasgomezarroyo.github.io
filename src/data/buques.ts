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
        pie: 'El mismo buque en su configuración civil de motonave correo, años 1910-1930 aprox.',
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
        pie: 'El buque atracado en Palma de Mallorca, en su etapa civil de entreguerras, años 1910-1920 aprox.',
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
        pie: 'Postal corporativa de época con vistas del interior: vestíbulo, cubierta, salón fumador y comedor de primera clase. Sin fecha exacta; probablemente años 1920-1930 por el estilo.',
        referencia: 'Referencia: archivo LGF, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-torre-jaime-i-panoramica.jpg',
        alt: 'Rey Jaime I atracado en Barcelona, junto a la Torre Jaime I del puerto',
        pie: 'El buque atracado en el puerto de Barcelona, a los pies de la Torre Jaime I del teleférico portuario. Sin fecha exacta; forzosamente posterior a 1931, cuando se inauguró la torre.',
        referencia: 'Referencia: fondo documental del Museu Marítim de Barcelona, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-cubierta-proa-puente.jpg',
        alt: 'Vista de la cubierta de proa del Rey Jaime I desde el puente, con mar gruesa',
        pie: 'La cubierta de proa vista desde el puente de mando, con mar gruesa rompiendo sobre la roda. Sin fecha exacta.',
        referencia: 'Referencia: fotografía de Juan Vera Quiñones, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-colores-originales.jpg',
        alt: 'El Rey Jaime I en sus colores originales de la Isleña Marítima',
        pie: 'El buque en sus colores originales, reproducción de un libro de historia naval. Sin fecha exacta, anterior a su paso a Trasmediterránea en 1918.',
        referencia: 'Referencia: libro "La Marina Española", vía blog Vida Marítima (vidamaritima.com); derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-dique-flotante.jpg',
        alt: 'El Rey Jaime I en dique flotante en Barcelona, con el nombre pintado en el casco',
        pie: 'El buque en dique flotante en Barcelona, con el nombre "REY JAIME I" pintado en la proa y cuatro tripulantes u oficiales posando delante. Sin fecha exacta.',
        referencia: 'Referencia: libro "Historia de Mallorca" (vol. III), vía blog Vida Marítima (vidamaritima.com); derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-comedor-1920-a.jpg',
        alt: 'Salón comedor del vapor Rey Jaime I, 1920',
        pie: 'El salón comedor del buque, con columnas y decoración modernista, publicado en el folleto de pasajeros de 1920.',
        referencia: 'Referencia: "Libro de Información al Pasajero. Isleña Marítima. Año 1920", vía blog Vida Marítima; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-comedor-1920-b.jpg',
        alt: 'Comedor de primera clase del vapor Rey Jaime I, 1920',
        pie: 'Otro ángulo del comedor de primera clase, con columna central y ventiladores de techo, del mismo folleto de 1920.',
        referencia: 'Referencia: "Libro de Información al Pasajero. Isleña Marítima. Año 1920", vía blog Vida Marítima; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/rey-jaime-i-palma-muelle-postal.jpg',
        alt: 'El Rey Jaime I atracado en el muelle de Palma de Mallorca, con carruajes y pasajeros',
        pie: 'El buque atracado al fondo, con el muelle de Palma de Mallorca animado por decenas de coches de caballos y pasajeros. Sin fecha exacta.',
        referencia: 'Referencia: postal de época, vía blog Vida Marítima (vidamaritima.com); derechos individuales pendientes de confirmación.',
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
        pie: 'Vista general de la motonave J.J. Sister, años 1920-1930 aprox.',
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
        pie: 'Perfil de babor del buque, en su etapa civil de entreguerras, años 1920-1930 aprox.',
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
        pie: 'El mismo casco en su vida anterior, como Galileo Galilei bajo bandera italiana, en Nápoles, entre 1896 y 1916.',
        referencia: 'Referencia: simplonpc.co.uk, vía Trasmeships; derechos individuales pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jj-sister-comedor-primera-clase.jpg',
        alt: 'Comedor de primera clase del J.J. Sister',
        pie: 'El comedor de primera clase, una de las pocas vistas de interiores localizadas del buque. Sin fecha exacta.',
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
        pie: 'Maqueta del J.J. Sister, fotografiada en 2017. No es una fotografía histórica del buque real.',
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
        pie: 'El buque con la tripulación formada en cubierta y varias embarcaciones menores atracadas al costado. Sin fecha exacta, probablemente diciembre de 1938, el mismo episodio que las demás fotos de este lote.',
        referencia: 'Foto: Biblioteca Nacional de España, vía infogibraltar.com (portal oficial del Gobierno de Gibraltar); la BNE declara CC BY 4.0 para material en acceso abierto, pendiente de confirmar la condición exacta de este ítem en bnedigital.bne.es.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-gibraltar-sepia.jpg',
        alt: 'El José Luis Díez atracado al pie del Peñón de Gibraltar, con lonas de camuflaje',
        pie: 'El buque atracado al pie del Peñón de Gibraltar, con lonas de camuflaje sobre la proa y embarcaciones menores alrededor. Sin fecha exacta, probablemente diciembre de 1938.',
        referencia: 'Referencia: archivo personal de Francis Silva (coautor de "Red Ship & Red Tape: The Jose Luis Diez Remembered"), vía infogibraltar.com; derechos pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-encallado-levante-penon.jpg',
        alt: 'El José Luis Díez encallado en la zona de Levante del Peñón de Gibraltar',
        pie: 'El buque encallado en la zona de Levante del Peñón, con el pueblo de Catalan Bay al fondo, diciembre de 1938.',
        referencia: 'Foto: Biblioteca Nacional de España, vía infogibraltar.com; CC BY 4.0 declarado por la BNE para material en acceso abierto, pendiente de confirmar la condición exacta de este ítem.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-espinal-ayerra-bandera.jpg',
        alt: 'José Espinal Ayerra, tripulante del José Luis Díez, con la bandera del buque en una visita a Gibraltar',
        pie: 'José Espinal Ayerra, miembro de la tripulación del José Luis Díez, sostiene la bandera del buque en una visita posterior a Gibraltar (años 70-80). La única imagen localizada que pone cara y nombre a un tripulante concreto.',
        referencia: 'Referencia: Archivo Casa de la Memoria La Sauceda, vía infogibraltar.com; derechos pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-casau-placa-nombre.jpg',
        alt: 'El José Luis Díez amarrado, con el nombre pintado en el casco',
        pie: 'El buque amarrado en puerto, con el nombre "JOSE LUIS DIEZ" pintado en el casco, claramente legible. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); el sitio declara autorización de los titulares o dominio público, pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-casau-varando.jpg',
        alt: 'El José Luis Díez embarrancando junto a una costa rocosa, con gente observando desde la orilla',
        pie: 'El buque embarrancando junto a una costa rocosa, levantando ola de proa, con curiosos observando desde tierra, posiblemente el propio episodio de diciembre de 1938. Sin fecha exacta confirmada.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-casau-perfil-a.jpg',
        alt: 'Perfil de estribor del José Luis Díez fondeado',
        pie: 'Perfil de estribor del buque fondeado, con las siglas "J.D" en el casco. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-casau-navegando.jpg',
        alt: 'El José Luis Díez navegando, levantando ola de proa',
        pie: 'El buque navegando en mar abierta, levantando ola de proa. A diferencia de las demás fotos, aquí está en movimiento, no fondeado. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-casau-fortaleza.jpg',
        alt: 'El José Luis Díez fondeado ante una costa con una fortaleza en lo alto',
        pie: 'El buque fondeado ante una costa con una fortaleza o castillo en lo alto de la colina; puerto no identificado con certeza. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-casau-dos-buques.jpg',
        alt: 'El José Luis Díez amarrado junto a otro buque de su misma clase',
        pie: 'El buque amarrado junto a otro destructor de su misma clase, con el nombre pintado en el casco visible. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-revista-naval.jpg',
        alt: 'El José Luis Díez navegando con toda la tripulación formada en la borda, uniforme de gala',
        pie: 'El buque navegando con toda la tripulación formada a lo largo de la borda en uniforme blanco de gala: una revista naval, escena distinta a todas las demás fotos de este buque. Sin fecha exacta.',
        referencia: 'Referencia: blog cosasdehistoriayarte.blogspot.com; derechos pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-empavesado-puerto-norte.jpg',
        alt: 'El José Luis Díez empavesado con banderines de fiesta en un puerto del norte de España',
        pie: 'El buque atracado y empavesado con banderines de fiesta, con las siglas "DZ" visibles en el costado, en un puerto de aspecto cantábrico. Sin fecha exacta.',
        referencia: 'Referencia: blog cosasdehistoriayarte.blogspot.com; derechos pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/jose-luis-diez-mapa-paso-estrecho.jpg',
        alt: 'Mapa del paso del Estrecho de Gibraltar del José Luis Díez, con los buques que intentaron interceptarlo',
        pie: 'Carta náutica del Estrecho de Gibraltar con la ruta del José Luis Díez y los buques franquistas que intentaron interceptarlo. No es una fotografía.',
        referencia: 'Referencia: blog benitosacalugarodriguez.blogspot.com; derechos pendientes de confirmación.',
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
        pie: 'El Vulcano modernizado, fotografiado en Cartagena, años 1940-1950 aprox.',
        referencia: 'Foto: Casaú; referencia consultada en Todoavante, licencia general CC BY-NC 3.0 del sitio.',
      },
      {
        src: '/fotos/buques/vulcano-maqueta-museo-naval.jpg',
        alt: 'Maqueta del Vulcano en el Museo Naval de Ferrol',
        pie: 'Maqueta del Vulcano, fotografiada en 2012. Sirve para observar la silueta y distribución; no es una foto de época.',
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
        pie: 'El Vulcano (numeral F-12 visible en la proa) atracado en un muelle, con la ciudad y colinas urbanizadas al fondo. Sin fecha exacta.',
        referencia: 'Referencia: amigosdelamili.com; derechos particulares del sitio, pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/vulcano-casau-puerto-grua.jpg',
        alt: 'El Vulcano en puerto junto a una grúa portuaria, con colinas al fondo',
        pie: 'El Vulcano (numeral F-12 visible) en puerto, junto a una grúa de carga, con colinas al fondo. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/vulcano-casau-fortaleza.jpg',
        alt: 'El Vulcano fondeado ante una costa rocosa con una fortaleza en lo alto',
        pie: 'El Vulcano fondeado ante una costa rocosa con una fortaleza en lo alto de la colina; puerto no identificado con certeza. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/vulcano-casau-cubierta-tripulacion.jpg',
        alt: 'El Vulcano con la cubierta llena de tripulación, entrando a puerto',
        pie: 'El Vulcano con la cubierta llena de tripulación, entrando a puerto junto a un pueblo costero. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
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
        pie: 'El minador Marte, de la clase Júpiter, años 1940-1950 aprox.',
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
        pie: 'El Churruca, probablemente a principios de los años 50, los mismos años en que Tomás sirvió a bordo.',
        referencia: 'Foto cortesía de Miquel Rosselló, vía Balearspotting; permiso de reproducción pendiente de confirmar.',
      },
      {
        src: '/fotos/buques/churruca-alta-resolucion.jpg',
        alt: 'Destructor Churruca, vista de mayor detalle',
        pie: 'El Churruca en otra ocasión, con mayor detalle de su silueta. Sin fecha exacta, posiblemente octubre de 1955.',
        referencia: 'Foto cortesía de Miquel Rosselló, vía Balearspotting; permiso de reproducción pendiente de confirmar.',
      },
      {
        src: '/fotos/buques/churruca-gemelo-ciscar-1931.jpg',
        alt: 'Destructor Císcar, buque gemelo del Churruca',
        pie: 'El Císcar, buque gemelo de la clase Churruca, hacia 1931. Imagen comparativa, no es el barco exacto de Tomás.',
        referencia: 'Fotografía de dominio público, vía Wikimedia Commons.',
      },
      {
        src: '/fotos/buques/churruca-gemelo-miranda-tripulacion.jpg',
        alt: 'Tripulación formada en cubierta del destructor Almirante Miranda, buque gemelo del Churruca',
        pie: 'La tripulación formada en cubierta del Almirante Miranda, buque gemelo de la clase Churruca, años 1940-1950 aprox. Imagen comparativa, no es el barco exacto de Tomás.',
        referencia: 'Referencia: amigosdelamili.com; derechos particulares del sitio, pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/churruca-gemelo-miranda-oficiales.jpg',
        alt: 'Oficiales del destructor Almirante Miranda, buque gemelo del Churruca',
        pie: 'Grupo de oficiales del Almirante Miranda, buque gemelo de la clase Churruca, años 1940-1950 aprox. Imagen comparativa, no es el barco exacto de Tomás.',
        referencia: 'Referencia: amigosdelamili.com; derechos particulares del sitio, pendientes de confirmación.',
      },
      {
        src: '/fotos/buques/churruca-casau-ch-proa.jpg',
        alt: 'El Churruca navegando con las siglas "CH" pintadas en el casco',
        pie: 'El buque navegando con las siglas "CH" pintadas en el casco: la marca anterior al numeral D-61 asignado en 1959, es decir, más cercana a los años en que Tomás sirvió a bordo (1948-1951) que el resto de fotos de este lote.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/churruca-casau-telefoto-a.jpg',
        alt: 'El Churruca (numeral D-61) con tripulación visible en cubierta',
        pie: 'El buque, ya con el numeral D-61 (asignado en 1959, años después del destino de Tomás), con tripulación visible en cubierta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/churruca-casau-telefoto-b.jpg',
        alt: 'El Churruca (numeral D-61) fondeado, vista de detalle',
        pie: 'El buque fondeado, con el numeral D-61 visible con detalle. Época posterior al servicio de Tomás.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/churruca-casau-gruas-puerto.jpg',
        alt: 'El Churruca (D-61) navegando junto a grúas portuarias',
        pie: 'El buque navegando junto a grúas de un puerto, con estela de proa. Época posterior al servicio de Tomás (numeral D-61).',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/churruca-casau-cartagena-colinas.jpg',
        alt: 'El Churruca (D-61) fondeado ante colinas peladas de un puerto mediterráneo',
        pie: 'El buque fondeado ante las colinas de un puerto mediterráneo, posiblemente Cartagena. Época posterior al servicio de Tomás (numeral D-61).',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/churruca-casau-ciudad-skyline.jpg',
        alt: 'El Churruca (D-61) navegando ante el perfil de una ciudad',
        pie: 'El buque navegando ante el perfil urbano de una ciudad no identificada con certeza. Época posterior al servicio de Tomás (numeral D-61).',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
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
      {
        src: '/fotos/buques/miguel-de-cervantes-casau.jpg',
        alt: 'El crucero Miguel de Cervantes fondeado en puerto',
        pie: 'El crucero fondeado en puerto, con botes menores junto al costado. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/miguel-de-cervantes-gemelo-cervera-a.jpg',
        alt: 'El crucero Almirante Cervera, buque gemelo del Miguel de Cervantes, fondeado ante colinas',
        pie: 'El Almirante Cervera, buque de cabeza de la misma clase que el Miguel de Cervantes, fondeado ante una costa de colinas. Imagen comparativa, no es el barco exacto de Tomás.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/buques/miguel-de-cervantes-gemelo-cervera-b.jpg',
        alt: 'El crucero Almirante Cervera, buque gemelo del Miguel de Cervantes, con tripulación en cubierta',
        pie: 'El Almirante Cervera con tripulación visible en cubierta y humareda densa de la chimenea. Imagen comparativa, no es el barco exacto de Tomás.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
    ],
  },
];
