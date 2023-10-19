import { type SeccionesType } from '../types'

export interface ResultadoMapa {
  CIRCUITO_CODE: SeccionesType
  CIRCUITO_DESC: string
  AGRUPACION: string
  COLOR: string
  VOTOS_AGRUP: number
  VOTOS_TOTALES: number
  PORCENTAJE: number
}
export interface ResultadoDetalle {
  AGRUPACION: string
  COLOR: string
  VOTOS_AGRUPACION: number
  PORCENTAJE: number
  NOMBRE: string
  APELLIDO: string
  FOTO: any
}
