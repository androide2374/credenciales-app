import useResultadoMapa from '@/hooks/useResultadoMapa'
import { useSeccionesStore } from '@/store/secciones-store'
import { Button, Spinner } from 'flowbite-react'
import { SvgSecciones } from './v2/SeccionesItems2'

export default function Secciones ({ escrutinio }: { escrutinio: string }) {
  const setSeccion = useSeccionesStore((store) => store.selectedSeccion)
  const current = useSeccionesStore((store) => store.currentSeccion)
  const { data: resultMapa, isLoading, isError, refetch } = useResultadoMapa(escrutinio)
  const svgs = resultMapa?.map(value => {
    return SvgSecciones[value.CIRCUITO_CODE](value.COLOR, () => { setSeccion(value.CIRCUITO_CODE) }, current === value.CIRCUITO_CODE, `${value.CIRCUITO_CODE}-${Math.random()}`)
  })
  if (isError) {
    return <h4>...Error al cargar mapa, <Button color="failure" onClick={async () => await refetch()}>Reintentar</Button></h4>
  }

  return (
    <div className='w-full max-w-screen-lg flex items-center justify-center h-[820px]'>
      {isLoading
        ? <Spinner aria-label="Default status example" />
        : <svg viewBox={'10 60 500 400'} >{svgs}</svg>
      }
    </div>
  )
}
