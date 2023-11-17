import { type CircuitosEscrutados } from '@/domain/circuitosEscrutados'
import { type AxiosResponse } from 'axios'
import ServiceBase from './ServiceBase'
import { type ResultadoxCircuito } from '@/domain/resultadoxcircuito'

const BASE_URL = `${process.env.API_RESULTADOS}/CircuitosEscrutados`
class CircuitosEscrutadosService extends ServiceBase {
  constructor () {
    super({ baseUrl: BASE_URL })
  }

  async getCircuitosEscrutados (escrutinio: string): Promise<CircuitosEscrutados[]> {
    const result: AxiosResponse<CircuitosEscrutados[], any> = await this.client.get(`?escrutinio=${escrutinio}`)
    return result.data
  }

  async getResultadoxCircuitosEscrutados (escrutinio: string, cargo: string = '64C6472A-4900-4F2E-ACEC-027B5ABE4712'): Promise<ResultadoxCircuito[]> {
    const result: AxiosResponse<ResultadoxCircuito[], any> = await this.client.get(`/TotalesXCircuito?escrutinio=${escrutinio}&cargo=${cargo}`)
    return result.data
  }
}

export default new CircuitosEscrutadosService()
