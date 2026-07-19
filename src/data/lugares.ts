export interface ImagenLugar {
  src: string;
  alt: string;
  pie: string;
  referencia: string;
}

export interface Lugar {
  slug: string;
  nombre: string;
  descripcion: string;
  caps: string[];
  imagenes: ImagenLugar[];
}

export const lugares: Lugar[] = [
  {
    slug: 'las-palmas-de-gran-canaria',
    nombre: 'Las Palmas de Gran Canaria',
    descripcion: 'Ciudad natal de Tomás: el colegio, la casa familiar y la playa de Las Canteras, donde vivió de niño y donde, cuarenta años después, escribió estas memorias. El Puerto de la Luz fue su punto de embarque hacia la Guerra Civil en 1938 y, junto al Real Club Náutico, escenario de su destino en el Marte y el noviazgo con Vivi (1946-48).',
    caps: ['prologo', 'capitulo-primero', 'capitulo-segundo', 'capitulo-sexto'],
    imagenes: [
      {
        src: '/fotos/lugares/las-canteras-1925.jpg',
        alt: 'Día de playa en Las Canteras, Las Palmas de Gran Canaria, 1925',
        pie: 'Día de playa en Las Canteras, 1925, unos años antes del nacimiento de Tomás.',
        referencia: 'Fotografía de dominio público, vía Wikimedia Commons.',
      },
      {
        src: '/fotos/lugares/las-canteras-cartel-1910.jpg',
        alt: 'Cartel publicitario de la playa de Las Canteras, 1910',
        pie: 'Cartel publicitario de la playa de Las Canteras, 1910. No es una fotografía.',
        referencia: 'Dominio público, vía Wikimedia Commons.',
      },
      {
        src: '/fotos/lugares/castillo-santa-catalina-1920-1922.jpg',
        alt: 'Castillo de Santa Catalina, junto al Puerto de la Luz, Las Palmas, 1920-1922',
        pie: 'El Castillo de Santa Catalina, junto al Puerto de la Luz, hacia 1920-1922.',
        referencia: 'Fotografía de dominio público, vía Wikimedia Commons.',
      },
      {
        src: '/fotos/lugares/puerto-de-la-luz-bahia-1920.jpg',
        alt: 'Bahía y Puerto de La Luz, Las Palmas, 1920',
        pie: 'La bahía y el Puerto de La Luz, 1920.',
        referencia: 'Fotografía de dominio público, vía Wikimedia Commons.',
      },
      {
        src: '/fotos/lugares/puerto-de-la-luz-postal-1912.jpg',
        alt: 'Postal de la bahía de La Luz, Las Palmas, 1912',
        pie: 'Postal de la bahía de La Luz, 1912.',
        referencia: 'Postal de Jordao da Luz Perestrello, dominio público, vía Wikimedia Commons.',
      },
      {
        src: '/fotos/lugares/puerto-de-la-luz-panorama-eth-1920s.jpg',
        alt: 'Panorama de La Luz y La Isleta desde el muelle de Santa Catalina, 1934',
        pie: 'Panorama de La Luz y La Isleta desde el muelle de Santa Catalina, 1934.',
        referencia: 'Foto: Leo Wehrli, ETH-Bibliothek Zürich, CC BY-SA 4.0, vía Wikimedia Commons.',
      },
      {
        src: '/fotos/lugares/las-palmas-vista-panoramica-1910s.jpg',
        alt: 'Vista panorámica de Las Palmas de Gran Canaria, años 1910-1920',
        pie: 'Vista panorámica de la ciudad, años 1910-1920.',
        referencia: 'Foto: Bain News Service, Library of Congress, dominio público.',
      },
    ],
  },
  {
    slug: 'san-fernando-arsenal-carraca',
    nombre: 'San Fernando y el Arsenal de La Carraca',
    descripcion: 'La Escuela Naval Militar funcionó en San Fernando (Cádiz), frente al Arsenal de La Carraca, entre 1913 y 1943. Tomás cursó allí sus cuatro años de formación como cadete (julio 1939 - agosto 1943): la herida en el pie a bordo del Rey Jaime I, el trampolín de saltos donde fue campeón en 1939, y la vida en el Edificio "A".',
    caps: ['capitulo-primero', 'capitulo-segundo', 'capitulo-tercero'],
    imagenes: [
      {
        src: '/fotos/lugares/presidio-cuatro-torres-san-fernando-1911.png',
        alt: 'Presidio de las Cuatro Torres, San Fernando (Cádiz), 1911',
        pie: 'El Presidio de las Cuatro Torres, en San Fernando, en el entorno del Arsenal de La Carraca, 1911 — treinta años antes de la etapa de Tomás como cadete, pero el mismo paraje.',
        referencia: 'Imagen: revista Caras y Caretas (1911), dominio público, vía Wikimedia Commons.',
      },
    ],
  },
  {
    slug: 'madrid',
    nombre: 'Madrid',
    descripcion: 'Escenario del desfile de la Victoria en abril de 1943, las Navidades de noviazgo de 1945 (bar "El cosito blanco", calle de Génova) y la boda con Vivi el 24 de noviembre de 1947 en la parroquia de los Santos Justo y Pastor, cerca de la Plaza de Dos de Mayo.',
    caps: ['capitulo-tercero', 'capitulo-quinto', 'capitulo-septimo'],
    imagenes: [
      {
        src: '/fotos/lugares/madrid-usera-1940.jpg',
        alt: 'Vista del distrito de Usera, Madrid, 1940',
        pie: 'El distrito de Usera, en 1940.',
        referencia: 'Fotografía de dominio público, vía Wikimedia Commons.',
      },
      {
        src: '/fotos/lugares/madrid-calle-1941.jpg',
        alt: 'Reportaje fotográfico de calle en Madrid, diciembre de 1941',
        pie: 'Escena de calle en Madrid, diciembre de 1941.',
        referencia: 'Fotografía de dominio público, vía Wikimedia Commons.',
      },
      {
        src: '/fotos/lugares/madrid-aeropuerto-iberia-1950.jpg',
        alt: 'Vuelo inaugural de Iberia México-Madrid, aeropuerto de Madrid, 1950',
        pie: 'El vuelo inaugural de Iberia entre México y Madrid, en el aeropuerto de la capital, 1950.',
        referencia: 'Foto: Iberia Airlines, CC BY 2.0, vía Wikimedia Commons.',
      },
    ],
  },
  {
    slug: 'el-ferrol',
    nombre: 'El Ferrol',
    descripcion: 'Primera visita en un crucero de instrucción en 1941; después, alférez en 1943-44 supervisando la construcción del destructor Tritón en los astilleros de Bazán, con vida social en la calle Real; regresó en 1948, ya casado con Vivi, para las obras del buque.',
    caps: ['capitulo-tercero', 'capitulo-cuarto', 'capitulo-septimo'],
    imagenes: [],
  },
  {
    slug: 'marin',
    nombre: 'Marín',
    descripcion: 'Sede de la nueva Escuela Naval Militar, inaugurada el 15 de agosto de 1943 con entrega de despachos; Tomás volvió en 1945 para el curso de Tiro Naval en la Escuela "Janer", alojado en el Hospital de la Escuela.',
    caps: ['capitulo-tercero', 'capitulo-cuarto', 'capitulo-quinto'],
    imagenes: [],
  },
  {
    slug: 'playa-de-portocello',
    nombre: 'Playa de Portocello',
    descripcion: 'En esta playa, cerca de Marín, Tomás conoció a Vivi en la primavera de 1945 — el episodio sentimental más importante de las memorias.',
    caps: ['capitulo-cuarto', 'capitulo-quinto'],
    imagenes: [],
  },
  {
    slug: 'pontevedra',
    nombre: 'Pontevedra',
    descripcion: 'Ciudad del noviazgo con Vivi en 1945: el Casino, el café-bar "Urquín" donde le pidió relaciones formales, y la Diputación Provincial donde ella trabajaba.',
    caps: ['capitulo-quinto'],
    imagenes: [],
  },
  {
    slug: 'redondela',
    nombre: 'Redondela',
    descripcion: 'Lugar de veraneo de la familia de Vivi, escenario de los viajes de noviazgo en los veranos de 1946 y 1947.',
    caps: ['capitulo-quinto', 'capitulo-sexto'],
    imagenes: [],
  },
  {
    slug: 'portugalete',
    nombre: 'Portugalete',
    descripcion: 'El destructor Tritón permaneció amarrado aquí de julio de 1944 a enero de 1945 por escasez de combustible; vida social con amigos bilbaínos y el puente colgante sobre la ría.',
    caps: ['capitulo-cuarto', 'capitulo-quinto'],
    imagenes: [
      {
        src: '/fotos/lugares/portugalete-puente-colgante-1943.jpg',
        alt: 'Puente colgante de Portugalete visto desde la otra orilla de la ría, 1943',
        pie: 'El puente colgante (transbordador de Vizcaya) visto desde la otra orilla de la ría, con el caserío de Portugalete al fondo, 1943 — un año antes de la estancia de Tomás.',
        referencia: 'Foto: Vicente Martín (Photo Carte), Kutxa Fundazioa Fototeka, CC BY-NC 4.0.',
      },
      {
        src: '/fotos/lugares/portugalete-monumento-churruca-1943.jpg',
        alt: 'Monumento a la Cofradía de Churruca con el puente colgante al fondo, 1943',
        pie: 'El monumento a la Cofradía de Churruca (Getxo/Algorta), con la torre y los cables del puente colgante visibles al fondo, 1943.',
        referencia: 'Foto: Vicente Martín (Photo Carte), Kutxa Fundazioa Fototeka, CC BY-NC 4.0.',
      },
    ],
  },
  {
    slug: 'palma-de-mallorca',
    nombre: 'Palma de Mallorca',
    descripcion: 'Escala en 1939 tras la recuperación de buques republicanos en Bizerta, con una función de zarzuela en el Teatro El Borme; años después, base del Churruca entre noviembre de 1948 y 1950.',
    caps: ['capitulo-primero', 'capitulo-segundo', 'capitulo-octavo'],
    imagenes: [],
  },
  {
    slug: 'ceuta',
    nombre: 'Ceuta',
    descripcion: 'Base del Rey Jaime I patrullando el Estrecho en 1938-39; años después, mando del patrullero RR 28 (mayo 1950 - julio 1951), con la pérdida de su segundo hijo en noviembre de 1950.',
    caps: ['capitulo-primero', 'capitulo-noveno'],
    imagenes: [],
  },
  {
    slug: 'cartagena',
    nombre: 'Cartagena',
    descripcion: 'Destino del Churruca desde noviembre de 1948, con la pérdida de su primer hijo en enero de 1950; regresó en 1952 como Ayudante Mayor del Cuartel de Instrucción, y años después sirvió allí a bordo del Miguel de Cervantes.',
    caps: ['capitulo-octavo', 'capitulo-noveno', 'capitulo-decimo'],
    imagenes: [
      {
        src: '/fotos/lugares/cartagena-puerto-buques-monumento.jpg',
        alt: 'Puerto de Cartagena con buques de guerra fondeados y el monumento a los Héroes de Cavite en primer plano',
        pie: 'El puerto de Cartagena con varios buques de guerra fondeados, visto desde los jardines junto al monumento a los Héroes de Cavite. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/lugares/cartagena-calle-mayor-bar-americano.jpg',
        alt: 'Calle Mayor de Cartagena, con el Bar Americano y el Banco de Bilbao, gente en terrazas',
        pie: 'La Calle Mayor de Cartagena, con el Bar Americano y el Banco de Bilbao, y vecinos sentados en las terrazas. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/lugares/cartagena-muelles-embarcaciones.jpg',
        alt: 'Muelles de Cartagena con embarcaciones menores',
        pie: 'Los muelles de Cartagena, con embarcaciones menores y un cobertizo portuario. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/lugares/cartagena-plaza-espana-jardines.jpg',
        alt: 'Jardines con un kiosco de música en Cartagena',
        pie: 'Un jardín público con kiosco, en el entorno de la Plaza de España de Cartagena. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
      {
        src: '/fotos/lugares/cartagena-postal-collage.jpg',
        alt: 'Collage de postales con vistas antiguas de Cartagena: velero, estación, muelle y ría',
        pie: 'Postal collage con cuatro vistas antiguas de Cartagena: un velero en dique, una estación de tren, un muelle con pescadores y una vista del puerto. Sin fecha exacta.',
        referencia: 'Foto: Archivo Casaú, vía Región de Murcia Digital (regmurcia.com); pendiente de confirmar condiciones exactas de reproducción.',
      },
    ],
  },
  {
    slug: 'malaga',
    nombre: 'Málaga',
    descripcion: 'Base del patrullero RR 28 desde julio de 1951; allí nació y murió su tercer hijo a finales de diciembre de 1951, y el barco realizó misiones de abastecimiento a la isla de Alborán.',
    caps: ['capitulo-noveno'],
    imagenes: [
      {
        src: '/fotos/lugares/malaga-puerto-gibralfaro-1959.jpg',
        alt: 'Puerto de Málaga con el silo de grano y el castillo de Gibralfaro al fondo, 1959',
        pie: 'El puerto de Málaga, con el silo de grano y, en lo alto de la colina, el castillo de Gibralfaro. Julio de 1959, ocho años después de la estancia de Tomás, pero el mismo paisaje.',
        referencia: 'Foto: Estudio Fotográfico Arenas, Archivo Histórico Fotográfico CTI, Universidad de Málaga (AHUMA), CC0 - Dominio público, vía Wikimedia Commons.',
      },
    ],
  },
];
