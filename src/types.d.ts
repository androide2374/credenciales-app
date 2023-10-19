export type SeccionesType =
  | '587'
  | '590'
  | '593'
  | '583E'
  | '590A'
  | '584'
  | '591'
  | '586'
  | '583D'
  | '583C'
  | '592'
  | '593A'
  | '585'
  | '583B'
  | '589'
  | '583A'
  | '588'
  | '583'
export interface SeccionesDataInterface {
  [key in SeccionesType]: string
}
