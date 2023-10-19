import { type Cargos } from '@/domain/cargos'
import CombosService from '@/services/CombosService'
import { useSeccionesStore } from '@/store/secciones-store'
import { useEffect, useState } from 'react'

export default function CargoSelect () {
  const cargo = useSeccionesStore((store) => store.currentCargo)
  const setCargo = useSeccionesStore((store) => store.selectedCargo)

  const [cargos, setCargos] = useState<Cargos[]>([])

  useEffect(() => {
    CombosService.getCargos()
      .then((res) => {
        setCargos(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleChangeCargo = (value: string) => {
    setCargo(value)
  }
  return (
    <div className='grid w-full'>
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecione cargo</label>
      <select
        onChange={(e) => { handleChangeCargo(e.target.value) }}
        value={cargo}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {
          cargos.map(value => (
            <option key={value.ORID} value={value.ORID}>{value.DESCRIPCION}</option>
          ))
        }
      </select>
    </div>
  )
}
