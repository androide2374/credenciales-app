'use client'
import { Escrutinio } from '@/constance'
import { type ResultadoxCircuito } from '@/domain/resultadoxcircuito'
import CircuitosEscrutadosService from '@/services/CircuitosEscrutadosService'
import React, { useEffect, useState } from 'react'
import { Margin, usePDF } from 'react-to-pdf'

const extractVotosPorcentaje = (item: string) => {
  const [votos, porcentaje] = item.split(' ').map((item) => item.replace('(', '').replace(')', ''))
  return [votos, porcentaje]
}

export default function Page () {
  const [data, setData] = useState<ResultadoxCircuito[]>([])

  const { toPDF, targetRef } = usePDF({
    filename: 'balotage-2023.pdf',
    page: { margin: Margin.MEDIUM, format: 'A4' }
  })

  useEffect(() => {
    CircuitosEscrutadosService.getResultadoxCircuitosEscrutados(Escrutinio.Balotage2023).then((data) => {
      setData(data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <main className='w-full grid place-items-center'>
      <button onClick={() => { toPDF({ filename: `balogate-2023-${new Date().toUTCString()}.pdf` }) }}>Imprimir</button>
      <div className='w-4/5'>
        <h1 className='text-5xl mb-5 text-center font-bold uppercase'>GRAFICOS Paso 2023</h1>
        <div
          className="grid grid-flow-row gap-8">

          <div className="relative overflow-x-auto">
            <table ref={targetRef} className="w-full text-sm text-center  text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                  </th>
                  <th scope="col" colSpan={2} className="px-6 py-3 text-white bg-blue-500">
                    MASSA
                  </th>
                  <th scope="col" colSpan={2} className="px-6 py-3 text-white bg-violet-500">
                    MILEI
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-500 text-white">
                    Blanco
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="px-6 py-3 bg-gray-700 text-white">
                    Circuitos
                  </th>
                  <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                    Votos
                  </th>
                  <th scope="col" className="px-6 py-3 bg-blue-500 text-white">
                    %
                  </th>
                  <th scope="col" className="px-6 py-3 bg-violet-500 text-white">
                    Votos
                  </th>
                  <th scope="col" className="px-6 py-3 bg-violet-500 text-white">
                    %
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-500 text-white">
                    Votos
                  </th>
                </tr>
              </thead>
              <tbody>
                { data.map((item, index) => {
                  const massa = extractVotosPorcentaje(item.MASSA)
                  const milei = extractVotosPorcentaje(item.MILEI)
                  return (
                    <tr key={item.CIRCUITO} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.CIRCUITO}
                      </th>
                      <td className={`px-6 py-4 text-white ${!(index % 2) ? 'bg-blue-400' : ''} `}>
                        {massa[0]}
                      </td>
                      <td className={`px-6 py-4 text-white ${!(index % 2) ? 'bg-blue-400' : ''} `}>
                        {massa[1]}
                      </td>
                      <td className={`px-6 py-4 text-white ${!(index % 2) ? 'bg-violet-400' : ''} `}>
                        {milei[0]}
                      </td>
                      <td className={`px-6 py-4 text-white ${!(index % 2) ? 'bg-violet-400' : ''} `}>
                        {milei[1]}
                      </td>
                      <td className={`px-6 py-4 text-white ${!(index % 2) ? 'bg-gray-400' : ''} `}>
                        {item.BLANCOS}
                      </td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </main>
  )
}
