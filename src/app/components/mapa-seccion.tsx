import Detalle from './detalle'
import Secciones from './mapsvg'

export default function MapaSeccion ({ escrutinio }: { escrutinio: string }) {
  return (
    <section className='flex md:flex-row items-stretch flex-col-reverse'>
      <Secciones escrutinio={escrutinio} />
      <Detalle escrutinio={escrutinio} />
    </section>
  )
}
