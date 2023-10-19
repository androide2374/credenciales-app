import { CargosCombo } from '../constance/cargo'
import { type Cargos } from '../domain/cargos'
import ServiceBase from './ServiceBase'

const BASE_URL = process.env.API_RESULTADOS
class CombosService extends ServiceBase {
  constructor () {
    super({ baseUrl: BASE_URL })
  }

  async getCargos (): Promise<Cargos[]> {
    return await new Promise(resolve => { resolve(CargosCombo) })
  }
}

export default new CombosService()
