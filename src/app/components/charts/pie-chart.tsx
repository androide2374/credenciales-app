'use client'
import ResultadoService from '@/services/ResultadoService'
import { useQuery } from '@tanstack/react-query'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Spinner } from 'flowbite-react'
import { useState } from 'react'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)
const options = {
  plugins: {
    legend: {
      labels: {
        color: 'white'
      }
    },
    datalabels: {
      color: '#000'
    }
  }
}
export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132,1)',
        'rgba(54, 162, 235,1)',
        'rgba(255, 206, 86,1)',
        'rgba(75, 192, 192,1)',
        'rgba(153, 102, 255,1)',
        'rgba(255, 159, 64,1)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      textColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ],
  legend: {
    labels: {
      padding: 20
    }
  }
}

export function PorcentajeCargoChart ({ escrutinio }: { escrutinio: string }) {
  const cargo = '64C6472A-4900-4F2E-ACEC-027B5ABE4712'
  const [refreshInterval, setRefreshInterval] = useState(1000 * 60 * 3)

  const { data: dataTest, isLoading } = useQuery({
    queryKey: ['resultadoDetalle', cargo, escrutinio],
    queryFn: async () => await ResultadoService.getResultadoDetalle({ cargo, escrutinio }),
    refetchInterval: refreshInterval
  })
  const nombres = dataTest?.map(item => `${item.AGRUPACION}`)
  const porcentajes = dataTest?.map(item => Number(item.PORCENTAJE))
  const colores = dataTest?.map(item => item.COLOR)

  const dataPrueba = {
    ...data,
    labels: nombres,
    datasets: [
      {
        label: '% de Votos',
        data: porcentajes,
        backgroundColor: colores,
        borderWidth: 0,
        datalabels: {
          color: 'white'
        }
      }
    ]
  }
  return (
    <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <section className='grid grid-cols-3 gap-4'>

        <div className='col-span-1'>
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">Tiempo de actualización</label>
          <select
          onChange={(e) => { setRefreshInterval(Number(e.target.value)) }}
          value={refreshInterval}
          id="countries"
          className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value={1000}>1 seg</option>
            <option value={1000 * 15}>15 seg</option>
            <option value={1000 * 30}>30 seg</option>
            <option value={1000 * 60}>1 min</option>
            <option value={1000 * 60 * 3}>3 min</option>
          </select>
        </div>
      </section>
      {
        isLoading
          ? <Spinner />
          : <Pie options={ options} data={dataPrueba} />
      }
    </div>
  )
}
