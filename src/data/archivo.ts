export interface NotaLectura {
  texto: string;
  fuenteTexto?: string;
  fuenteUrl?: string;
}

export interface PaginaArchivo {
  src: string;
  alt: string;
  titulo: string;
  referencia: string;
  original: string;
  traduccion: string;
  notas: NotaLectura[];
}

export interface DocumentoArchivo {
  slug: string;
  titulo: string;
  pieza: string;
  fecha: string;
  fechaOrden: string; // YYYY-MM-DD para ordenar, aproximar si hace falta (ej. día 01 si el original solo da mes)
  resumen: string;
  paginas: PaginaArchivo[];
  tipoDocumento: string;
  contexto: string;
  personas: string[];
  credito: string;
  derechos: string;
  fechaConsulta: string;
  fuenteTexto: string;
}

const CREDITO = 'U.S. Naval War College, Newport, Rhode Island. Copia digital cedida a la familia por su archivo institucional.';
const DERECHOS = 'Documento de archivo institucional estadounidense, cedido directamente a la familia por la archivista del U.S. Naval War College para uso personal y familiar. No es un documento de acceso público general.';
const FUENTE_TEXTO = 'U.S. Naval War College, Command Records Manager/Archivist Lauren Legault';
const FECHA_CONSULTA = '6 de agosto de 2026';
const TIPO_CORRESPONDENCIA = 'Correspondencia personal, expediente del U.S. Naval War College';
const TIPO_ENSAYO = 'Ensayo académico de estudiante, U.S. Naval War College';

export const documentos: DocumentoArchivo[] = [
  {
    slug: 'ensayo-espana',
    titulo: 'Country Essay: España',
    pieza: 'Ensayo sobre España, 1972-1973',
    fecha: 'Curso 1972-1973 (sin fecha visible en el original)',
    fechaOrden: '1972-09-01',
    resumen: `El "country essay" completo que Tomás presentó sobre España en el Naval Command College: geografía, historia, sociedad, arte, educación, política, industria y política exterior, vistos por un oficial español en 1972-73.`,
    tipoDocumento: TIPO_ENSAYO,
    contexto: 'Trabajo de investigación académico obligatorio en el Naval Command College, en el que cada alumno extranjero exponía su país ante compañeros de más de treinta marinas. Es el documento más extenso del expediente y el que mejor retrata la mirada de Tomás sobre España durante los últimos años del franquismo, poco antes de la transición. La evaluación de graduación (documento separado) confirma que este ensayo se presentó, por escrito y oralmente, al comienzo del curso académico.',
    personas: ['Tomás Gómez Arroyo', 'John A. Crow', 'Marcelino Menéndez y Pelayo', 'Fernando e Isabel', 'Carlos I', 'Felipe II', 'Carlos II', 'Francisco Franco', 'Juan Carlos de Borbón', 'Antoni Gaudí', 'Joaquín Sorolla', 'José Gutiérrez Solana', 'Pablo Picasso', 'Juan Gris', 'Joan Miró', 'Salvador Dalí', 'Tomás Luis de Victoria', 'Enrique Granados', 'Isaac Albéniz', 'Manuel de Falla'],
    credito: CREDITO,
    derechos: DERECHOS,
    fechaConsulta: FECHA_CONSULTA,
    fuenteTexto: FUENTE_TEXTO,
    paginas: [
      {
        src: '/fotos/archivo/pagina-13.jpg',
        alt: 'Portada del ensayo sobre España, con el título y la cláusula sobre autoría y reproducción',
        titulo: 'Portada',
        referencia: 'Página 13 de 33 del expediente',
        original: `THE UNITED STATES NAVAL WAR COLLEGE

NAVAL COMMAND COLLEGE

COUNTRY ESSAY

SPAIN

by

Tomas Gomez Arroyo

Captain, Spanish Navy

This paper is a student research paper prepared at the Naval War College and the thoughts and opinions
expressed in this paper are those of the author, and are not necessarily those of the Navy Department or the
President, Naval War College.

Material herein may not be quoted, extracted for publication, reproduced or otherwise copied without
specific permission from the author and the President, Naval War College in each instance.`,
        traduccion: `UNITED STATES NAVAL WAR COLLEGE

NAVAL COMMAND COLLEGE

ENSAYO SOBRE UN PAÍS

ESPAÑA

por

Tomás Gómez Arroyo

Capitán de navío, Armada Española

Este es un trabajo de investigación realizado por un alumno preparado en el Naval War College y las ideas y opiniones
expresadas en este trabajo son las del autor, y no necesariamente las del Departamento de Marina ni las del
Presidente del Naval War College.

El material aquí contenido no podrá citarse, extraerse para publicación, reproducirse ni copiarse de ningún otro modo sin
permiso específico del autor y del Presidente del Naval War College en cada caso.`,
        notas: [
          { texto: 'Descripción material. La portada atribuye el ensayo a Tomás Gómez Arroyo, capitán de navío de la Armada española, e incluye la cláusula institucional sobre autoría y reproducción.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-14.jpg',
        alt: 'Segunda portada del ensayo, con espacio en blanco para firma y fecha del autor',
        titulo: 'Portada con cláusula de autoría',
        referencia: 'Página 14 de 33 del expediente',
        original: `Naval War College
Newport, R.I.

Country Essay

SPAIN

By

Tomas Gomez Arroyo

Captain, Spanish Navy

The contents of this paper reflect my own personal views and
are not necessarily endorsed by the Naval War College or the
Department of the Navy or my Country.

Signed ______________________________

       ______________________________

Date   ______________________________

i`,
        traduccion: `Naval War College
Newport, R.I.

Ensayo sobre un país

ESPAÑA

Por

Tomás Gómez Arroyo

Capitán de navío, Armada Española

El contenido de este trabajo refleja mis propias opiniones personales y
no está necesariamente avalado por el Naval War College ni por el
Departamento de Marina ni por mi país.

Firmado ______________________________

        ______________________________

Fecha   ______________________________

i`,
        notas: [
          { texto: 'Descripción material. Los campos de firma y fecha están en blanco en este ejemplar.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-15.jpg',
        alt: 'Índice del ensayo con los diez capítulos y la conclusión',
        titulo: 'Índice',
        referencia: 'Página 15 de 33 del expediente',
        original: `TABLE OF CONTENTS

CHAPTER.                                                     PAGE

FORWARD. . . . . . . . . . . . . . . . . . . . . . . .       ii
I.       GEOGRAPHY. . . . . . . . . . . . . . . . . . .     1
II.      OROGRAPHY. . . . . . . . . . . . . . . . . . .     2
III.     CLIMATE. . . . . . . . . . . . . . . . . . . .     3
IV.      HISTORY. . . . . . . . . . . . . . . . . . . .     4
V.       SOCIETY - THE SPANISH CHARACTER. . . . . . . .     6
VI.      SPAIN, A TREASURE HOUSE OF ART . . . . . . . .     7
VII.     EDUCATION AND CULTURE. . . . . . . . . . . . .    10
VIII.    POLITICAL STRUCTURE. . . . . . . . . . . . . .   12
IX.      MINING AND INDUSTRY. . . . . . . . . . . . . .   14
X.       FOREIGN POLICY . . . . . . . . . . . . . . . .   16
CONCLUSION . . . . . . . . . . . . . . . . . . . . . .    17`,
        traduccion: `ÍNDICE

CAPÍTULO                                                     PÁGINA

PRÓLOGO ...................................................... ii
I.       GEOGRAFÍA ............................................ 1
II.      OROGRAFÍA ............................................ 2
III.     CLIMA ................................................. 3
IV.      HISTORIA .............................................. 4
V.       SOCIEDAD - EL CARÁCTER ESPAÑOL ....................... 6
VI.      ESPAÑA, UN TESORO ARTÍSTICO .......................... 7
VII.     EDUCACIÓN Y CULTURA ................................. 10
VIII.    ESTRUCTURA POLÍTICA ................................. 12
IX.      MINERÍA E INDUSTRIA ................................. 14
X.       POLÍTICA EXTERIOR ................................... 16
CONCLUSIÓN ................................................... 17`,
        notas: [
          { texto: 'Lectura del original. El índice escribe «FORWARD»; la transcripción conserva esta forma, aunque el término habitual en inglés es «FOREWORD».' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-16.jpg',
        alt: 'Prólogo del ensayo describiendo a España como un continente en miniatura',
        titulo: 'Prólogo',
        referencia: 'Página 16 de 33 del expediente',
        original: `FORWARD

It is not easy to speak about Spain.  It is an ancient land whose
soil has known so many different civilizations that no precise defini-
tion is possible.  Spain is one and many at the same time, and no
single glance could possibly take in all its complexity.  It has
been called a "miniature continent" and everything tends to confirm
that picture.  It is seen, physically, in the contrasts among its various
regions - forests and steppes, rugged mountains, cliff-bound coasts,
and sweeping beaches, and among its different peoples - varied in race,
in language and in customs.  This whole complex, colorful world is
SPAIN.

ii`,
        traduccion: `PRÓLOGO

No es fácil hablar de España. Es una tierra antigua cuyo suelo ha conocido tantas civilizaciones
diferentes que ninguna definición precisa es posible. España es una y muchas al mismo tiempo,
y ninguna sola mirada podría abarcar toda su complejidad. Ha sido llamada un «continente en miniatura»
y todo tiende a confirmar esa imagen. Se aprecia físicamente en los contrastes entre sus diversas
regiones - bosques y estepas, montañas escarpadas, costas bordeadas de acantilados y amplias playas -
y entre sus diferentes pueblos - diversos en raza, lengua y costumbres. Todo este mundo complejo y colorido es ESPAÑA.

ii`,
        notas: [],
      },
      {
        src: '/fotos/archivo/pagina-17.jpg',
        alt: 'Capítulo I, sobre la geografía de España y la península ibérica',
        titulo: 'Capítulo I · Geografía',
        referencia: 'Página 17 de 33 del expediente',
        original: `CHAPTER I. - GEOGRAPHY

The Iberian Peninsula, - Spain and Portugal - takes the form of a
pentagon, bound by rocky coasts.  The American writer, John A. Crow,
in his book "Spain.  The Root and the Flower" described my country
in this way:  "Spain is like a grand castle that rises from the sea.
The entire perimeter of the country is marked by ranges of mountains.
Within the ring of these soaring walls of granite, lies the courtyard
of the castle, the vast tableland of Castile."

There is an insular Spain, made up of the Canaries and the
Balearic Islands, and an African Spain, consisting of the cities of
Ceuta and Mellila and the Province of Sahara.  The Greenwich Meridian
crosses the eastern part of the country, with the majority of its
territory lying to the West of this line.  In size, its 300,000 sq.
miles of territory, make it the third country in Europe, while it
ranks seventh in population with 33,000,000 people.

The population density is 110 per sq. mile.  Given the physical
characteristics of the country, the population is very unevenly
distributed.  The high central tableland, dry with a continental
climate, especially in certain parts of Castile and Aragon, is less
heavily populated than the lower coastal regions where living conditions
are more favorable.  Thus, Galicia, Catalina, the Basques Provinces, and
Valencia, have the highest density of population.

1`,
        traduccion: `CAPÍTULO I. - GEOGRAFÍA

La península ibérica, - España y Portugal - tiene forma de pentágono, bordeado por costas rocosas.
El escritor norteamericano John A. Crow, en su libro «Spain. The Root and the Flower», describió mi país así:
«España es como un gran castillo que se eleva desde el mar. Todo el perímetro del país está marcado por cordilleras.
Dentro del anillo de estos elevados muros de granito se halla el patio del castillo, la vasta meseta de Castilla.»

Hay una España insular, formada por Canarias y Baleares, y una España africana, compuesta por las ciudades de
Ceuta y Melilla y la Provincia del Sahara. El meridiano de Greenwich cruza la parte oriental del país,
quedando la mayor parte de su territorio al oeste de esta línea. Por extensión, sus 300.000 millas cuadradas
la convierten en el tercer país de Europa, mientras ocupa el séptimo puesto por población, con 33.000.000 de habitantes.

La densidad de población es 110 por milla cuadrada. Dadas las características físicas del país, la población
está distribuida de manera muy desigual. La alta meseta central, seca y de clima continental, especialmente
en ciertas partes de Castilla y Aragón, está menos poblada que las regiones costeras bajas. Así, Galicia,
Cataluña, las Provincias Vascas y Valencia tienen la mayor densidad de población.

1`,
        notas: [
          { texto: 'Lectura del original. El original mecanografía «Mellila» y «Catalina».' },
          { texto: 'Decisión de traducción. Se traducen como «Melilla» y «Cataluña», por ser correcciones ortográficas evidentes; la transcripción no las corrige.' },
          { texto: 'Contexto histórico. La expresión «Provincia del Sahara» se conserva como descripción empleada en el documento de 1972-1973.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-18.jpg',
        alt: 'Capítulo II, sobre la orografía y las playas de España',
        titulo: 'Capítulo II · Orografía',
        referencia: 'Página 18 de 33 del expediente',
        original: `CHAPTER II. - OROGRAPHY

The Central plateau is 120,000 sq. miles and has an average
altitude above sea level of more than 2,000 feet.  It includes Castile,
Leon, and Extremadura.  Flanking it are the lateral depressions formed
by the valleys of the Ebro in Navarra, Aragon, and Southern Catalonia;
and the Guadalquivir, dominating the greater part of Andalusia, and the
great mountain ranges which mark its boundaries.

Golden, sandy beaches, such as La Concha, el Saedinero, and
Torrelavega, along the Cantabarian Coast; Torremolinos Benidorm and
Costa Brava, over the Mediterranean Sea and the well known Canarian
beaches in the Atlantic Ocean, are always full with plenty of tourists
who contribute to spread the name of Spain all over the world.

2`,
        traduccion: `CAPÍTULO II. - OROGRAFÍA

La meseta central tiene 120.000 millas cuadradas y una altitud media sobre el nivel del mar de más de 2.000 pies.
Incluye Castilla, León y Extremadura. A sus flancos están las depresiones laterales formadas por los valles del Ebro,
en Navarra, Aragón y Cataluña meridional; y el Guadalquivir, que domina la mayor parte de Andalucía, y las grandes
cordilleras que marcan sus límites.

Las doradas playas de arena, como La Concha, El Sardinero y Torrelavega, en la costa Cantábrica; Torremolinos,
Benidorm y la Costa Brava, sobre el mar Mediterráneo, y las conocidas playas canarias en el Atlántico, siempre están llenas
de numerosos turistas que contribuyen a difundir el nombre de España por todo el mundo.

2`,
        notas: [
          { texto: 'Lectura del original. El original parece decir «el Saedinero»; la lectura más probable es «El Sardinero».' },
          { texto: 'Decisión de traducción. La traducción emplea «El Sardinero» y deja constancia aquí de la lectura dudosa.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-19.jpg',
        alt: 'Capítulo III, sobre el clima de las distintas regiones españolas',
        titulo: 'Capítulo III · Clima',
        referencia: 'Página 19 de 33 del expediente',
        original: `CHAPTER III. - CLIMATE

The climate of Spain is as varied as its scenery.  In these latitudes, the weather should be mild and temperate but the abruptly changing geography and certain marine currents cause wide diversities in climate.  For this reason, Spains knows all four seasons, although there is always some region where the climate is mild, the sun warm and the temperature, even in summer, is pleasnt and temperate.

In winter, Alicante, Murcia, and Almeria, have an exceptional climate, with temperature of 55 and 60° F., even in January and February.  Spring is lovely in the East and Balearic regions, while Fall is classically gentle and mild in Madrid and its region.  Generally speaking, the whole Peninsula in this season offers agreeable weather with clear and blue skies and bright sun.

3`,
        traduccion: `CAPÍTULO III. - CLIMA

El clima de España es tan variado como su paisaje. En estas latitudes, el tiempo debería ser suave y templado, pero la geografía que cambia abruptamente y ciertas corrientes marinas causan grandes diversidades climáticas. Por esta razón, España conoce las cuatro estaciones, aunque siempre hay alguna región donde el clima es suave, el sol cálido y la temperatura, incluso en verano, agradable y templada.

En invierno, Alicante, Murcia y Almería tienen un clima excepcional, con temperaturas de entre 55 y 60 °F, incluso en enero y febrero. La primavera es encantadora en las regiones del este y Baleares, mientras que el otoño es clásicamente suave y templado en Madrid y su región. En general, toda la península ofrece en esta estación un tiempo agradable, con cielos claros y azules y sol brillante.

3`,
        notas: [
          { texto: 'Lectura del original. Se conservan en la transcripción las formas visibles «Spains knows» y «pleasnt».' },
          { texto: 'Lectura del original. La notación mecanografiada «60o F.» se lee como 60 °F: la letra «o» cumple la función de signo de grado, no es un tercer cero.' },
          { texto: 'Dato de lectura. El intervalo de 55 a 60 °F equivale aproximadamente a 13-16 °C. Esa conversión ayuda a entender la descripción del invierno de Alicante, Murcia y Almería, pero no se incorpora al cuerpo de la traducción.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-20.jpg',
        alt: 'Capítulo IV, primera página sobre la historia de España desde la Antigüedad hasta el descubrimiento de América',
        titulo: 'Capítulo IV · Historia (1 de 2)',
        referencia: 'Página 20 de 33 del expediente',
        original: `CHAPTER IV. - HISTORY

To resume in a few paragraphs the whole history of Spain, - about 2,000 years -, is really a hard problem.  Nevertheless, I shall attempt to give an idea of the varied events, the most characteristic of them which in a wide way, may we call basic and fundamental.

Its location at one end of the European Continent and its near-ness to Africa, have given Spain an enormous strategic importance, and have made it the object of encroachment by many varied cultures. From a thousand years before Christ, through the 8th Century of our era, the Iberian Peninsula has aroused the ambitions of a while series of invaders, who brought it into contact with the great civilizations of the world.

Romans, Visogoths, and Arabs, remained in Spain for long period and produced racial crosses and cultural infusions which were definitive in the formation of the Spanish character.  The illustrious historian, Menendez y Pelayo, in his study about the Spanish character, points out that the unity of language, followed by the unity of belief as a consequence of Christianity, were the fundamental pillars of the unity of Spain.

The Roman Era began with the glory of Spanish unification.  During the reign of Fernando and Isabel, not only was the country joined together religiously, politically, and territorially, but one of the transcendental events of history took place:  The New World was discovered. With only a few men and three small ships, Spain, began the conquest, conversion, exploration and colonization of the New World.

4`,
        traduccion: `CAPÍTULO IV. - HISTORIA

Resumir en unos pocos párrafos toda la historia de España, - unos 2.000 años -, es realmente un problema difícil. Sin embargo, intentaré dar una idea de los variados acontecimientos, de los más característicos de ellos que, en un sentido amplio, podemos llamar básicos y fundamentales.

Su situación en un extremo del continente europeo y su proximidad a África han dado a España una enorme importancia estratégica y la han convertido en objeto de penetración por muchas culturas variadas. Desde mil años antes de Cristo hasta el siglo VIII de nuestra era, la península ibérica ha despertado las ambiciones de toda una serie de invasores, que la pusieron en contacto con las grandes civilizaciones del mundo.

Romanos, visigodos y árabes permanecieron en España durante largo período y produjeron cruces raciales e infusiones culturales que fueron definitivos en la formación del carácter español. El ilustre historiador Menéndez y Pelayo, en su estudio sobre el carácter español, señala que la unidad de lengua, seguida por la unidad de creencia como consecuencia del cristianismo, fueron los pilares fundamentales de la unidad de España.

La era romana comenzó con la gloria de la unificación española. Durante el reinado de Fernando e Isabel, no solo quedó el país unido religiosa, política y territorialmente, sino que tuvo lugar uno de los acontecimientos trascendentales de la historia: se descubrió el Nuevo Mundo. Con solo unos pocos hombres y tres pequeñas naves, España comenzó la conquista, conversión, exploración y colonización del Nuevo Mundo.

4`,
        notas: [
          { texto: 'Lectura del original. La transcripción conserva las formas visibles «Visogoths» y «a while series».' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-21.jpg',
        alt: 'Capítulo IV, segunda página sobre la historia de España desde los Austrias hasta el Movimiento Nacional',
        titulo: 'Capítulo IV · Historia (2 de 2)',
        referencia: 'Página 21 de 33 del expediente',
        original: `Following the above mentioned author, John A. Crow, in the des-cription of events that brought Spain at the top of its glory, we may say that "the principal resource of Spain was then, as it always had been, the vital energy, the boundless determination, the incredible thrust and will of its people".  Under Carlos I as Emperor, Spain became the greatest power in Europe and America.  His son, Felipe II was able to maintain the political strength, but during the rule of the last King of Austria, Carlos II, the decline as a European power began.

The House of Bourbon started a new era in which there were many benefits in the life of the people and the whole country came into a closer contact with the rest of the European culture.

During the Contemporaneus Era, Spain gained by the new ideas coming from the French Revolution.  This event, together with the Napoleonic invasion, brought to Spain a new sort of liberal, political idea, which the people tried to assimilate with goodwill, but little success.  The 19th Century was the one in which Spain lost its overseas possessions and, at home, serious problems of succession to the throne.

The Republican period is followed by the National Movement which restored peace and prosperity to Spain.

5`,
        traduccion: `Siguiendo al autor antes mencionado, John A. Crow, en la descripción de los acontecimientos que llevaron a España a la cima de su gloria, podemos decir que «el principal recurso de España era entonces, como siempre lo había sido, la energía vital, la determinación sin límites, el increíble impulso y voluntad de su pueblo». Bajo Carlos I como Emperador, España se convirtió en la mayor potencia de Europa y América. Su hijo Felipe II pudo mantener la fortaleza política, pero durante el gobierno del último rey de Austria, Carlos II, comenzó el declive como potencia europea.

La casa de Borbón inició una nueva era en la que hubo muchos beneficios en la vida del pueblo y todo el país entró en un contacto más estrecho con el resto de la cultura europea.

Durante la Edad Contemporánea, España se benefició de las nuevas ideas procedentes de la Revolución francesa. Este acontecimiento, junto con la invasión napoleónica, trajo a España una nueva clase de idea política liberal, que el pueblo trató de asimilar con buena voluntad, pero con poco éxito. El siglo XIX fue aquel en que España perdió sus posesiones de ultramar y, dentro del país, tuvo serios problemas de sucesión al trono.

Al período republicano le sigue el Movimiento Nacional, que restauró la paz y la prosperidad en España.

5`,
        notas: [
          { texto: 'Decisión de traducción. El error visible «Contemporaneus» se normaliza como «Edad Contemporánea».' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-22.jpg',
        alt: 'Capítulo V, sobre la sociedad y el carácter español',
        titulo: 'Capítulo V · Sociedad',
        referencia: 'Página 22 de 33 del expediente',
        original: `CHAPTER V. - SOCIETY - THE SPANISH CHARACTER

The Spanish character is historically associated with a deep religious feeling, a firm ethical and traditional base, an unbelievable individualism and a special concept of honor that has marked the personal shape on the people.

The Spanish theory of existence makes life subordinated to the achievement of an ideal.  In the land of Don Quijote, a man is less interested in what he is, than in what he should be.

Nevertheless, each region has its own peculiarities, which make differences between people in them.  For example, there is nothing in common between Gallegos and Catalanes.  They even speak different languages.  It enhances the vitality of local, regional sentiments, which are still alive after centuries.  But such characteristics does not disturb the idea of a Spain as "a unity of destiny on the universal plane", for all regions have contributed to the embellishment of Spain and its history.

6`,
        traduccion: `CAPÍTULO V. - SOCIEDAD - EL CARÁCTER ESPAÑOL

El carácter español está históricamente asociado a un profundo sentimiento religioso, una firme base ética y tradicional, un increíble individualismo y un concepto especial del honor que ha marcado la forma personal del pueblo.

La teoría española de la existencia hace que la vida quede subordinada al logro de un ideal. En la tierra de Don Quijote, un hombre está menos interesado en lo que es que en lo que debería ser.

Sin embargo, cada región tiene sus propias peculiaridades, que establecen diferencias entre las personas que las habitan. Por ejemplo, no hay nada en común entre gallegos y catalanes. Incluso hablan lenguas diferentes. Esto realza la vitalidad de los sentimientos locales y regionales, que siguen vivos después de siglos. Pero tales características no perturban la idea de una España como «una unidad de destino en lo universal», pues todas las regiones han contribuido al embellecimiento de España y de su historia.

6`,
        notas: [],
      },
      {
        src: '/fotos/archivo/pagina-23.jpg',
        alt: 'Capítulo VI, primera página sobre el patrimonio artístico español desde Altamira hasta el arte musulmán',
        titulo: 'Capítulo VI · Arte (1 de 3)',
        referencia: 'Página 23 de 33 del expediente',
        original: `CHAPTER VI. - SPAIN, A TREASURE-HOUSE OF ART

Spain is a great museum where there are to be seen every facet of artistic endeavor.  From the prehistoric painting on the walls and roofs of the Altimira Caves, (Santander) down to the works of Picasso, Spain has never ceased to produce numerous and varied works of art.

The whole country is literally covered with castles, palaces, monasteries, and cathedrals of unusual artistic worth.  In them are valuable col-lections of sculptures, paintings, jewels, and tapestries.  The Roman remains begin with the astonishing aqueduct, in Segovia, and run through Merida and Tarragona to the ruins of ancient Italiza; bridges, archs, and roads from the Roman period, may be seen everywhere in the country, many of them in a very well conserved state.

Some Spanish cities are representatives of a particular style, of a specific art form.  Cordoba and Granda shelter the master works of Musulman Art, and in their towers, mosques and palaces can be read the whole brilliant history of the Caliphate and the Kingdom of Granada.

Sevilla offers, against the white background of its buildings, the grace of the Giralda, which, with the Mezquita in Cordoba, and the Alhambra in Granada, make up the most famous body of eatern art in Spain.

The long centuries, during which Arabs and Christians lived side by side, produced the purely Spanish-Moorish Christian style, Mudejar or Mozarabe, of which magnificant examples are to be found everywhere.

The Way of Santiago was the most important cultural development

7`,
        traduccion: `CAPÍTULO VI. - ESPAÑA, UN TESORO ARTÍSTICO

España es un gran museo donde pueden verse todas las facetas del empeño artístico. Desde la pintura prehistórica de las paredes y techos de las cuevas de Altamira, (Santander), hasta las obras de Picasso, España nunca ha dejado de producir numerosas y variadas obras de arte.

Todo el país está literalmente cubierto de castillos, palacios, monasterios y catedrales de inusual valor artístico. En ellos hay valiosas colecciones de esculturas, pinturas, joyas y tapices. Los restos romanos comienzan con el asombroso acueducto de Segovia y se extienden por Mérida y Tarragona hasta las ruinas de la antigua Itálica; puentes, arcos y calzadas del período romano pueden verse por todo el país, muchos de ellos en un estado de conservación muy bueno.

Algunas ciudades españolas son representativas de un estilo particular, de una forma artística específica. Córdoba y Granada albergan las obras maestras del arte musulmán, y en sus torres, mezquitas y palacios puede leerse toda la brillante historia del Califato y del Reino de Granada.

Sevilla ofrece, contra el blanco fondo de sus edificios, la gracia de la Giralda, que, junto con la Mezquita de Córdoba y la Alhambra de Granada, forman el más famoso conjunto de arte oriental en España.

Los largos siglos durante los cuales árabes y cristianos vivieron lado a lado produjeron el estilo cristiano puramente hispano-morisco, mudéjar o mozárabe, del que se encuentran por doquier ejemplos magníficos.

El Camino de Santiago fue el desarrollo cultural más importante

7`,
        notas: [
          { texto: 'Lectura del original. La transcripción conserva «Altimira», «Italiza», «Granda», «archs», «eatern» y «magnificant».' },
          { texto: 'Decisión de traducción. Las identificaciones evidentes se normalizan como «Altamira», «Itálica» y «Granada», y se corrigen los errores ingleses equivalentes en español.' },
          { texto: 'Continuidad entre páginas. La frase final continúa en la página 24; no se completa artificialmente en esta lámina.' },
          { texto: 'Contexto histórico. La asociación entre mudéjar y mozárabe se conserva como formulación del autor, sin convertirla en una explicación histórico-artística de la edición.' },
          {
            texto: 'Dato cultural. Altamira fue el primer lugar del mundo donde se identificó arte rupestre del Paleolítico superior. Marcelino Sanz de Sautuola publicó el hallazgo en 1880, pero su interpretación no fue reconocida ampliamente hasta 1902.',
            fuenteTexto: 'Museo Nacional de Altamira',
            fuenteUrl: 'https://www.cultura.gob.es/mnaltamira/ca/cueva-altamira/descubrimiento.html',
          },
        ],
      },
      {
        src: '/fotos/archivo/pagina-24.jpg',
        alt: 'Capítulo VI, segunda página sobre el románico, el gótico, El Escorial y el Museo del Prado',
        titulo: 'Capítulo VI · Arte (2 de 3)',
        referencia: 'Página 24 de 33 del expediente',
        original: `of the Middle Age.  From Roncesvalles to Compostela, the Romanesque

left its imprint on the churches and sculptures along the route,

reaching its peak with the Holy Door in the Cathedral of Santiago.

At the same time, in the Pirnean-Catalan region Romanesque murals were

everywhere, forming a great collection, which can be seen today in

Barcelona.

In its great expansion, the Gothic covered the Peninsula with

many differents monuments, such as Toledo, Leon, Burgos and Segovia's

Cathedrals.

The Renaissance in Spain produced a number of interesting variations

which may be seen in the monuments of the period.  One of these is the

Herreran Style, sober and grandiose, whose principal example is the

Escorial, erected by order of Felipe II to commemorate the victory of

Saint Quentin, in 1557, over Henry II, King of France.  The Escorial

itself, has come to be the representation of an era and a way of life.

Salamanca, on the other hand, preserves the finest examples of the ornate

Plateresque, which gives the city the appearance of being decorated

with golden lacework.

The Prado Museum in Madrid, one of the world's greatest treasure-

houses, contains the finest collection of Spanish painting, in addition

to the works of El Greco, Zurnaran, Velazquez, Murillo, and Ribera.

Special mention must be made of the works of Goya, the influence of

whose genius is still felt in art today.  His colossal life work,

broke all the rules and was the forerunner of daring developments in

technique.

8`,
        traduccion: `de la Edad Media. Desde Roncesvalles hasta Compostela, el románico dejó su impronta en las iglesias y esculturas a lo largo de la ruta, alcanzando su culminación con la Puerta Santa de la Catedral de Santiago.

Al mismo tiempo, en la región pirenaico-catalana había por todas partes murales románicos, que formaban una gran colección y que puede verse hoy en Barcelona.

En su gran expansión, el gótico cubrió la Península de muchos monumentos diferentes, tales como las catedrales de Toledo, León, Burgos y Segovia.

El Renacimiento en España produjo una serie de variaciones interesantes que pueden verse en los monumentos del período. Una de ellas es el estilo herreriano, sobrio y grandioso, cuyo principal ejemplo es El Escorial, erigido por orden de Felipe II para conmemorar la victoria de San Quintín, en 1557, sobre Enrique II, rey de Francia. El Escorial en sí mismo ha llegado a ser la representación de una época y una manera de vivir.

Salamanca, por otra parte, conserva los mejores ejemplos del ornamentado plateresco, que da a la ciudad el aspecto de estar decorada con encaje de oro.

El Museo del Prado de Madrid, uno de los mayores tesoros artísticos del mundo, contiene la mejor colección de pintura española, además de las obras de El Greco, Zurbarán, Velázquez, Murillo y Ribera.

Debe hacerse mención especial de las obras de Goya, cuya influencia genial aún se siente hoy en el arte. Su colosal obra de toda una vida rompió todas las reglas y fue precursora de audaces desarrollos en técnica.

8`,
        notas: [
          { texto: 'Continuidad entre páginas. La página comienza a mitad de oración; continúa «The Way of Santiago was the most important cultural development» de la página 23.' },
          { texto: 'Decisión de traducción. Grafías fuente: «Pirnean», «differents», «Leon», «Zurnaran» y «Velazquez». En la traducción se normalizan Pirenaico, diferentes, León, Zurbarán y Velázquez.' },
          { texto: 'Decisión de traducción. «treasure-houses» se traduce como «tesoros artísticos» para evitar la calca «casas del tesoro».' },
          {
            texto: 'Dato cultural. La «Holy Door» del texto es la Puerta Santa o del Perdón de la Catedral de Santiago. Solo se abre durante los Años Santos Compostelanos, cuando el 25 de julio, festividad de Santiago Apóstol, cae en domingo.',
            fuenteTexto: 'Catedral de Santiago',
            fuenteUrl: 'https://catedraldesantiago.es/visitas/',
          },
        ],
      },
      {
        src: '/fotos/archivo/pagina-25.jpg',
        alt: 'Capítulo VI, conclusión sobre Gaudí, la generación de pintores modernos y la música española',
        titulo: 'Capítulo VI · Arte (3 de 3)',
        referencia: 'Página 25 de 33 del expediente',
        original: `Towards the end of the 19th Century, a deep preoccupation with

all aspects of art, gave birth to a complex world in which the most

diverse tendencies found supporters.  Gaudi created a light-hearted

architecture, which is a source of admiration today.  Sorolla pointed

out to the world of the sun and the blue waters of the Mediterranean

region, while Gutierrez Solana searched in the shadows for another face

of Spain.  Through the great body of their work, Picasso, Juan de Gris,

Miro and Dali, restored Spain to its leading position in the world of

the art.  Many names are associated with the most recent developments

in art and architecture, particularly the Valley of Fallen - a Civil

War Memorial - which adds a finishing touch to the great list of

Spanish Monuments.

In music, Spain has produced some good composers.  Among the

earlier ones, Tomas Luis de Vitoria is outstanding in the choral and

religious themes.  In modern times, Granados, Albeniz, Falla, Turina,

Halffter, and Rodrigo, form the elite.  A singularly Spanish genre is

the Zarzuela, a type of popular light opera, with spoken parts, in

which the Spanish character is successfully represented.

9`,
        traduccion: `Hacia finales del siglo XIX, una profunda preocupación por todos los aspectos del arte dio nacimiento a un mundo complejo en el que las más diversas tendencias hallaron partidarios. Gaudí creó una arquitectura ligera y alegre que es hoy fuente de admiración. Sorolla señaló al mundo el sol y las aguas azules de la región mediterránea, mientras Gutiérrez Solana buscaba en las sombras otro rostro de España. A través del gran cuerpo de su obra, Picasso, Juan Gris, Miró y Dalí devolvieron a España su posición rectora en el mundo del arte. Muchos nombres están asociados con los desarrollos más recientes en arte y arquitectura, particularmente el Valle de los Caídos - un Memorial de la Guerra Civil - que añade un toque final a la gran lista de monumentos españoles.

En música, España ha producido algunos buenos compositores. Entre los primeros, Tomás Luis de Victoria destaca en los temas corales y religiosos. En los tiempos modernos, Granados, Albéniz, Falla, Turina, Halffter y Rodrigo forman la élite. Un género singularmente español es la zarzuela, un tipo de ópera ligera popular, con partes habladas, en la que el carácter español está representado con éxito.

9`,
        notas: [
          { texto: 'Decisión de traducción. Grafías fuente normalizadas en traducción: «Gaudi», «Gutierrez», «Juan de Gris», «Miro», «Dali», «Tomas» y «Albeniz».' },
          { texto: 'Decisión de traducción. «Valley of Fallen - a Civil War Memorial -» se conserva como formulación histórica del documento; cualquier contextualización debe ir fuera de la traducción.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-26.jpg',
        alt: 'Capítulo VII, primera página sobre el sistema educativo español',
        titulo: 'Capítulo VII · Educación y cultura (1 de 2)',
        referencia: 'Página 26 de 33 del expediente',
        original: `CHAPTER VII. - EDUCATION AND CULTURE

The new system of studies, comprises the following stages: basic,

general education (between the ages of 6 and 13); secondary bacalaureate

(between 14 and 16); an initiation course for the University; a first

cycle of University to obtain a diploma; a second cycle to obtain

a degree; a third cycle to obtain the specialization and finally, the

doctorate.  Furthermore, occupational training (for which the Labor

Universities and Professional Schools are most important) and technical

training are also available.  In Spain, there are also 164 Teachers'

Training Colleges, 12 cities have universities, while another eight

cities possess one or more faculties.

Technical training is provided by the higher education technical

schools in several cities like Madrid, Barcelona, Bilbao, Las Palmas,

etc.  There are also official and private schools for fine arts, applied

arts and crafts, cinematography, journalism radio and television, tourism,

etc.  People who cannot attend regular educational centers, may follow

the Radio Bacalaureate program, broadcast by Radio Nacional de Espana,

which is supplemented by private broadcasting stations.

The Institute of Hispanic Culture has done great work; it is

specially dedicated to cultural exchanges with the Spanish American

countries, with which we have strong historical religious and cultural

ties, quite apart from the common tongue.  Next door to the Institute

itself, stands the Museum of America, in the University City of Madrid.

Another of the most interesting cultural achievements is the Summer

University and the courses for foreigners which are followed by people

10`,
        traduccion: `CAPÍTULO VII. - EDUCACIÓN Y CULTURA

El nuevo sistema de estudios comprende las etapas siguientes: enseñanza general básica (entre las edades de 6 y 13 años); bachillerato secundario (entre 14 y 16); un curso de iniciación para la Universidad; un primer ciclo de Universidad para obtener un diploma; un segundo ciclo para obtener un título; un tercer ciclo para obtener la especialización y, finalmente, el doctorado. Además, la formación profesional (para la cual las Universidades Laborales y las Escuelas Profesionales son de la mayor importancia) y la formación técnica están también disponibles. En España hay asimismo 164 Escuelas de Formación del Profesorado; 12 ciudades tienen universidades, mientras otras ocho ciudades poseen una o más facultades.

La formación técnica la proporcionan las escuelas técnicas de enseñanza superior en varias ciudades como Madrid, Barcelona, Bilbao, Las Palmas, etc. Hay asimismo escuelas oficiales y privadas de bellas artes, artes aplicadas y oficios, cinematografía, periodismo, radio y televisión, turismo, etc. Las personas que no pueden asistir a centros educativos ordinarios pueden seguir el programa de Bachillerato Radiofónico, emitido por Radio Nacional de España, que se complementa con emisoras privadas.

El Instituto de Cultura Hispánica ha realizado una gran labor; está especialmente dedicado a los intercambios culturales con los países hispanoamericanos, con los cuales tenemos fuertes vínculos históricos, religiosos y culturales, aparte de la lengua común. Junto al propio Instituto se alza el Museo de América, en la Ciudad Universitaria de Madrid.

Otro de los logros culturales más interesantes es la Universidad de Verano y los cursos para extranjeros, a los que asisten personas

10`,
        notas: [
          { texto: 'Continuidad entre páginas. La oración final continúa en la página 27.' },
          { texto: 'Decisión de traducción. Grafía fuente: «bacalaureate» y «Espana». La traducción normaliza «bachillerato» y «España».' },
          { texto: 'Nota editorial. Las cifras y la descripción del sistema educativo son históricas y no deben actualizarse.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-27.jpg',
        alt: 'Capítulo VII, cierre sobre los cursos para extranjeros y la producción editorial española',
        titulo: 'Capítulo VII · Educación y cultura (2 de 2)',
        referencia: 'Página 27 de 33 del expediente',
        original: `from many different countries, specially for students from Latin-

America, Portugal, the Philippines, African countries, and the Arab

world.  To give an idea of the Spanish output of books, the figure of

35 million is very significant; most of them were shipped to America.

11`,
        traduccion: `de muchos países diferentes, especialmente estudiantes de Latinoamérica, Portugal, Filipinas, países africanos y el mundo árabe. Para dar una idea de la producción española de libros, la cifra de 35 millones es muy significativa; la mayoría de ellos se enviaron a América.

11`,
        notas: [
          { texto: 'Continuidad entre páginas. Continúa directamente la frase de la página 26: «…cursos para extranjeros, a los que asisten personas de muchos países diferentes…».' },
          { texto: 'Decisión de traducción. El original corta «Latin-America» entre líneas; la traducción recompone «Latinoamérica».' },
          { texto: 'Lectura del original. «America» no se precisa en el original.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-28.jpg',
        alt: 'Capítulo VIII, primera página sobre la estructura política y las Leyes Fundamentales',
        titulo: 'Capítulo VIII · Estructura política (1 de 2)',
        referencia: 'Página 28 de 33 del expediente',
        original: `CHAPTER VIII. - POLITICAL STRUCTURE

Spain is a Catholic, Social and Representative State, which in

accordance with her tradition, is constituted a Kingdom, as defined

by the law and passed by popular referendum in 1947.  Since 1936, the

lifetime Headship of the State, has been held by Generalisimo Franco,

who in accordance with the Law of Succession, has appointed as his

successor, Prince Juan Carlos de Borbon, who will therefore be Spain's

future King.

The Head of State is assisted by the Government, composed of a

Vice President and 18 Ministers.

The Spanish Constitution is formed by the ensemble of so-called

Fundamental Laws, all of which have been passed and can only be

modified or repealed by the referendum of the whole nation.

Among these Laws is the "Fuero de los Espanoles" or Bills of

Rights, for the individual; The Labor Charter or "Fuero del Trabajo",

establishing the legal principles which are to govern the system of

labor in Spain, in accordance with social justice; the Law known as

the Basic Principles of Movement, defines the essential ideas that

inspire the actions of the Spanish State.

The nation's participation in government is carried out through

the Cortes or Parliament, according to the system of representation

of organic democracy.  The Cortes has a sector representing the Trade

Unions, another for the Municipalities of the 50 provinces and the third

sector representing the family as a unity.  A seat in the Cortes is

also held by a certain number of personalities, by reason of their public

12`,
        traduccion: `CAPÍTULO VIII. - ESTRUCTURA POLÍTICA

España es un Estado Católico, Social y Representativo, que, de acuerdo con su tradición, se constituye en Reino, según se define por la ley y fue aprobado por referéndum popular en 1947. Desde 1936, la jefatura vitalicia del Estado ha sido ejercida por el Generalísimo Franco, quien, de acuerdo con la Ley de Sucesión, ha nombrado como su sucesor al príncipe Juan Carlos de Borbón, quien será por tanto el futuro Rey de España.

El Jefe del Estado es asistido por el Gobierno, compuesto por un Vicepresidente y 18 Ministros.

La Constitución española está formada por el conjunto de las llamadas Leyes Fundamentales, todas las cuales han sido aprobadas y solo pueden ser modificadas o derogadas por el referéndum de toda la nación.

Entre estas Leyes están el «Fuero de los Españoles», o declaración de derechos individuales; el Fuero del Trabajo, que establece los principios jurídicos que han de regir el sistema de trabajo en España, de acuerdo con la justicia social; la Ley conocida como los Principios Fundamentales del Movimiento, que define las ideas esenciales que inspiran las acciones del Estado español.

La participación de la nación en el gobierno se lleva a cabo por medio de las Cortes o Parlamento, según el sistema de representación de democracia orgánica. Las Cortes tienen un sector que representa a los Sindicatos, otro a los Municipios de las 50 provincias y el tercer sector representa a la familia como una unidad. Un escaño en las Cortes es también ocupado por cierto número de personalidades, por razón de su cargo público

12`,
        notas: [
          { texto: 'Continuidad entre páginas. La página acaba a mitad de la unidad «by reason of their public office», que se recompone con la página 29.' },
          { texto: 'Decisión de traducción. Grafías fuente: «Generalisimo», «Borbon» y «Espanoles»; la traducción normaliza las tildes.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-29.jpg',
        alt: 'Capítulo VIII, cierre sobre las Cortes y el derecho al voto',
        titulo: 'Capítulo VIII · Estructura política (2 de 2)',
        referencia: 'Página 29 de 33 del expediente',
        original: `office.  A small group of deputies are designated by the Head of State.

There are also a National Council of the Movement, a Council of

the Kingdom, a Council of State, a Supreme Court of Justice and other

bodies of long-standing constitutional tradition.

Laws are prepared by the Cortes and sanctioned by the Head of

State.  The National Council has the mission of watching for faithful

compliance with the fundamental Principles of the Movement, rather

like a tribunal of constitutional guarantees.

All Spaniards over the age of 21 are entitled to vote, without

discrimination as to sex.

13`,
        traduccion: `Un pequeño grupo de diputados es designado por el Jefe del Estado.

Existen asimismo un Consejo Nacional del Movimiento, un Consejo del Reino, un Consejo de Estado, un Tribunal Supremo de Justicia y otros organismos de larga tradición constitucional.

Las leyes son preparadas por las Cortes y sancionadas por el Jefe del Estado. El Consejo Nacional tiene la misión de velar por el fiel cumplimiento de los Principios Fundamentales del Movimiento, más bien como un tribunal de garantías constitucionales.

Todos los españoles mayores de 21 años tienen derecho a votar, sin discriminación en cuanto al sexo.

13`,
        notas: [
          { texto: 'Decisión de traducción. La traducción de esta página presupone la continuidad del final de la anterior: «…por razón de su cargo público. Un pequeño grupo…».' },
          { texto: 'Descripción material. La comparación con un tribunal de garantías es una afirmación del original.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-30.jpg',
        alt: 'Capítulo IX, primera página sobre minería e industria españolas',
        titulo: 'Capítulo IX · Minería e industria (1 de 2)',
        referencia: 'Página 30 de 33 del expediente',
        original: `CHAPTER IX. - MINING AND INDUSTRY

Iron, lead, zinc, and mercury are well represented in the Spanish

soil, but the country suffers from a scarcity of energy minerals (coal

and petroleum).  That is why Spain has been striving for over 40 years,

to solve this problem by using "white coal".  The national gold, copper,

silver, lead, tin, and iron deposits have been mined since about 3,000

years B.C.  In ancient times, the Iberian mines were renown, but today,

are almost exhausted as far as precious metals are concerned.

Traditionally, one of the leading Spanish industries has been textiles.

In former times it was centered in Castilla but for the last two

centuries, has been concentrated mainly in Catalonia.  Wool, cotton,

and silk, are worked in many spinning and printing mills.  The main

industrial areas in Spain are: Asturias, (where there are rich mines

and outstanding iron and steel mills), the Basques Provinces and

Santander, with foundries, steel mills, heavy machinery manufacturers,

chemicals and dairy by-products; Catalonia with car manufacturers,

locomotives and other heavy industries, besides textiles; and the Central

Zone around Madrid with metallurgical, chemical and ceramic industries

among others.  The food industry is scattered all over the country;

flour in the inlands areas, olives in Andalussia; vegetable canning

in Galicia and Andalusia; wine-growing in Catalonia, la Rioja, La Mancha

and Andalusia, etc.

In recent years, the automobile and household electrical appliance

industries have been developed very rapidly.

Spain exports large quantities of very high quality goods, but is

14`,
        traduccion: `CAPÍTULO IX. - MINERÍA E INDUSTRIA

El hierro, el plomo, el zinc y el mercurio están bien representados en el suelo español, pero el país sufre escasez de minerales energéticos (carbón y petróleo). Por ello España lleva más de 40 años esforzándose por resolver este problema mediante el uso del «carbón blanco». Los yacimientos nacionales de oro, cobre, plata, plomo, estaño y hierro se explotan desde hace unos 3.000 años a. C. En tiempos antiguos, las minas ibéricas fueron renombradas, pero hoy están casi agotadas en lo que se refiere a metales preciosos.

Tradicionalmente, una de las principales industrias españolas ha sido el textil. En tiempos anteriores se concentraba en Castilla, pero durante los dos últimos siglos se ha concentrado principalmente en Cataluña. La lana, el algodón y la seda se trabajan en muchas fábricas de hilado y estampado. Las principales zonas industriales de España son: Asturias (donde hay ricas minas y destacadas siderurgias), las Provincias Vascongadas y Santander, con fundiciones, acerías, fabricantes de maquinaria pesada, productos químicos y subproductos lácteos; Cataluña, con fabricantes de automóviles, locomotoras y otras industrias pesadas, además de textiles; y la Zona Central en torno a Madrid, con industrias metalúrgicas, químicas y cerámicas, entre otras. La industria alimentaria está dispersa por todo el país; harina en las zonas interiores, aceitunas en Andalucía; conservas vegetales en Galicia y Andalucía; cultivo de vino en Cataluña, La Rioja, La Mancha y Andalucía, etc.

En los últimos años, las industrias del automóvil y de los aparatos eléctricos domésticos se han desarrollado muy rápidamente.

España exporta grandes cantidades de productos de muy alta calidad, pero se ve obligada

14`,
        notas: [
          { texto: 'Continuidad entre páginas. La oración final continúa en la página 31.' },
          { texto: 'Decisión de traducción. Grafías fuente: «renown», «Basques Provinces», «inlands» y «Andalussia». La traducción normaliza Andalucía y mantiene el sentido de las restantes.' },
          { texto: 'Decisión de traducción. «white coal» se vierte literalmente como «carbón blanco»; es una expresión histórica que requiere explicación contextual separada.' },
          { texto: 'Descripción material. Las afirmaciones sobre minería e industria corresponden a la fecha del texto, no a datos actuales.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-31.jpg',
        alt: 'Capítulo IX, cierre con las cifras del comercio exterior español de 1969',
        titulo: 'Capítulo IX · Minería e industria (2 de 2)',
        referencia: 'Página 31 de 33 del expediente',
        original: `obliged to buy abroad others which the country lacks, at least in

sufficient quantities to cover national needs, such as petroleum, coal,

machinery, etc., and exports products such as machinery, olive oil,

combustible minerals, ships, automobiles, trucks, and tractors.  The

Spanish foreign trade, in 1969 was:  Imports - 269,305.4 and exports -

133,022.5 millions of pesetas.

15`,
        traduccion: `a comprar en el extranjero otros que el país no posee, al menos en cantidades suficientes para cubrir las necesidades nacionales, tales como petróleo, carbón, maquinaria, etc., y exporta productos tales como maquinaria, aceite de oliva, minerales combustibles, barcos, automóviles, camiones y tractores. El comercio exterior español, en 1969, fue: importaciones - 269.305,4 y exportaciones - 133.022,5 millones de pesetas.

15`,
        notas: [
          { texto: 'Continuidad entre páginas. Continúa la oración de la página 30: «España exporta grandes cantidades de productos de muy alta calidad, pero se ve obligada a comprar…».' },
          { texto: 'Decisión de traducción. Las cifras se conservan exactamente en la transcripción; la traducción usa formato numérico español sin alterar su valor.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-32.jpg',
        alt: 'Capítulo X, sobre la política exterior española y la aspiración europea',
        titulo: 'Capítulo X · Política exterior',
        referencia: 'Página 32 de 33 del expediente',
        original: `CHAPTER X. - FOREIGN POLICY

"Europe is needing a united, stable and prosperous Spain, so in the

future, I can see her fully integrated into the European organization.

The evolutionary factors, working together with some other dynamic process

will give, sooner or later, this result", said the Spanish Minister

of Foreign Affairs in an interview he held, last July, for the "ABC",

one of the most important newspapers in the Country.

One or two days before, the Minister of Industry, during his speech

at the inauguration ceremony of the VII Feria Internacional de Muestras,

(a display of international industry achievements) at Bilbao, the

capital of Basques, had said: "The economic policy is to join Europe and

this is an objective which can never be confused.  We want to become a

member of the E.E.C., with the same rights and the same duties they

have and without neglecting our special characteristics, because this

community wants each country with its own peculiarities".  Both of them,

two top members of Spanish Government, had outlined the purposes of our

foreign policy beyond any kind of hesitation.

Spain is a part of Europe and she has a role to be played as a member

of this society.  I am sure we will do it.

The close family relationship between the Ibero-American countries

and Spain, is underlined not only by the possession of a common culture

and language, but in fact, by the continuous presence of thousands of their

sons in Spanish universities, where many of them receive their higher

education and broaden their training.

16`,
        traduccion: `CAPÍTULO X. - POLÍTICA EXTERIOR

«Europa necesita una España unida, estable y próspera, por lo que en el futuro puedo verla plenamente integrada en la organización europea. Los factores evolutivos, trabajando juntos con algún otro proceso dinámico, darán, tarde o temprano, este resultado», dijo el ministro español de Asuntos Exteriores en una entrevista que celebró el pasado julio para el «ABC», uno de los periódicos más importantes del país.

Uno o dos días antes, el ministro de Industria, durante su discurso en la ceremonia inaugural de la VII Feria Internacional de Muestras, (una muestra de logros industriales internacionales) en Bilbao, la capital de los Vascos, había dicho: «La política económica consiste en incorporarse a Europa y este es un objetivo que nunca puede confundirse. Queremos convertirnos en miembro de la C.E.E., con los mismos derechos y los mismos deberes que ellos tienen y sin descuidar nuestras características especiales, porque esta comunidad quiere a cada país con sus propias peculiaridades». Ambos, dos altos miembros del Gobierno español, habían expuesto los propósitos de nuestra política exterior sin dejar lugar a vacilación alguna.

España es parte de Europa y tiene un papel que desempeñar como miembro de esta sociedad. Estoy seguro de que lo haremos.

La estrecha relación familiar entre los países iberoamericanos y España queda subrayada no solo por la posesión de una cultura común y una lengua común, sino, de hecho, por la presencia continua de miles de sus hijos en universidades españolas, donde muchos de ellos reciben su enseñanza superior y amplían su formación.

16`,
        notas: [
          { texto: 'Lectura del original. «Basques» y «Country» son formas visibles del original; «la capital de los Vascos» conserva literalmente la formulación.' },
          { texto: 'Nota editorial. La fecha y la identidad de los ministros citados requieren investigación externa; el texto permite inferir una fecha anterior a la adhesión de España a la CEE en 1986, no una fecha exacta.' },
          { texto: 'Decisión de traducción. «Our foreign policy» se traduce literalmente como «nuestra política exterior».' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-33.jpg',
        alt: 'Conclusión del ensayo, con la referencia al lema Plus Ultra',
        titulo: 'Conclusión',
        referencia: 'Página 33 de 33 del expediente',
        original: `CONCLUSION

Spain is a land with a long history open to all, and wishing to

become fully a part of Europe.  Spain maintains her friendship with

all nations and tightens the bonds of brotherhood which link her,

in a special way, with the Spanish speaking nations.  After the

American discovery, after the first circumnavigation of the world,

Spain won the legend she proudly shows in her coat of arms: "PLUS ULTRA".

And she knows, too, that "Noblesse oblige."

17`,
        traduccion: `CONCLUSIÓN

España es una tierra con una larga historia, abierta a todos y deseosa de llegar a ser plenamente parte de Europa. España mantiene su amistad con todas las naciones y estrecha los lazos de hermandad que la unen, de una manera especial, con las naciones de habla española. Después del descubrimiento americano, después de la primera circunnavegación del mundo, España obtuvo el lema que muestra orgullosamente en su escudo de armas: «PLUS ULTRA».

Y sabe también que «Noblesse oblige».

17`,
        notas: [
          { texto: 'Decisión de traducción. El original usa «legend»; se traduce como «lema» por referencia a «PLUS ULTRA» en el escudo de armas.' },
          {
            texto: 'Dato cultural. «Plus Ultra» significa «más allá». Fue el lema personal de Carlos V y aparece unido a las columnas de Hércules. Patrimonio Nacional atribuye la creación del emblema en 1517 a Luigi Marliani.',
            fuenteTexto: 'Patrimonio Nacional',
            fuenteUrl: 'https://www.patrimonionacional.es/real-armeria/silla-de-montar-de-acero-de-carlos-v',
          },
          {
            texto: 'Dato cultural. El lema sigue formando parte del escudo oficial de España: la ley de 1981 coloca «Plus» y «Ultra» en las cintas que rodean sus dos columnas.',
            fuenteTexto: 'BOE, Ley 33/1981',
            fuenteUrl: 'https://www.boe.es/eli/es/l/1981/10/05/33/con',
          },
          {
            texto: 'Dato cultural. «Noblesse oblige» significa literalmente «la nobleza obliga»: es la idea de que un rango o una posición privilegiada conlleva la obligación de actuar con honor, generosidad y responsabilidad.',
            fuenteTexto: 'Merriam-Webster Dictionary',
            fuenteUrl: 'https://www.merriam-webster.com/dictionary/noblesse%20oblige',
          },
        ],
      },
    ],
  },
  {
    slug: 'carta-bienvenida-1972',
    titulo: 'Carta de bienvenida del Naval Command College',
    pieza: 'Carta de bienvenida de 1972',
    fecha: '30 de junio de 1972',
    fechaOrden: '1972-06-30',
    resumen: 'Carta oficial del director del Naval Command College dando la bienvenida a Tomás como miembro de la promoción 1973 y explicando los preparativos para la mudanza familiar a Newport.',
    tipoDocumento: TIPO_CORRESPONDENCIA,
    contexto: 'Primer documento cronológico del expediente: la carta con la que el Naval Command College recibe formalmente a Tomás como alumno de la promoción 1972-73, firmada por su director T. H. Nugent Jr. Marca el punto de partida de la relación de Tomás con Newport y de la extensa red de compañeros que mantendría por correspondencia durante casi una década.',
    personas: ['Tomás Gómez Arroyo', 'T. H. Nugent Jr.', 'K. L. Wright'],
    credito: CREDITO,
    derechos: DERECHOS,
    fechaConsulta: FECHA_CONSULTA,
    fuenteTexto: FUENTE_TEXTO,
    paginas: [
      {
        src: '/fotos/archivo/pagina-07.jpg',
        alt: 'Primera página de la carta de bienvenida del director del Naval Command College a Tomás',
        titulo: 'Primera hoja',
        referencia: 'Página 7 de 33 del expediente',
        original: `30 JUN 1972

Dear Commander Arroyo,

     It is my pleasure as Director of the Naval Command College
to welcome you as a member of the NCC Class of 1973. Enclosed
is a General Information pamphlet concerning the College that
I hope will prove to be useful in planning for your visit to
the United States. A copy of the Curriculum and several
brochures will be sent to you when they become available. They
will be more specific and will be helpful in acquainting you
with the nature of the studies you will pursue while you are
here at NCC.

     We hope that circumstances will permit your family to be
with you this coming year in Newport. Our experience has
shown that officers who have their families with them have a
much more enjoyable visit in the United States. We realize
that housing will be a major concern to you and your bring
your family. No unusual difficulty is anticipated in obtaining
permanent housing for you, although temporary housing may have
to be utilized until the popular Newport summer season is over
about 4 September. Since temporary housing is expensive and
in short supply, you might wish to consider having your family
join you shortly after classes begin. In any event, please do
not let housing arrangements discourage you from bringing your
family as we look forward to having them with us.

     Commander K. L. Wright, a member of my staff, has been
assigned as your Military Sponsor. He will soon write to you
and will be prepared to aid you in all possible ways, both in
preparing for your trip and after your arrival in Newport.
Please let him know of any problems or unanswered questions,
no matter how small they may seem.`,
        traduccion: `30 JUN 1972

Estimado comandante Arroyo:

     Me complace, como Director del Naval Command College, darle la bienvenida
como miembro de la promoción NCC de 1973. Se adjunta un folleto de Información
General sobre el College que espero resulte útil para planificar su visita a los
Estados Unidos. Le serán enviados un ejemplar del plan de estudios y varios
folletos cuando estén disponibles. Serán más específicos y le ayudarán a
familiarizarse con la naturaleza de los estudios que realizará mientras esté
aquí, en el NCC.

     Esperamos que las circunstancias permitan a su familia estar con usted el
próximo año en Newport. Nuestra experiencia ha demostrado que los oficiales que
tienen a sus familias consigo disfrutan mucho más de su estancia en los Estados
Unidos. Somos conscientes de que el alojamiento será una preocupación importante
para usted y para que traiga a su familia. No se prevé dificultad inusual para
conseguir alojamiento permanente, aunque quizá haya que utilizar alojamiento
temporal hasta que termine la concurrida temporada de verano de Newport, hacia
el 4 de septiembre. Dado que es caro y escaso, quizá desee que su familia se
reúna con usted poco después de comenzar las clases. En cualquier caso, no
permita que el alojamiento lo disuada de traer a su familia, pues esperamos con ilusión tenerlos con nosotros.

     El comandante K. L. Wright ha sido designado como su patrocinador militar.
Le escribirá pronto y estará preparado para ayudarle antes del viaje y tras su
llegada a Newport. Hágale saber cualquier problema o pregunta que haya quedado sin respuesta, por pequeño que pueda parecer.`,
        notas: [
          { texto: 'Lectura del original. La frase sobre alojamiento es defectuosa en el original.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-08.jpg',
        alt: 'Segunda página de la carta, firmada por el capitán T. H. Nugent Jr.',
        titulo: 'Segunda hoja',
        referencia: 'Página 8 de 33 del expediente',
        original: `I am looking forward to welcoming you to Newport in person. In
the meantime, please feel free to write to me or your sponsor.

                         Sincerely,
                         T. H. NUGENT, JR.
                         Captain, U. S. Navy
                         Director, Naval Command College

Enclosure

Commander Tomas Gomez ARROYO, Spanish Navy
c/o Chief, Navy Section
Joint U. S. Military Group -
Military Assistance Advisory Group
APO New York 09285`,
        traduccion: `Espero darle personalmente la bienvenida a Newport. Mientras tanto, no
dude en escribirme a mí o a su patrocinador.

                         Atentamente,
                         T. H. NUGENT, JR.
                         Capitán, Armada de los EE. UU.
                         Director, Naval Command College

Adjunto

Comandante Tomas Gomez ARROYO, Armada Española
a/c del Jefe de la Sección Naval
Grupo Militar Conjunto de los EE. UU. -
Grupo Asesor de Asistencia Militar
APO New York 09285`,
        notas: [
          { texto: 'Continuidad entre páginas. El número impreso 2 confirma continuidad.' },
        ],
      },
    ],
  },
  {
    slug: 'clase-1972-1973',
    titulo: 'Cuadros de la promoción del Naval Command College',
    pieza: 'Dos cuadros conmemorativos de la promoción 1972-1973',
    fecha: '1972-1973',
    fechaOrden: '1973-06-01',
    resumen: 'Dos cuadros conmemorativos de la promoción del Naval Command College 1972-1973, con la fotografía y el nombre de cada oficial extranjero de la clase, entre ellos «CAPT Tomas Gomez ARROYO, Spanish Navy».',
    tipoDocumento: 'Cuadro conmemorativo de promoción, U.S. Naval War College',
    contexto: 'La misma promoción 1972-1973 documentada por la carta de bienvenida y la evaluación de graduación de este expediente. Estos dos cuadros — uno con mapamundi y otro solo con los retratos — reúnen a los 32 oficiales extranjeros del curso, con su rango, apellido y armada de origen. Confirman visualmente la presencia de Tomás en la promoción, con retrato incluido.',
    personas: ['Tomás Gómez Arroyo'],
    credito: CREDITO,
    derechos: DERECHOS,
    fechaConsulta: FECHA_CONSULTA,
    fuenteTexto: FUENTE_TEXTO,
    paginas: [
      {
        src: '/fotos/archivo/pagina-34.jpg',
        alt: 'Cuadro conmemorativo con mapamundi de la promoción 1972-1973 del Naval Command College',
        titulo: 'Cuadro con mapamundi',
        referencia: 'Página adicional del expediente (fuera de la numeración de 33 páginas del ensayo y la correspondencia)',
        original: `THE UNITED STATES NAVAL WAR COLLEGE
CLASS OF NAVAL COMMAND COLLEGE 1972 – 1973

CDR Songsit Kittipeerachol, Royal Thai Navy
CDR Raif Naldemir, Turkish Navy
CAPT Vien Bui Cuu, Vietnamese Navy
CDR Robert E. Klee, U.S. Navy
CAPT Mauricio Malle Vicini, Venezuelan Navy
CDR Carl-Gustaf Hammarskjold, Royal Swedish Navy
CAPT Tomas Gomez Arroyo, Spanish Navy
CDR E.M.C. Walker, Royal Navy
CAPT Vasco A.M. Rodrigues, Portuguese Navy
CAPT Reynaldo M. Alcarez, Philippine Navy
CDR Oscar Anderson Noriega, Peruvian Navy
CDR Fasahat H. Syed, Pakistan Navy
CDR Birger Dalen, Royal Norwegian Navy
CDR Raheem A.O. Adegbite, Nigerian Navy
Jan Catharinus Schuller, Royal Netherlands Navy
CAPT Vidal Preciado Ruiz, Mexican Navy
CDR Nicholas E. Peterson, Royal Malaysian Navy
CAPT Kim Tae Yong, Republic of Korea Navy
CAPT Hiroshi Nagata, Japanese Maritime Self-Defense Force
CDR Aldo Facco, Italian Navy
CDR Ahmad A.P-Ghajar, Imperial Iranian Navy
CDR Hector Mario Vergnaud, Argentine Navy
CDR Fred John Mifflin, Canadian Armed Forces
CAPT Liu Chih-Chung, Chinese Navy
CDR (s.g.) Sven Egil Thiede, Royal Danish Navy
CDR Felix Marte Espinosa, Dominican Navy
CDR Constantine Zografakis, Hellenic Navy
LCOL Sukarjono, Indonesian Navy
CDR Ian W. Knox, Royal Australian Navy
CDR Domingos P.C.B. Ferreira, Brazilian Navy
CDR Kifle Worku, Imperial Ethiopian Navy
CDR Alfred Werner, Federal German Navy`,
        traduccion: `EL COLEGIO DE GUERRA NAVAL DE LOS ESTADOS UNIDOS
PROMOCIÓN DEL NAVAL COMMAND COLLEGE 1972 – 1973

Cte. Songsit Kittipeerachol, Armada Real Tailandesa
Cte. Raif Naldemir, Armada Turca
Cap. Vien Bui Cuu, Armada de Vietnam
Cte. Robert E. Klee, Armada de los EE. UU.
Cap. Mauricio Malle Vicini, Armada de Venezuela
Cte. Carl-Gustaf Hammarskjold, Armada Real Sueca
Cap. Tomás Gómez Arroyo, Armada Española
Cte. E.M.C. Walker, Marina Real Británica
Cap. Vasco A.M. Rodrigues, Armada Portuguesa
Cap. Reynaldo M. Alcarez, Armada Filipina
Cte. Oscar Anderson Noriega, Armada Peruana
Cte. Fasahat H. Syed, Armada de Pakistán
Cte. Birger Dalen, Armada Real Noruega
Cte. Raheem A.O. Adegbite, Armada Nigeriana
Jan Catharinus Schuller, Armada Real de los Países Bajos
Cap. Vidal Preciado Ruiz, Armada Mexicana
Cte. Nicholas E. Peterson, Armada Real Malasia
Cap. Kim Tae Yong, Armada de la República de Corea
Cap. Hiroshi Nagata, Fuerza Marítima de Autodefensa de Japón
Cte. Aldo Facco, Armada Italiana
Cte. Ahmad A.P-Ghajar, Armada Imperial Iraní
Cte. Hector Mario Vergnaud, Armada Argentina
Cte. Fred John Mifflin, Fuerzas Armadas Canadienses
Cap. Liu Chih-Chung, Armada China
Cte. (s.g.) Sven Egil Thiede, Armada Real Danesa
Cte. Felix Marte Espinosa, Armada Dominicana
Cte. Constantine Zografakis, Armada Helénica
Tte. Cnel. Sukarjono, Armada Indonesia
Cte. Ian W. Knox, Armada Real Australiana
Cte. Domingos P.C.B. Ferreira, Armada Brasileña
Cte. Kifle Worku, Armada Imperial Etíope
Cte. Alfred Werner, Armada Federal Alemana`,
        notas: [
          { texto: 'El original imprime los nombres sin tildes, como es habitual en documentación estadounidense de la época: «Tomas Gomez Arroyo». Se conservan así en la lectura del original y se restituyen en la traducción.' },
          { texto: 'Orden de lectura: de izquierda a derecha y de arriba abajo según la disposición de las fichas alrededor del mapamundi, no es un orden alfabético ni jerárquico declarado por la fuente.' },
        ],
      },
      {
        src: '/fotos/archivo/pagina-35.jpg',
        alt: 'Cuadro de retratos individuales de la promoción 1972-1973 del Naval Command College, con Tomás Gómez Arroyo en la segunda fila',
        titulo: 'Cuadro de retratos',
        referencia: 'Página adicional del expediente (fuera de la numeración de 33 páginas del ensayo y la correspondencia)',
        original: `NAVAL WAR COLLEGE          NAVAL COMMAND COLLEGE          1972 – 1973

CAPT LIU, Chih-Chung, Chinese Navy
CAPT Vasco Antonio Martins RODRIGUES, Portuguese Navy
CAPT Vidal PRECIADO Ruiz, Mexican Navy
CAPT Aldo FACCO, Italian Navy
CAPT Reynaldo M. ALCAREZ, Philippine Navy
CAPT KIM Tae Yong, Republic of Korea Navy
CAPT Hiroshi NAGATA, Japanese Maritime Self-Defense Force
CAPT VIEN Bui Cuu, Vietnamese Navy

CAPT Tomas Gomez ARROYO, Spanish Navy
CAPT Mauricio MALLE Vicini, Venezuelan Navy
CAPT Ahmad Ali PARVARESH-GHAJAR, Imperial Iranian Navy
CAPT Alfred WERNER, Federal German Navy
CDR E.M.C. WALKER, Royal Navy
CDR Hector Mario VERGNAUD, Argentine Navy
CDR Birger DALEN, Royal Norwegian Navy
CDR Robert E. KLEE, United States Navy

CDR Ian W. KNOX, Royal Australian Navy
CDR (s.g.) Sven Egil THIEDE, Royal Danish Navy
CDR Constantine ZOGRAFAKIS, Hellenic Navy
CDR Fred John MIFFLIN, Canadian Armed Forces
LCOL SUKARJONO, Indonesian Navy
CDR Oscar ANDERSON Noriega, Peruvian Navy
CDR Fasahat H. SYED, Pakistan Navy
CDR Carl-Gustaf HAMMARSKJOLD, Royal Swedish Navy

CDR Domingos Pacifico Castello Branco FERREIRA, Brazilian Navy
CDR KIFLE Worku, Imperial Ethiopian Navy
CDR Raif NALDEMIR, Turkish Navy
CDR SONGSIT Kittipeerachol, Royal Thai Navy
CDR Jan Catharinus SCHULLER, Royal Netherlands Navy
CDR Felix MARTE Espinosa, Dominican Navy
CDR Nicholas E. PETERSON, Royal Malaysian Navy
CDR Raheem Adisa Oladapo ADEGBITE, Nigerian Navy`,
        traduccion: `COLEGIO DE GUERRA NAVAL          NAVAL COMMAND COLLEGE          1972 – 1973

Cap. LIU, Chih-Chung, Armada China
Cap. Vasco Antonio Martins RODRIGUES, Armada Portuguesa
Cap. Vidal PRECIADO Ruiz, Armada Mexicana
Cap. Aldo FACCO, Armada Italiana
Cap. Reynaldo M. ALCAREZ, Armada Filipina
Cap. KIM Tae Yong, Armada de la República de Corea
Cap. Hiroshi NAGATA, Fuerza Marítima de Autodefensa de Japón
Cap. VIEN Bui Cuu, Armada de Vietnam

Cap. Tomás Gómez Arroyo, Armada Española
Cap. Mauricio MALLE Vicini, Armada de Venezuela
Cap. Ahmad Ali PARVARESH-GHAJAR, Armada Imperial Iraní
Cap. Alfred WERNER, Armada Federal Alemana
Cte. E.M.C. WALKER, Marina Real Británica
Cte. Hector Mario VERGNAUD, Armada Argentina
Cte. Birger DALEN, Armada Real Noruega
Cte. Robert E. KLEE, Armada de los Estados Unidos

Cte. Ian W. KNOX, Armada Real Australiana
Cte. (s.g.) Sven Egil THIEDE, Armada Real Danesa
Cte. Constantine ZOGRAFAKIS, Armada Helénica
Cte. Fred John MIFFLIN, Fuerzas Armadas Canadienses
Tte. Cnel. SUKARJONO, Armada Indonesia
Cte. Oscar ANDERSON Noriega, Armada Peruana
Cte. Fasahat H. SYED, Armada de Pakistán
Cte. Carl-Gustaf HAMMARSKJOLD, Armada Real Sueca

Cte. Domingos Pacifico Castello Branco FERREIRA, Armada Brasileña
Cte. KIFLE Worku, Armada Imperial Etíope
Cte. Raif NALDEMIR, Armada Turca
Cte. SONGSIT Kittipeerachol, Armada Real Tailandesa
Cte. Jan Catharinus SCHULLER, Armada Real de los Países Bajos
Cte. Felix MARTE Espinosa, Armada Dominicana
Cte. Nicholas E. PETERSON, Armada Real Malasia
Cte. Raheem Adisa Oladapo ADEGBITE, Armada Nigeriana`,
        notas: [
          { texto: 'Tomás aparece en la segunda fila, primero por la izquierda: «CAPT Tomas Gomez ARROYO, Spanish Navy».' },
          { texto: 'Se transcriben los ocho grupos de ocho tal como están dispuestos en el cuadro, de arriba a abajo y de izquierda a derecha.' },
        ],
      },
    ],
  },
  {
    slug: 'evaluacion-graduacion-1973',
    titulo: 'Evaluación de graduación del Naval Command College',
    pieza: 'Evaluación académica de 1973',
    fecha: '30 de junio / 5 de julio de 1973',
    fechaOrden: '1973-07-05',
    resumen: 'Evaluación oficial de graduación de Tomás en el Naval Command College, firmada por el vicealmirante Stansfield Turner y dirigida al almirante Pita da Veiga, jefe del Estado Mayor de la Armada.',
    tipoDocumento: TIPO_CORRESPONDENCIA,
    contexto: 'Informe de fin de curso enviado a Madrid describiendo el desempeño académico y social de Tomás y de su esposa Vivi durante el año 1972-73 en Newport. Lo firma Stansfield Turner, entonces presidente del Naval War College y más tarde director de la Inteligencia Central de los Estados Unidos (1977-1981), aunque el propio documento identifica a K. L. Wright Jr. como redactor material.',
    personas: ['Tomás Gómez Arroyo', 'Vivi', 'Stansfield Turner', 'K. L. Wright Jr.', 'Gabriel Pita da Veiga Sanz'],
    credito: CREDITO,
    derechos: DERECHOS,
    fechaConsulta: FECHA_CONSULTA,
    fuenteTexto: FUENTE_TEXTO,
    paginas: [
      {
        src: '/fotos/archivo/pagina-05.jpg',
        alt: 'Primera página de la evaluación de graduación de Tomás en el Naval Command College',
        titulo: 'Primera hoja',
        referencia: 'Página 5 de 33 del expediente',
        original: `Dear Admiral Pita da Veiga,

     The students of the Naval Command College (NCC), Class of
1973, graduated from the Naval War College on Saturday,
30 June 1973. I get great pleasure in informing you of
Captain Tomas Arroyo's achievements while participating in the
academic activities throughout this past year. I am certain
that this year was significantly enriched by a close professional
and personal association with officers from the 31 other Free
World Navies comprising this year's NCC class and the remaining
student body of the Naval War College.

     The beginning of the curriculum of the Naval Command College
this year provided the students with the opportunity to study
the history of sea power and become familiar with U.S. govern-
mental organization, institutions and practices. This was
followed by a separate management orientation course and a
period devoted to international relations. In addition, the
Naval Command College was integrated with the U.S. senior course
during a major portion of the Management Study given during the
second trimester. The contribution of the Naval Command College
students was impressive during this period. After the completion
of the integrated Management Study, the students conducted an in-
depth study of naval operations and applications. A detailed,
two-sided war game was the conclusion to these programs. In
early part of the last trimester, the NCC students joined with
all their U.S. counterparts in committee development of regional
strategy papers. Upon completion of these tasks, the Naval
Command College students participated with the other colleges
and high ranking military and civilian leaders in the Current
Strategy Forum (CSF) which has replaced the Global Strategy
Discussions (GSD) held in previous years.

     Concurrently, during their stay at the War College, the
students traveled extensively around the United States on Field
Study Trips. This allowed them a unique opportunity to become
familiar with U.S. institutions, industry, and military
installations while exposing them to various areas of the
diversified American culture.`,
        traduccion: `Estimado almirante Pita da Veiga:

Los alumnos del Naval Command College (NCC), promoción de 1973, se graduaron en el Naval War College el sábado 30 de junio de 1973. Me complace enormemente informarle de los logros del capitán Tomas Arroyo durante su participación en las actividades académicas a lo largo de este último año. Estoy seguro de que su año se vio considerablemente enriquecido por una estrecha relación profesional y personal con oficiales de las otras 31 marinas del Mundo Libre que integraban la promoción NCC de este año, así como con el resto del alumnado del Naval War College.

El comienzo del plan de estudios del Naval Command College de este año brindó a los alumnos la oportunidad de estudiar la historia del poder naval y familiarizarse con la organización, las instituciones y las prácticas del Gobierno de los EE. UU. A ello siguieron un curso independiente de orientación sobre administración y un período dedicado a las relaciones internacionales. Además, durante una parte importante del Estudio de Administración impartido en el segundo trimestre, el Naval Command College se integró con el curso superior estadounidense. La aportación de los alumnos del Naval Command College fue notable durante este período. Una vez concluido el Estudio de Administración integrado, los alumnos realizaron un estudio profundo de las operaciones navales y sus aplicaciones. Estos programas culminaron con un detallado juego de guerra entre dos bandos. Al comienzo del último trimestre, los alumnos del NCC se unieron a todos sus homólogos estadounidenses para elaborar en comité trabajos de estrategia regional. Concluidas estas tareas, los alumnos del Naval Command College participaron, junto con los demás colleges y con altos dirigentes militares y civiles, en el Current Strategy Forum (CSF), que sustituyó a las Global Strategy Discussions (GSD) celebradas en años anteriores.

Paralelamente, durante su estancia en el War College, los alumnos viajaron extensamente por los Estados Unidos en viajes de estudio. Esto les brindó una oportunidad única de familiarizarse con las instituciones, la industria y las instalaciones militares estadounidenses, al tiempo que conocían distintas facetas de la diversa cultura norteamericana.`,
        notas: [
          { texto: 'Lectura del original. Anotación: [lectura dudosa: Ser 1846 / 30 Jul 73].' },
          { texto: 'Lectura del original. Se conservan las irregularidades del original.' },
          {
            texto: 'Contexto institucional. El Current Strategy Forum citado en la evaluación tiene su origen en unas mesas redondas celebradas por primera vez en el Naval War College en mayo de 1949. Reunía a invitados civiles y militares para discutir la estrategia futura con los oficiales alumnos.',
            fuenteTexto: 'U.S. Naval War College',
            fuenteUrl: 'https://usnwc.edu/News-and-Events/Conferences-and-Symposia/Current-Strategy-Forum',
          },
        ],
      },
      {
        src: '/fotos/archivo/pagina-06.jpg',
        alt: 'Segunda página de la evaluación, con la firma de Stansfield Turner',
        titulo: 'Segunda hoja',
        referencia: 'Página 6 de 33 del expediente',
        original: `Captain Arroyo has had a distinguished year at the Naval War
College as a result of his excellent professional and personal contri-
bution. Early in the academic year, the presentation of his country
essay, both in writing and verbally, indicated the high level of
achievement which he would attain throughout the remainder of his
year at the Naval War College. His country's view was perceptive and
reflected the considerable insight he possessed of his country and
the entire European and African area. The papers he prepared during
the Management Study clearly demonstrated the sound understanding he
has acquired in this important subject. In the third trimester of
the year, Captain Arroyo was the Commander of a mine task force in a
two-sided war game. His performance was superb, greatly enhanced game
play, and added, in a substantial way, to the effectiveness of the
entire undertaking. During the Regional Strategy Study and Navy
Mission Area Paper phase in this final trimester, his participation
in a committee composed of U. S. and international students contributed
in an important way to the completion of an exceptionally concise and
expert area study paper. Later, Captain Arroyo contributed materially
to the Current Strategy Forum which marked the final phase of the
year. Throughout the year, Captain Arroyo impressed all with the he
came in contact as a very experienced, professional and extremely
friendly naval officer who could be relied on to contribute mature,
expert ideas and conclusions to all undertakings. Captain Arroyo
always reflected considerable credit on himself, his Navy and country.

     Captain Arroyo and his gracious wife Vivi participated extensively
in the social functions, both official and unofficial, connected with
the College. As both hosts and guests, they were exceptional
ambassadors of Spain. Upon their departure from the College, they left
a number of close friends in both the military and civilian communities.

     It has been a distinct privilege to have had Captain Arroyo as a
student at the Naval Command College this year. I am certain that
his experience has been most profitable, both academically and
professionally, and should be of great value to both our countries in
the future. He is a highly motivated and professionally qualified
officer of whom we at the Naval War College are extremely proud to
have joining the distinguished ranks of our international alumni.

                         Sincerely,
                         STANSFIELD TURNER
                         Vice Admiral, U. S. Navy

Admiral Gabriel PITA da VEIGA Sanz, SN
Chief of the Naval General Staff
Navy Ministry
Madrid, Spain

P.S. I am attaching a summary of the changes to NCC this year and next
about which I have written previously.

WRITTEN BY: CDR K. L. WRIGHT, JR. #54:cba) 5 July 1973`,
        traduccion: `El capitán Arroyo ha tenido un año distinguido en el Naval War College gracias a su excelente contribución profesional y personal. Al comienzo del curso académico, la presentación de su ensayo sobre su país, tanto por escrito como oralmente, indicó el alto nivel de rendimiento que alcanzaría durante el resto de su año en el Naval War College. Su exposición del país fue perspicaz y reflejó el considerable conocimiento que poseía tanto de su país como de toda el área europea y africana. Los trabajos que preparó durante el Estudio de Administración demostraron claramente la sólida comprensión que adquirió de esta importante materia. En el tercer trimestre, el capitán Arroyo fue comandante de una fuerza de tarea de guerra de minas en un juego de guerra entre dos bandos. Su actuación fue magnífica, mejoró enormemente el desarrollo del juego y contribuyó de manera sustancial a la eficacia de todo el ejercicio. Durante el Estudio de Estrategia Regional y la fase del trabajo sobre un área de misión naval de este último trimestre, su participación en un comité integrado por alumnos estadounidenses e internacionales contribuyó de manera importante a concluir un trabajo de estudio regional excepcionalmente conciso y experto. Más adelante, el capitán Arroyo realizó una aportación sustancial al Current Strategy Forum, que marcó la fase final del curso. A lo largo del año, el capitán Arroyo impresionó a todos aquellos con quienes entró en contacto como un oficial naval muy experimentado, profesional y sumamente cordial, en quien podía confiarse para aportar ideas y conclusiones maduras y expertas a todas las tareas. El capitán Arroyo siempre dejó en muy buen lugar a su persona, a su Armada y a su país.

El capitán Arroyo y su encantadora esposa Vivi participaron ampliamente en las actividades sociales, tanto oficiales como extraoficiales, relacionadas con el College. Tanto como anfitriones como en calidad de invitados, fueron embajadores excepcionales de España. Al marcharse del College, dejaron numerosos amigos íntimos tanto en la comunidad militar como en la civil.

Ha sido un privilegio especial haber contado este año con el capitán Arroyo como alumno del Naval Command College. Estoy seguro de que su experiencia ha sido sumamente provechosa, tanto académica como profesionalmente, y de que tendrá gran valor para nuestros dos países en el futuro. Es un oficial muy motivado y profesionalmente cualificado, y en el Naval War College nos sentimos sumamente orgullosos de que pase a formar parte de las distinguidas filas de nuestros antiguos alumnos internacionales.

Atentamente,

[bloque de firma mecanografiado; no se aprecia firma autógrafa]
STANSFIELD TURNER
Vicealmirante, Armada de los EE. UU.

Almirante Gabriel PITA da VEIGA Sanz, Armada Española
Jefe del Estado Mayor de la Armada
Ministerio de Marina
Madrid, España

P. D. Adjunto un resumen de los cambios introducidos en el NCC este año y el próximo, sobre los que ya le he escrito anteriormente.

REDACTADO POR: CDR K. L. WRIGHT, JR. #54:cba) 5 de julio de 1973`,
        notas: [
          { texto: 'Descripción material. Stansfield Turner firma; K. L. Wright Jr. figura como redactor.' },
          { texto: 'Descripción material. No se reproduce firma manuscrita no visible.' },
          {
            texto: 'Dato biográfico. Stansfield Turner presidía el Naval War College cuando Tomás terminó el curso. Años después fue Director de la Inteligencia Central de los Estados Unidos entre 1977 y 1981. En este ejemplar aparece su bloque de firma mecanografiado, pero el propio documento identifica a K. L. Wright Jr. como redactor material.',
            fuenteTexto: 'U.S. Naval War College',
            fuenteUrl: 'https://usnwc.edu/News-and-Events/News/Former-Naval-War-College-president-Admiral-Stansfield-Turner-passes-away',
          },
        ],
      },
    ],
  },
  {
    slug: 'carta-cartagena-1974',
    titulo: 'Carta desde Cartagena',
    pieza: 'Carta desde Cartagena de 1974',
    fecha: 'Octubre de 1974',
    fechaOrden: '1974-10-01',
    resumen: 'Carta de vuelta a España: tras el curso en Newport, Tomás relata su destino en Cádiz, otro curso de alto mando en Madrid y su nuevo puesto como comodoro de la 21.ª Escuadrilla de Destructores en Cartagena.',
    tipoDocumento: TIPO_CORRESPONDENCIA,
    contexto: 'Primera carta que Tomás envía a sus excompañeros de promoción tras regresar a España, ya con nuevo destino operativo en la Armada. Muestra la reincorporación de la familia a la vida española y el mantenimiento del vínculo con la red del Naval Command College.',
    personas: ['Tomás Gómez Arroyo', 'Vivi', 'Antonio', 'Miguel'],
    credito: CREDITO,
    derechos: DERECHOS,
    fechaConsulta: FECHA_CONSULTA,
    fuenteTexto: FUENTE_TEXTO,
    paginas: [
      {
        src: '/fotos/archivo/pagina-09.jpg',
        alt: 'Carta de Tomás desde Cartagena describiendo su nuevo destino como comodoro',
        titulo: 'Carta completa',
        referencia: 'Página 9 de 33 del expediente',
        original: `Jefe de la 21 Escuadrilla
de
Destructores
PARTICULAR

Cartagena, October, 1.974

    Dear Friends,

         As it was previously decided, my first appointment
    after the Naval Command Course was the Executive of the V.A. in the
    Navy Yard of the Cádiz Naval Zone, in which I stayed until last May.
    In spite of that, from January to April, I had to attend another High
    Command Course, this time in the Spanish Naval War College, Madrid.

         In the meanwhile, Vivi, Antonio and Miguel were at
    Cartagena, since the school they attend, -(the boys only, of course)-,
    before going to the U.S., kept their places in regarding the 73 - 74
    school year. As a matter of fact, they worked very hard and successfully.
    Antonio is now in his first Electronic Course, while Miguel is doing
    his best in the last year of the High School. Both of them are living
    here, in our own home, but they miss America and their friends...

         From May, the 3rd, I am the proud Commodore of the
    21st DD's Squadron, expecting to be in the same role for a 18 month
    period. Our home port is Cartagena, where we should be very happy in
    receiving our good friends... until the next November, '75. After that
    my future is completely unpredictable...

         Very often we talk about Newport, the Naval War
    College and the people we met there, while projecting the movies and
    slides we took along our stay in the U.S. It is one of our favorite
    hobbies.

         The best to all of you.
                             Sincerely,
                             [firma manuscrita]
                             -Tomás G. Arroyo-
                             N.C.C. Class of 1.973
                             [manuscrito: Class of 73]`,
        traduccion: `Cartagena, octubre de 1974

    Queridos amigos:

         Tal como se había decidido previamente, mi primer destino después del
    Naval Command Course fue el de Ejecutivo de la V.A. en el Arsenal de la Zona
    Naval de Cádiz, donde permanecí hasta el pasado mayo. A pesar de ello, de enero
    a abril tuve que asistir a otro Curso de Alto Mando, esta vez en el Colegio de
    Guerra Naval Español, Madrid.

         Mientras tanto, Vivi, Antonio y Miguel estaban en Cartagena, pues el
    colegio al que asisten -[sólo los chicos, por supuesto]- les guardó las plazas
    del curso 73-74 antes de ir a los EE. UU. Trabajaron muy duro y con éxito.
    Antonio está ahora en su primer curso de Electrónica, mientras Miguel se
    esfuerza al máximo en el último año de secundaria. Ambos viven aquí, en nuestra
    propia casa, pero echan de menos América y a sus amigos...

         Desde el 3 de mayo soy el orgulloso comodoro de la 21.ª Escuadrilla de
    Destructores, y espero continuar en el mismo puesto durante 18 meses. Nuestro puerto base es Cartagena, donde
    estaremos felices de recibir a nuestros buenos amigos... hasta el próximo
    noviembre de 1975. Después de eso mi futuro es completamente impredecible...

         Muy a menudo hablamos de Newport, del Naval War College y de quienes
    conocimos allí, proyectando las películas y diapositivas que tomamos durante
    nuestra estancia en los EE. UU. Es una de nuestras aficiones favoritas.

         Lo mejor para todos vosotros.
                             Atentamente,
                             [firma manuscrita]`,
        notas: [
          { texto: 'Nota editorial. V.A. no se desarrolla.' },
          { texto: 'Lectura del original. Se conservan irregularidades del inglés.' },
          {
            texto: 'Dato histórico. Cartagena era mucho más que el lugar desde donde se envió la carta. Su Arsenal se convirtió en cabecera del departamento marítimo de Levante en el siglo XVIII y sigue siendo la base de apoyo logístico de la Armada para el Mediterráneo español.',
            fuenteTexto: 'Armada Española, Arsenal de Cartagena',
            fuenteUrl: 'https://armada.defensa.gob.es/ArmadaPortal/page/Portal/ArmadaEspannola/conocenosorganizacion/prefLang-es/04Apoyofuerza--02jal--05Arsenales--03arsenalcartagena',
          },
        ],
      },
    ],
  },
  {
    slug: 'carta-santiago-enero-1976',
    titulo: 'Carta de Año Nuevo desde Santiago de Chile',
    pieza: 'Carta al boletín de 1976',
    fecha: '14 de enero de 1976',
    fechaOrden: '1976-01-14',
    resumen: 'Carta de año nuevo desde Santiago de Chile, donde Tomás ya ejerce como agregado naval, escrita para el boletín de la promoción del Naval Command College.',
    tipoDocumento: TIPO_CORRESPONDENCIA,
    contexto: 'Documenta el traslado de la familia de Cartagena a Santiago de Chile y el nuevo destino diplomático de Tomás como agregado naval, militar y aéreo en la Embajada de España. Coincide con el bicentenario de la independencia de los Estados Unidos, al que la carta hace referencia.',
    personas: ['Tomás Gómez Arroyo', 'Vivi', 'Antonio', 'Miguel'],
    credito: CREDITO,
    derechos: DERECHOS,
    fechaConsulta: FECHA_CONSULTA,
    fuenteTexto: FUENTE_TEXTO,
    paginas: [
      {
        src: '/fotos/archivo/pagina-10.jpg',
        alt: 'Primera página de la carta de Año Nuevo de 1976 desde Santiago de Chile',
        titulo: 'Primera hoja',
        referencia: 'Página 10 de 33 del expediente',
        original: `El Agregado Naval, Militar y Aéreo
a la Embajada de España en
Santiago de Chile

Santiago, January, 14, 1976
    To: The N.C.C. Newsletter
    From: Captain T. G. ARROYO, Spain
          Class 1972-73

    Dear schoolmates and friends:
         We have failed this year in sending our X'mas cards
    to all of you, but being a good chap, I promise to do my duty the next December

         In fact, we have been very busy. Moving our home
    from Cartagena, (Spain), to Santiago, (Chile), has prove to be a fairly hard
    job which had to be done by the time people employ in exchanging their gree-
    tings cards.

         As you have already guessed, I am the Naval Attache
    in the Spanish Embassy in Santiago de Chile, hoping to stay here for a three
    years period. Vivi and Antonio are here too, while Miguel will join us after
    completing his studies in Spain, probably by the next July. A happy family
    again...!

         We take this opportunity to wish to our good Ameri-
    can friends, as well as the whole U.S.A. Nation, all the best in this 200 A-
    nniversary of the independence. Unfortunately we are not attending the big
    N.C.C. old students assembly. The C.S.F. has a lot of very interesting pro-`,
        traduccion: `El Agregado Naval, Militar y Aéreo
a la Embajada de España en
Santiago de Chile

Santiago, 14 de enero de 1976
Para: The N.C.C. Newsletter
De: Capitán T. G. ARROYO, España
    Promoción 1972-73

Queridos compañeros de promoción y amigos:

Este año no hemos enviado nuestras tarjetas de Navidad a todos vosotros, pero, como soy un buen tipo, prometo cumplir con mi deber el próximo diciembre.

La verdad es que hemos estado muy ocupados. Trasladar nuestra casa de Cartagena (España) a Santiago (Chile) ha resultado ser un trabajo bastante duro, que tuvo que realizarse precisamente en la época que la gente dedica a intercambiar tarjetas de felicitación.

Como ya habréis adivinado, soy el agregado naval de la Embajada de España en Santiago de Chile y espero permanecer aquí durante tres años. Vivi y Antonio también están aquí, mientras que Miguel se reunirá con nosotros cuando termine sus estudios en España, probablemente el próximo julio. ¡Una familia feliz de nuevo…!

Aprovechamos esta oportunidad para desear lo mejor a nuestros buenos amigos estadounidenses, así como a toda la nación de los EE. UU., en este bicentenario de la Independencia. Por desgracia, no asistiremos a la gran reunión de antiguos alumnos del N.C.C. El C.S.F. tiene muchos temas muy interesantes que`,
        notas: [
          { texto: 'Continuidad entre páginas. La carta continúa en la página 11.' },
          { texto: 'Nota editorial. C.S.F. no se desarrolla.' },
          {
            texto: 'Dato cultural. El «Bicentennial» que menciona es el bicentenario de la independencia estadounidense celebrado en 1976, doscientos años después de que el Congreso Continental adoptara la Declaración de Independencia el 4 de julio de 1776.',
            fuenteTexto: 'U.S. National Archives',
            fuenteUrl: 'https://www.archives.gov/milestone-documents/declaration-of-independence',
          },
        ],
      },
      {
        src: '/fotos/archivo/pagina-11.jpg',
        alt: 'Segunda página de la carta, con la despedida y una nota manuscrita de agradecimiento',
        titulo: 'Segunda hoja',
        referencia: 'Página 11 de 33 del expediente',
        original: `blems to be discussed, and we are longing for visiting our friends from
    New England, but... Anyway, we will be there, in spirit.

         Best wishes and professional success to my dear and
    distinguished colleagues from our 32 different Countries belonging to
    the Free World... (does this sentence awake any remembrance to you?), and
    peace and mutual understanding all over the World.

         Very fondly,
         [firma manuscrita]
         Tomás Gómez ARROYO, Captain, Spanish Navy.
         Class 1972-73 N.C.C.

    [manuscrito]
    I thank you very much the one of the staff
    who is going to translate this letter into
    English. Thanks you again,

    Tomás`,
        traduccion: `debatir, y deseamos visitar a nuestros amigos de Nueva Inglaterra, pero… En fin, estaremos allí en espíritu.

Mis mejores deseos y éxito profesional a mis queridos y distinguidos colegas de nuestros 32 países diferentes pertenecientes al Mundo Libre… (¿os trae esta frase algún recuerdo?), y paz y entendimiento mutuo en todo el mundo.

Con mucho afecto,

[firma manuscrita conservada únicamente en el original]
Tomás Gómez ARROYO, capitán de navío, Armada Española.
Promoción 1972-73 N.C.C.

[manuscrito]
Muchas gracias a la persona del equipo que va a traducir esta carta al inglés. Gracias de nuevo,

Tomás`,
        notas: [
          { texto: 'Decisión de traducción. La traducción inicia la frase cortada en p. 10.' },
          { texto: 'Nota editorial. La nota manuscrita solicita traducir al inglés una carta ya escrita en inglés.' },
        ],
      },
    ],
  },
  {
    slug: 'carta-santiago-enero-1977',
    titulo: 'Carta de Año Nuevo desde Santiago de Chile',
    pieza: 'Carta de Año Nuevo de 1977',
    fecha: '7 de enero de 1977',
    fechaOrden: '1977-01-07',
    resumen: 'Carta de Año Nuevo desde Santiago de Chile con noticias familiares: los hijos en la universidad, la boda del mayor y la ausencia de Tomás y Vivi en la reunión de la promoción en Newport.',
    tipoDocumento: TIPO_CORRESPONDENCIA,
    contexto: 'Continuación del intercambio epistolar con la promoción del Naval Command College durante los años de Tomás como agregado naval en Chile, con detalles sobre el destino de sus tres hijos.',
    personas: ['Tomás Gómez Arroyo', 'Vivi', 'Tomás, el hijo mayor', 'Antonio', 'Miguel', 'Nena'],
    credito: CREDITO,
    derechos: DERECHOS,
    fechaConsulta: FECHA_CONSULTA,
    fuenteTexto: FUENTE_TEXTO,
    paginas: [
      {
        src: '/fotos/archivo/pagina-03.jpg',
        alt: 'Carta de Año Nuevo de 1977 desde Santiago de Chile',
        titulo: 'Carta completa',
        referencia: 'Página 3 de 33 del expediente',
        original: `El Agregado Naval, Militar y Aéreo
a la Embajada de España en
Santiago de Chile

SANTIAGO, January 7, 1977.

Dear schoolmates and friends:

                         Best wishes to all of you in the new year.
The last was not a very bad one to the Arroyo's since we had the pleasure
to finish it if not wealthy at least healthy and happy.

                         Antonio and Miguel are here. Both of them are
attending the University, while Nena and her family came for Christmas.
The only absent was the elder of the boys, the one who never stayed with
us in the States.

                         Instead of traveling he prefered to get marry
and so he did. He won his licence in Biological Sciences being this fact
testified by a splendid diploma. The only problem with them is that a di-
ploma is not enough to keep their souls and bodies together. Anyway, things
will get better.... I hope.

                         Vivi and myself are very very sad not being
able to stay in Newsport for the big N.C.C. Reunion. Next time perhaps.

                         Sincerely
                         [firma manuscrita]
                         TOMAS GOMEZ ARROYO.-
                         Captain Spanish Navy

NAVAL COMMAND COLLEGE
CLASS 1972-73.`,
        traduccion: `El Agregado Naval, Militar y Aéreo
a la Embajada de España en
Santiago de Chile

SANTIAGO, 7 de enero de 1977.

Queridos compañeros de promoción y amigos:

Mis mejores deseos a todos vosotros en el nuevo año. El último no fue muy malo para los Arroyo, pues tuvimos la dicha de terminarlo, si no ricos, al menos sanos y felices.

Antonio y Miguel están aquí. Ambos asisten a la Universidad, mientras Nena y su familia vinieron por Navidad. El único ausente fue el mayor de los chicos, el que nunca se quedó con nosotros en los Estados Unidos.

En lugar de viajar prefirió casarse, y así lo hizo. Obtuvo su licenciatura en Ciencias Biológicas, hecho acreditado por un espléndido diploma. El único problema para ellos es que un diploma no basta para mantener unidos alma y cuerpo. En fin, las cosas mejorarán… Eso espero.

Vivi y yo estamos muy, muy tristes por no poder quedarnos en Newport para la gran reunión del N.C.C. Quizá la próxima vez.

Atentamente,

[firma manuscrita conservada únicamente en el original]
TOMAS GOMEZ ARROYO.-
Capitán de navío, Armada Española

NAVAL COMMAND COLLEGE
PROMOCIÓN 1972-73.`,
        notas: [
          { texto: 'Lectura del original. Se conservan «prefered», «get marry» y «Newsport».' },
          { texto: 'Lectura del original. Anotación superior derecha: [ilegible].' },
          { texto: 'Edición familiar. La carta no nombra al hijo que no viajó a los Estados Unidos: se refiere a él solo como «el mayor de los chicos». Se llama Tomás, como su padre; dato aportado por la familia, no presente en el documento.' },
          {
            texto: 'Contexto institucional. La reunión del N.C.C. no era solo un encuentro escolar. El Naval Command College se creó en 1956 para reunir en Newport a oficiales superiores de marinas extranjeras y construir relaciones profesionales duraderas. Las cartas muestran que aquella red seguía viva años después del curso.',
            fuenteTexto: 'U.S. Naval War College',
            fuenteUrl: 'https://usnwc.edu/naval-command-college/index',
          },
        ],
      },
    ],
  },
  {
    slug: 'carta-santiago-diciembre-1977',
    titulo: 'Carta de fin de año desde Santiago de Chile',
    pieza: 'Carta de fin de año de 1977',
    fecha: '21 de diciembre de 1977',
    fechaOrden: '1977-12-21',
    resumen: 'Carta de fin de año desde Santiago de Chile: nace el primer nieto, un viaje a Buenos Aires y el recuerdo de los honores recibidos a bordo del USS Kitty Hawk.',
    tipoDocumento: TIPO_CORRESPONDENCIA,
    contexto: 'Carta de balance del año 1977 en la que Tomás menciona el nacimiento de su primer nieto y evoca, sin dar más detalles, una anécdota naval a bordo del portaaviones USS Kitty Hawk. Las notas de lectura documentan lo que se ha podido verificar externamente sobre ese episodio.',
    personas: ['Tomás Gómez Arroyo', 'Nena', 'los Vergnaud'],
    credito: CREDITO,
    derechos: DERECHOS,
    fechaConsulta: FECHA_CONSULTA,
    fuenteTexto: FUENTE_TEXTO,
    paginas: [
      {
        src: '/fotos/archivo/pagina-04.jpg',
        alt: 'Carta de fin de año de 1977 desde Santiago de Chile, con la anécdota del USS Kitty Hawk',
        titulo: 'Carta completa',
        referencia: 'Página 4 de 33 del expediente',
        original: `El Agregado Naval, Militar y Aéreo
a la Embajada de España en
Santiago de Chile

SANTIAGO, 21 December 1977.

From: CAP Tomás Gómez ARROYO, Spanish Navy.
      Address       (Duty)   Agregado de Defensa a la Embajada de España
                             Avda. Andrés Bello 1615, Depto. 101
                             SANTIAGO, Chile.

Dear Classmates and Friends:

                         Just a few lines to keep you informed of the
Arroyo's life during the year'77, which is drawing to a close. As you can
see, we are still in Chile hoping to prolong our stay for another year.

                         Our family is increasing; very slowly, but at
least increasing. On a few days ago, Nena presented with us, our first
grandson, who is N°3 in seniority in the context of the Arroyo's third ge-
neration. I could not tell you why but it gives me the idea of being some-
thing like a V.I.P.... I am dusting off the cap we received in the USS
"Kitty Hawk" when we were honored by the U.S. Navy in the spaceman way.
Unforgettable!....

                         Last March we drove across the Andes to Buenos
Aires, having the pleasure of meeting the Vergnaud's who are, believe it
or not, the only friends from the NCC Class of 1973 we have met since the
day we left Newport.

                         I would like to take this opportunity to tell
those of you who are interested in Chilean history, geography, folkore, etc
that our home is ever open with plenty room.

                         Best wishes to all of you for 1978.
                         Sincerely,
                         [firma manuscrita]
                         TOMAS GOMEZ ARROYO.-
                         '73`,
        traduccion: `El Agregado Naval, Militar y Aéreo
a la Embajada de España en
Santiago de Chile

SANTIAGO, 21 de diciembre de 1977.

De: CAP Tomás Gómez ARROYO, Armada Española.
Dirección (servicio): Agregado de Defensa a la Embajada de España
                       Avda. Andrés Bello 1615, Depto. 101
                       SANTIAGO, Chile.

Queridos compañeros de promoción y amigos:

Solo unas líneas para manteneros informados de la vida de los Arroyo durante el año 77, que está llegando a su fin. Como podéis ver, seguimos en Chile, esperando prolongar nuestra estancia otro año.

Nuestra familia aumenta; muy despacio, pero al menos aumenta. Hace solo unos días, Nena nos presentó a nuestro primer nieto, que ocupa el número 3 por antigüedad dentro de la tercera generación de los Arroyo. No sabría deciros por qué, pero me hace sentir algo así como una persona muy importante… Estoy desempolvando la gorra que recibimos en el USS «Kitty Hawk» cuando la Marina de los EE. UU. nos rindió honores «a la manera de los astronautas». ¡Inolvidable!…

El pasado marzo atravesamos los Andes en coche hasta Buenos Aires y tuvimos el placer de encontrarnos con los Vergnaud, quienes son, aunque no lo creáis, los únicos amigos de la promoción NCC de 1973 a los que hemos visto desde el día en que dejamos Newport.

Quisiera aprovechar esta oportunidad para decir a quienes estéis interesados en la historia, geografía, folclore, etc. de Chile que nuestra casa está siempre abierta y que hay sitio de sobra.

Mis mejores deseos a todos vosotros para 1978.

Atentamente,

[firma manuscrita conservada únicamente en el original]
TOMAS GOMEZ ARROYO.-
'73`,
        notas: [
          { texto: 'Nota editorial. Anotaciones manuscritas: «Update only» y «\'73».' },
          { texto: 'Nota editorial. No se infiere vínculo Apollo de la referencia al USS Kitty Hawk.' },
        ],
      },
    ],
  },
  {
    slug: 'carta-ascenso-1979',
    titulo: 'Ascenso a contralmirante',
    pieza: 'Carta de ascenso de 1979',
    fecha: 'Enero de 1979 (11 de enero de 1979 el ejemplar firmado)',
    fechaOrden: '1979-01-11',
    resumen: 'Comunicación del ascenso de Tomás a contralmirante y de su nuevo destino como Director de Reclutamiento y Dotaciones, en dos versiones: la copia de archivo y el ejemplar con membrete y firma.',
    tipoDocumento: TIPO_CORRESPONDENCIA,
    contexto: 'Documenta el ascenso de Tomás a contralmirante, formalizado meses antes por el BOE, y su regreso a un destino de responsabilidad en Madrid tras dejar el puesto de agregado naval en Chile. Se conservan dos versiones del mismo aviso a sus compañeros de promoción: una copia de trabajo sin firma y el ejemplar definitivo, con membrete oficial y firma manuscrita.',
    personas: ['Tomás Gómez Arroyo'],
    credito: CREDITO,
    derechos: DERECHOS,
    fechaConsulta: FECHA_CONSULTA,
    fuenteTexto: FUENTE_TEXTO,
    paginas: [
      {
        src: '/fotos/archivo/pagina-01.jpg',
        alt: 'Copia de archivo sin firma anunciando el ascenso de Tomás a contralmirante',
        titulo: 'Copia de archivo sin firma',
        referencia: 'Página 1 de 33 del expediente',
        original: `                                                    January 1979

From:   RADM Tomas G. ARROYO, Spanish Navy

Latest Address:          (Duty)   Director de Reclutamiento
                                  y Dotaciones del Departamento
                                  de Personnel
                                  Cuartel General de la Armada
                                  Montalban 2
                                  Madrid, Spain

Dear Classmates and Friends,

     You will be pleased to hear that I have been promoted to
the rank of Rear Admiral.

     I am no longer Spanish Navy Attache in our Embassy in Chile.
My new post is "Director de Reclutamiento y Dotaciones del
Departamento de Personal".-Cuartel General de la Armada.

                                      Sincerely,

                                  /s/Tomas G. Arroyo
                                       '73`,
        traduccion: `                                                    Enero de 1979

De:     Contralmirante Tomas G. ARROYO, Armada Española

Última dirección:        (Servicio) Director de Reclutamiento
                                    y Dotaciones del Departamento
                                    de Personal
                                    Cuartel General de la Armada
                                    Montalbán 2
                                    Madrid, España

Queridos compañeros de promoción y amigos:

     Os agradará saber que he sido ascendido al empleo de contralmirante.

     Ya no soy agregado naval de la Armada española en nuestra Embajada
en Chile. Mi nuevo destino es «Director de Reclutamiento y Dotaciones del
Departamento de Personal», en el Cuartel General de la Armada.

                                      Atentamente,

                         [la copia indica: /s/Tomas G. Arroyo]
                                      '73`,
        notas: [
          { texto: 'Descripción material. Copia mecanografiada o minuta, sin membrete ni firma autógrafa visible.' },
          { texto: 'Decisión de traducción. En la dirección el original escribe «Personnel», pero en el cuerpo escribe «Personal»; la transcripción conserva ambas formas y la traducción normaliza el nombre del departamento.' },
          { texto: 'Nota editorial. La marca \'73 remite a la promoción del Naval Command College, no al año de esta carta.' },
          {
            texto: 'Dato histórico. El ascenso no acababa de producirse cuando escribió esta carta: el BOE lo había formalizado el 1 de julio de 1978, seis meses antes. El mismo decreto lo nombró Director de Reclutamiento y Dotaciones, el destino que comunica aquí a sus compañeros.',
            fuenteTexto: 'BOE, 1 de julio de 1978',
            fuenteUrl: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-1978-16995',
          },
        ],
      },
      {
        src: '/fotos/archivo/pagina-02.jpg',
        alt: 'Ejemplar con membrete oficial y firma manuscrita del aviso de ascenso',
        titulo: 'Ejemplar firmado con membrete',
        referencia: 'Página 2 de 33 del expediente',
        original: `MINISTERIO DE DEFENSA               Madrid, 11th January, 1979
CUARTEL GENERAL DE LA ARMADA
DIRECTOR DE RECLUTAMIENTO Y DOTACIONES

TOMAS GOMEZ ARROYO                  Naval Command College
Contralmirante- Spanish Navy        Naval War College
Class 1972-73                       Newport- R.I.- 02840
                                    U.S.A.

Dear Schoolfellow- and friend:

                 You will be pleased to hear that I have been
promoted to the rank  of Rear Admiral.

                 I am no longer Spanish Navy Attaché in our
Embassy in Chile.

                 My new post is "Director de Reclutamiento y
Dotaciones del Departamento de Personal".- Cuartel General de la Armada.

                 Yours sincerely.

                 [firma manuscrita]
                 -Tomás Gómez Arroyo-
                         '73`,
        traduccion: `MINISTERIO DE DEFENSA               Madrid, 11 de enero de 1979
CUARTEL GENERAL DE LA ARMADA
DIRECTOR DE RECLUTAMIENTO Y DOTACIONES

TOMÁS GÓMEZ ARROYO                  Naval Command College
Contralmirante - Armada Española    Naval War College
Promoción 1972-73                   Newport, Rhode Island 02840
                                    EE. UU.

Querido compañero de promoción y amigo:

                 Te agradará saber que he sido ascendido al
empleo de contralmirante.

                 Ya no soy agregado naval de la Armada española
en nuestra Embajada en Chile.

                 Mi nuevo destino es «Director de Reclutamiento y
Dotaciones del Departamento de Personal», en el Cuartel General de la Armada.

                 Atentamente.

          [firma manuscrita conservada únicamente en el original]
                 -Tomás Gómez Arroyo-
                         '73`,
        notas: [
          { texto: 'Decisión de traducción. Ejemplar con membrete y firma manuscrita; la traducción no reproduce la firma para no crear un documento que Tomás nunca firmó.' },
          { texto: 'Decisión de traducción. El encabezado bilingüe confirma la equivalencia «Rear Admiral» / «contralmirante».' },
          { texto: 'Decisión de traducción. Se traduce «schoolfellow» como «compañero de promoción» por el contexto del Naval Command College.' },
        ],
      },
    ],
  },
  {
    slug: 'carta-el-ferrol-1981',
    titulo: 'Carta desde El Ferrol del Caudillo',
    pieza: 'Carta desde el Mando de Escoltas de 1981',
    fecha: '21 de enero de 1981',
    fechaOrden: '1981-01-21',
    resumen: 'Última carta del expediente: desde El Ferrol, Tomás comunica la muerte de su padre, su nuevo destino como Jefe del Mando de Escoltas y la vida de sus hijos Antonio y Miguel.',
    tipoDocumento: TIPO_CORRESPONDENCIA,
    contexto: 'Cierra el expediente conservado por el Naval War College. Tomás relata un año marcado por la muerte de su padre a los 96 años y por su nuevo destino al frente del Mando de Escoltas de la Armada, con base en El Ferrol.',
    personas: ['Tomás Gómez Arroyo', 'Vivi', 'Antonio', 'Miguel', 'los Walker'],
    credito: CREDITO,
    derechos: DERECHOS,
    fechaConsulta: FECHA_CONSULTA,
    fuenteTexto: FUENTE_TEXTO,
    paginas: [
      {
        src: '/fotos/archivo/pagina-12.jpg',
        alt: 'Carta desde El Ferrol del Caudillo anunciando la muerte del padre de Tomás y su nuevo destino',
        titulo: 'Carta completa',
        referencia: 'Página 12 de 33 del expediente',
        original: `EL CONTRALMIRANTE JEFE
DEL
MANDO DE ESCOLTAS

El Ferrol del Caudillo, 21 de enero de 1981

U.S. Naval War College
Naval Command College
Newport R.I.- 02840

    Dear School mates and friends:
         Just a few lines to tell you about the Arroyo's. [manuscrito: During]
    the past year we have had either bad and good events but, summarizing, I would not hesitate in classify
    it as a very sad one.

         To begin with my father died last spring after five months of inactivity. He
    used to say that he became an old man in November, 12th a 14:00, thirty-five days
    before his 96 birthday.

         Vivi and myself have been alone since we came back from Chile, where we left
    Antonio [lectura dudosa: which] is still there, while Miguel, in Tenerife, is studying his second year
    in Architecture.

         My job has been hard and difficult but, after two years of performing my duty as
    Director de Reclutamiento y Dotaciones, I was selected for a new role. A few days
    ago, (January, 9th) I took over as Jefe del Mando de Escoltas, which includes all
    our frigates, corvettes and destroyers. My home port is El Ferrol where I hope to
    see you soon.

         A special mention for the Walker's who were kind enough to devote a few days
    to us, in Madrid, last October.

                             [firma manuscrita]
                             -Tomás Gómez Arroyo-
                             Class 1972-73`,
        traduccion: `El Ferrol del Caudillo, 21 de enero de 1981

U.S. Naval War College
Naval Command College
Newport, Rhode Island 02840

    Queridos compañeros de promoción y amigos:
         Sólo unas líneas para contaros algo de los Arroyo. [manuscrito: Durante]
    el pasado año hemos tenido acontecimientos malos y buenos, pero, en resumen, no
    dudaría en clasificarlo como uno muy triste.

         Para empezar, mi padre murió la pasada primavera después de cinco meses de
    inactividad. Solía decir que se hizo viejo el 12 de noviembre, a las 14:00,
    treinta y cinco días antes de cumplir 96 años.

         Vivi y yo hemos estado solos desde que volvimos de Chile, donde dejamos a
    Antonio [lectura dudosa: que] sigue allí, mientras Miguel, en Tenerife, estudia
    su segundo curso de Arquitectura.

         Mi trabajo ha sido duro y difícil, pero, después de dos años desempeñando mi
    deber como Director de Reclutamiento y Dotaciones, fui elegido para un nuevo
    destino. Hace unos días (el 9 de enero) tomé posesión como Jefe del Mando de
    Escoltas, que comprende todas nuestras fragatas, corbetas y destructores. Mi
    puerto base es El Ferrol, donde espero veros pronto.

         Una mención especial para los Walker, que tuvieron la amabilidad de
    dedicarnos unos días en Madrid el pasado octubre.

                             [firma manuscrita]
                             -Tomás Gómez Arroyo-
                             Promoción 1972-73`,
        notas: [
          { texto: 'Nota editorial. «During» es una adición manuscrita.' },
          { texto: 'Lectura del original. Tras Antonio: [lectura dudosa: which].' },
          { texto: 'Nota editorial. No se infiere causa de fallecimiento.' },
          {
            texto: 'Dato histórico. El nombramiento que figura en el membrete era reciente: el BOE había designado a Tomás Jefe del Mando de Escoltas el 22 de diciembre de 1980, pocas semanas antes de esta carta del 14 de enero de 1981.',
            fuenteTexto: 'BOE, 22 de diciembre de 1980',
            fuenteUrl: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-1980-27934',
          },
        ],
      },
    ],
  },
];

export const notasHistoricasEnsayo: NotaLectura[] = [
  {
    texto: 'Una promoción que siguió escribiéndose. Contexto Verificado. El Naval Command College era, y sigue siendo, un programa residencial para oficiales superiores de marinas extranjeras. Las cartas de 1974, 1976, 1977, 1979 y 1981 demuestran que la promoción de Tomás siguió funcionando como una red personal y profesional mucho después de Newport.',
    fuenteTexto: 'U.S. Naval War College - historia y Naval Command College',
    fuenteUrl: 'https://usnwc.edu/about/history-and-campus/',
  },
  {
    texto: 'Turner: autoridad institucional y autor material. Dato Documental. La evaluación de 1973 lleva el bloque de firma mecanografiado de Stansfield Turner, presidente del Naval War College. El propio documento identifica a K. L. Wright Jr. como redactor el 5 de julio. No se aprecia una firma autógrafa de Turner en este ejemplar. Turner dirigiría después la inteligencia estadounidense entre 1977 y 1981.',
    fuenteTexto: 'U.S. Naval War College - Stansfield Turner (1972-1974)',
    fuenteUrl: 'https://usnwc.edu/News-and-Events/News/Former-Naval-War-College-president-Admiral-Stansfield-Turner-passes-away',
  },
  {
    texto: 'El ascenso ocurrió seis meses antes de la carta. Cronología Confirmada. El BOE del 1 de julio de 1978 ascendió a Tomás a contralmirante y lo nombró Director de Reclutamiento y Dotaciones en el mismo decreto. La carta de enero de 1979 comunica la noticia a sus compañeros; no afirma que el ascenso acabara de producirse.',
    fuenteTexto: 'BOE - ascenso y nombramiento, 1 de julio de 1978',
    fuenteUrl: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-1978-16995',
  },
  {
    texto: 'La gorra del USS Kitty Hawk sí está en la carta. Anécdota Abierta. El 21 de diciembre de 1977 Tomás escribió que desempolvaba la gorra recibida en el USS Kitty Hawk cuando la Marina estadounidense les rindió honores «in the spaceman way». La frase prueba el recuerdo, pero no explica la ceremonia. Los historiales oficiales de 1972-1973 no conectan el episodio con Apollo ni nombran a Tomás. Una recepción de dignatarios llegados por aeronave, con rainbow sideboys, es una posibilidad naval todavía no demostrada para este caso.',
    fuenteTexto: 'NHHC - historial oficial del USS Kitty Hawk',
    fuenteUrl: 'https://www.history.navy.mil/research/histories/ship-histories/danfs/k/kitty-hawk-cva-63-ii.html',
  },
  {
    texto: 'Altamira tuvo que esperar para ser reconocida. Dato Cultural. Marcelino Sanz de Sautuola publicó en 1880 su interpretación de las pinturas de Altamira como arte paleolítico. El hallazgo fue recibido con escepticismo y no alcanzó reconocimiento general hasta 1902.',
    fuenteTexto: 'Museo Nacional de Altamira - descubrimiento y reconocimiento',
    fuenteUrl: 'https://www.cultura.gob.es/mnaltamira/ca/cueva-altamira/descubrimiento.html',
  },
  {
    texto: 'Un deseo anterior a la adhesión. Europa. Cuando el ensayo afirma que España desea integrarse plenamente en Europa, la adhesión de 1986 aún estaba lejos. Su contexto inmediato era el acuerdo comercial preferencial entre la Comunidad Económica Europea y España firmado en 1970.',
    fuenteTexto: 'EUR-Lex - Acuerdo CEE-España de 1970',
    fuenteUrl: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A21970A0629%2801%29',
  },
  {
    texto: `Qué sabemos del USS Kitty Hawk. En el documento: la carta de 21 de diciembre de 1977 menciona una gorra recibida a bordo y un homenaje de la U.S. Navy «in the spaceman way». Verificado externamente: el Kitty Hawk no figura como buque de recuperación Apollo en las historias oficiales consultadas; sus informes de 1972 y 1973 no nombran a Tomás. Inferencia prudente: una recepción a bordo por aeronave con rainbow sideboys podría explicar el lenguaje, pero no hay prueba de que fuera esa ceremonia. Siguiente prueba decisiva: itinerario de los Field Study Trips y fotografías/boletines de la promoción NCC 1972-73; con una fecha, diario de cubierta del portaaviones.`,
  },
];
