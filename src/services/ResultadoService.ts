import { type AxiosResponse } from 'axios'
import { type ResultadoDetalle, type ResultadoMapa } from '../domain/result'
import ServiceBase from './ServiceBase'

const BASE_URL = process.env.API_RESULTADOS
class ResultadoService extends ServiceBase {
  constructor () {
    console.log(process.env)
    super({ baseUrl: BASE_URL })
  }

  async getResultadoMapa (cargo: string): Promise<ResultadoMapa[]> {
    const result: AxiosResponse<ResultadoMapa[], any> = await this.client.get(`/Resultados/General?Cargo=${cargo}`)
    return result.data
  }

  async getResultadoDetalle ({ cargo, circuito }: { cargo: string, circuito?: string }): Promise<ResultadoDetalle[]> {
    circuito = circuito === 'General' ? '' : circuito
    const result: AxiosResponse<ResultadoDetalle[], any> = await this.client.get(`/Resultados/Detalle?Cargo=${cargo}&Circuito=${circuito}`)

    return result.data
  }
}
export default new ResultadoService()
