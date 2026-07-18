/**
 * Catálogo público del archivo familiar.
 *
 * No añadir aquí una foto recibida de la familia hasta que su ficha de ingreso
 * tenga identificación, fecha aproximada, procedencia y autorización pública.
 * Los originales permanecen en 06-entrada-familia; la web usa una copia derivada.
 */
export interface FotoFamiliarPublicable {
  id: string;
  src: string;
  alt: string;
  pie: string;
  personas: string[];
  fecha: string;
  lugar: string;
  procedencia: string;
  autorizacion: 'familiar-confirmada';
  secciones: string[];
}

export const fotosFamiliaresPublicables: FotoFamiliarPublicable[] = [];

