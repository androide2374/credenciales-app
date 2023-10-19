'use client'

import { type MesasEscrutadas } from '@/domain/mesas'
import MesasEscrutadasService from '@/services/MesasEscrutadasService'
import { useEffect, useState } from 'react'

export default function TablaMesasEscrutadas ({ escrutinio }: { escrutinio: string }) {
  const [mesas, setMesas] = useState<MesasEscrutadas[]>([])
  useEffect(() => {
    MesasEscrutadasService.getMesasEscrutadas(escrutinio).then(c => { setMesas(c) }).catch(e => { console.error(e) })
  }, [])
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Circuito
            </th>
            <th scope="col" className="px-6 py-3">
              Escuela
            </th>
            <th scope="col" className="px-6 py-3">
              Mesa
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Price
            </th> */}
          </tr>
        </thead>
        <tbody>
          {
            mesas.map(item => (
              <tr key={item.CIRCUITO} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.CIRCUITO}
                </th>
                <td className="px-6 py-4">
                  {item.ESCUELA}
                </td>
                <td className="px-6 py-4">
                  {item.MESA}
                </td>
                {/* <td className="px-6 py-4">
            $1999
          </td> */}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  )
}
