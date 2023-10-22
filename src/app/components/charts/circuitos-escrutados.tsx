'use client'

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js'

import { Escrutinio } from '@/constance'
import CircuitosEscrutadosService from '@/services/CircuitosEscrutadosService'
import { useQuery } from '@tanstack/react-query'
import { Spinner } from 'flowbite-react'
import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: 'white'
      }
    },
    title: {
      display: true,
      text: 'Circuitos Escrutados'
    },
    datalabels: {
      color: '#fff'
    }
  }
}

export const dataValues = {
  labels: [''],
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }

  ]
}

export default function CircuitosEscrutadosChart ({ escrutinio = Escrutinio.Generales2023 }: { escrutinio: string }) {
  const [refreshInterval, setRefreshInterval] = useState(1000 * 60 * 3)
  const { data: result, isLoading } = useQuery({
    queryKey: ['circuitosEscrutados', escrutinio],
    queryFn: async () => await CircuitosEscrutadosService.getCircuitosEscrutados(escrutinio),
    refetchInterval: refreshInterval
  })
  const labels = result?.map(x => { return `${x.CIRCUITO.slice(0, 4)} - ${x.Porcentaje}%` })
  const porcentajes = result?.map(x => Number(x.Porcentaje))
  const data = {
    ...dataValues,
    labels,
    datasets: [
      {
        label: '% de Votos',
        data: porcentajes,
        backgroundColor: 'rgba(81, 64, 230, 1)',
        borderWidth: 0
      }
    ]
  }
  return (
    <main className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className='flex flex-col justify-center items-end w-full'>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">Tiempo de actualización</label>
        <select
        onChange={(e) => { setRefreshInterval(Number(e.target.value)) }}
        value={refreshInterval}
        id="countries"
        className="bg-gray-50 border border-gray-300 w-3/12 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value={1000}>1 seg</option>
          <option value={1000 * 15}>15 seg</option>
          <option value={1000 * 30}>30 seg</option>
          <option value={1000 * 60}>1 min</option>
          <option value={1000 * 60 * 3}>3 min</option>
        </select>
      </div>
      {
        isLoading
          ? <Spinner />
          : <Bar options={options} data={data} />
      }
    </main>
  )
}
