import CircuitosEscrutadosChart from '@/app/components/charts/circuitos-escrutados'
import { PorcentajeCargoChart } from '@/app/components/charts/pie-chart'
import { Escrutinio } from '@/constance'

export default function Graficos () {
  return (
    <main className='w-full grid place-items-center'>

      <div className='w-4/5'>
        <h1 className='text-5xl mb-5 text-center font-bold'>GRAFICOS PASO 2023</h1>
        <div
      className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          <PorcentajeCargoChart escrutinio={Escrutinio.Paso2023} />
          <CircuitosEscrutadosChart escrutinio={Escrutinio.Paso2023} />
        </div>
      </div>
    </main>
  )
}
