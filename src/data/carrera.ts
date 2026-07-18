export interface HitoCarrera {
  ano: string;
  texto: string;
  cap?: string;
  oficial?: boolean;
  referencia?: string;
  epilogo?: boolean;
  titulo?: string;
}

export const carrera: HitoCarrera[] = [
  { ano: 'ca. 1921', texto: 'Nace en Las Palmas de Gran Canaria, frente a la Playa de Las Canteras. La fecha exacta está pendiente de confirmación documental.', cap: 'capitulo-primero' },
  { ano: '1938', texto: 'Se alista como marinero voluntario a los diecisiete años. Crucero auxiliar Rey Jaime I y patrullas por el Estrecho de Gibraltar.', cap: 'capitulo-primero' },
  { ano: '1939', texto: 'Ingresa en la Escuela Naval Militar de San Fernando.', cap: 'capitulo-segundo' },
  { ano: '1943', texto: 'Recibe el despacho de Alférez de Navío en la nueva Escuela Naval de Marín, el 15 de agosto.', cap: 'capitulo-cuarto' },
  { ano: '1945', texto: 'Curso de la Escuela de Tiro Naval en Marín, tras un invierno de nieve en Portugalete.', cap: 'capitulo-quinto' },
  { ano: '1946', texto: 'Destino al minador Marte, con base en Las Palmas. El noviazgo con Vivi.', cap: 'capitulo-sexto' },
  { ano: '1948', texto: 'Nace su hija. Destino al destructor Churruca, en la División Naval del Mediterráneo.', cap: 'capitulo-octavo' },
  { ano: '1950', texto: 'En mayo recibe su primer mando de mar: el patrullero RR 28, con base en Ceuta.', cap: 'capitulo-noveno' },
  { ano: '1952', texto: 'Asciende a Capitán de Corbeta y pasa al Cuartel de Instrucción de Cartagena.', cap: 'capitulo-decimo' },
  { ano: '1954', texto: 'Embarca en el crucero Miguel de Cervantes. Aquí se interrumpen las memorias.', cap: 'capitulo-decimo' },
  { ano: '1978', titulo: 'Contralmirante', texto: 'Asciende a Contralmirante.', oficial: true, epilogo: true, referencia: 'Real Decreto 1536/1978, de 1 de julio; BOE.' },
  { ano: '1980', titulo: 'Jefe del Mando de Escoltas', texto: 'Es nombrado Jefe del Mando de Escoltas.', oficial: true, epilogo: true, referencia: 'Real Decreto 2788/1980, de 22 de diciembre; BOE.' },
  { ano: '1982', titulo: 'Vicealmirante', texto: 'Asciende a Vicealmirante.', oficial: true, epilogo: true, referencia: 'Real Decreto 215/1982, de 3 de febrero; BOE.' },
  { ano: '1982', titulo: 'Almirante Jefe del Arsenal de El Ferrol', texto: 'Es nombrado Almirante Jefe del Arsenal de El Ferrol.', oficial: true, epilogo: true, referencia: 'Real Decreto 268/1982, de 13 de febrero; BOE.' },
  { ano: '1982', titulo: 'Gran Cruz del Mérito Naval', texto: 'Recibe la Gran Cruz del Mérito Naval.', oficial: true, epilogo: true, referencia: 'Real Decreto 1353/1982, de 23 de junio; BOE.' },
  { ano: '1983', titulo: 'Gran Cruz de la Orden del Mérito Militar', texto: 'Recibe la Gran Cruz de la Orden del Mérito Militar, con distintivo blanco.', oficial: true, epilogo: true, referencia: 'Real Decreto 1703/1983, de 22 de junio; BOE núm. 150, 24 de junio de 1983, pág. 17755.' },
  { ano: '1985', titulo: 'Reserva activa', texto: 'Pasa a la reserva activa.', oficial: true, epilogo: true, referencia: 'Real Decreto 436/1985, de 1 de abril; BOE.' },
  { ano: '1986', titulo: 'Presidencia de la asociación de huérfanos', texto: 'Es designado para continuar como presidente de la Asociación Benéfica para Huérfanos de los Cuerpos Patentados de la Armada.', oficial: true, epilogo: true, referencia: 'Real Decreto 652/1986, de 4 de abril; BOE.' },
  { ano: '1991', texto: 'Viudo de Vivi, comienza a escribir estas memorias en la Playa de Las Canteras.', cap: 'prologo' },
  { ano: '1995', texto: 'Tras el diagnóstico de una grave enfermedad, vuelve a estas páginas y escribe el capítulo final.', cap: 'capitulo-decimo' },
];

export const hitosEpilogo = carrera.filter((h) => h.epilogo);
