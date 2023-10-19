'use client'

import useResultadoDetalle from '@/hooks/useResultadoDetalle'
import useStore from '@/hooks/useStore'
import { useSeccionesStore } from '@/store/secciones-store'
import { Card, Spinner } from 'flowbite-react'
import Item from '../candidatos/item'
import Error from '../errorBox'

export default function Detalle () {
  const currentSeccion = useStore(useSeccionesStore, (store) => store.currentSeccion)
  const reset = useSeccionesStore((store) => store.reset)

  const { data: resultadoDetalle, isError, isLoading, refetch } = useResultadoDetalle()

  return (
    <Card className='w-full'>
      <main className='h-full'>
        <h1 className='font-bold text-xl'>{`Resultados ${currentSeccion}`}</h1>
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
