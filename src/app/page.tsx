import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mapa paso 2023',
  description: 'Mapa interactivo paso 2023'
}

export default function Home () {
  return (
    <main className='container'>
      <section className='flex'>
        <h3>Resultados</h3>
        <div>
          <article
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Paso 2023
            </h5>
            <Link href='/paso/2023/mapa' className="font-normal text-gray-700 dark:text-gray-400">
              Mapa interactivo Paso 2023
            </Link>
          </article>
        </div>
      </section>
    </main>
  )
}
