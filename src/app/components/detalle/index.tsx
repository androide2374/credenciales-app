'use client'

import { SeccionesData } from '@/constance/secciones'
import useResultadoDetalle from '@/hooks/useResultadoDetalle'
import useStore from '@/hooks/useStore'
import { useSeccionesStore } from '@/store/secciones-store'
import { type SeccionesDataInterface } from '@/types'
import { Card, Spinner } from 'flowbite-react'
import { useState } from 'react'
import Item from '../candidatos/item'
import Error from '../errorBox'

export default function Detalle ({ escrutinio }: { escrutinio: string }) {
  const [refreshInterval, setRefreshInterval] = useState(1000 * 60 * 3)
  const currentSeccion = useStore(useSeccionesStore, (store) => store.currentSeccion)
  const reset = useSeccionesStore((store) => store.reset)

  const seccion = currentSeccion ? SeccionesData[currentSeccion as keyof SeccionesDataInterface] : currentSeccion

  const { data: resultadoDetalle, isError, isLoading, refetch } = useResultadoDetalle(escrutinio, refreshInterval)
  return (
    <Card className='w-full'>
      <div className='flex gap-10 items-end w-full'>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiempo de actualización</label>
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
      <main className='h-full'>
        <h1 className='font-bold text-xl'>{`Resultados ${seccion ?? currentSeccion}`}</h1>
        {currentSeccion !== 'General' && (
          <button onClick={() => {
            reset()
          }}
          type="button"
          className="text-white my-4 bg-blue-700 gap-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            Volver a general
          </button>
        )}
        <hr />
        {isLoading
          ? (<Spinner aria-label="Default status example" />)
          : isError
            ? (<Error onClick={async () => await refetch()} />)
            : (resultadoDetalle?.map((x) => <Item key={x.AGRUPACION} {...x} />))}
      </main>
    </Card>
  )
}
