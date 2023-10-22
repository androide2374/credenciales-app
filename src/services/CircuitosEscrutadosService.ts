import { type CircuitosEscrutados } from '@/domain/circuitosEscrutados'
import { type AxiosResponse } from 'axios'
import ServiceBase from './ServiceBase'

const BASE_URL = `${process.env.API_RESULTADOS}/CircuitosEscrutados`
class CircuitosEscrutadosService extends ServiceBase {
  constructor () {
    super({ baseUrl: BASE_URL })
  }

  async getCircuitosEscrutados (escrutinio: string): Promise<CircuitosEscrutados[]> {
    const result: AxiosResponse<CircuitosEscrutados[], any> = await this.client.get(`?escrutinio=${escrutinio}`)
    return result.data
  }
}

export default new CircuitosEscrutadosService()
