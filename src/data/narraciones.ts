/**
 * Fuente única para futuras narraciones.
 *
 * `original` identifica una grabación auténtica de Tomás.
 * `recreada` identifica audio sintético creado a partir de grabaciones originales;
 * nunca debe mostrarse sin una advertencia visible de recreación y autorización.
 */
export interface Narracion {
  id: string;
  capitulo: string;
  src: string;
  tipo: 'original' | 'recreada';
  aviso: string;
  transcripcion: string;
  autorizacionFamiliar: true;
}

export const narraciones: Narracion[] = [];

