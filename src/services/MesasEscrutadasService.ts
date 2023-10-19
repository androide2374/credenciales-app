import { type MesasEscrutadas } from '@/domain/mesas'
import { type AxiosResponse } from 'axios'
import ServiceBase from './ServiceBase'

const BASE_URL = `${process.env.API_RESULTADOS}/Mesas`
class MesasEscrutadasService extends ServiceBase {
  constructor () {
    super({ baseUrl: BASE_URL })
  }

  async getMesasEscrutadas (escrutinio: string): Promise<MesasEscrutadas[]> {
    const result: AxiosResponse<MesasEscrutadas[], any> = await this.client.get(`/Escrutadas?escrutinio=${escrutinio}`)
    return result.data
  }
}

export default new MesasEscrutadasService()
