import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '📝 Escrutinio Lomas de Zamora',
  description: 'Escrutinio Lomas de Zamora'
}

export default function Home () {
  return (
    <main className='w-full flex justify-center items-center mt-20'>
      <section className='flex flex-col text-center gap-8'>
        {/* <h1>Resultados</h1> */}
        <div className='flex md:flex-row flex-col gap-8'>
          <article
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow w-80 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Paso 2023
            </h5>
            <ul>
              <li>
                <Link href='/paso/2023/mapa' className="font-normal text-gray-700 dark:text-gray-400">
                  Mapa interactivo
                </Link>
              </li>
              <li>
                <Link href='/paso/2023/graficos' className="font-normal text-gray-700 dark:text-gray-400">
                  Graficos
                </Link>
              </li>
              <li>
                <Link href='/paso/2023/mesasescrutadas' className="font-normal text-gray-700 dark:text-gray-400">
                  Mesas Escrutadas
                </Link>
              </li>
            </ul>
          </article>
          <article
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow w-80 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Generales
            </h5>
            <ul>
              <li>
                <Link href='/generales/2023/mapa' className="font-normal text-gray-700 dark:text-gray-400">
                  Mapa interactivo
                </Link>
              </li>
              <li>
                <Link href='/generales/2023/graficos' className="font-normal text-gray-700 dark:text-gray-400">
                  Graficos
                </Link>
              </li>
              <li>
                <Link href='/generales/2023/mesasescrutadas' className="font-normal text-gray-700 dark:text-gray-400">
                  Mesas Escrutadas
                </Link>
              </li>
            </ul>
          </article>

        </div>
      </section>
    </main>
  )
}
