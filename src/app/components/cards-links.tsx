'use client'
import { Card } from 'flowbite-react'
import Link from 'next/link'
import ChartSvg from './chart-svg'
import TableSvg from './table-svg'

export default function CardLinks ({ link }: { link: string }) {
  return (
    <>
      <Link href={`/${link}/mapa`} >
        <Card className='w-[300px] h-[300px] hover:shadow-sm-light'>
          <div className='w-full h-[200px]'>
            <img src='/restfront/mapa.webp' alt='Mapa' height={300} width={300} />
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mapa interactivo
          </h5>
        </Card>
      </Link>
      <Link href={`/${link}/graficos`}>
        <Card className='w-[300px] h-[300px] hover:shadow-sm-light'>
          <div className='w-full h-[200px]'>
            <ChartSvg />
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Graficos
          </h5>
        </Card>
      </Link>
      <Link href={`/${link}/mesas-escrutadas`}>
        <Card className='w-[300px] h-[300px] hover:shadow-sm-light'>
          <div className='w-full h-[200px]'>
            <TableSvg />
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mesas escrutadas
          </h5>
        </Card>
      </Link>
      <Link href={`/${link}/reportexcircuitos`}>
        <Card className='w-[300px] h-[300px] hover:shadow-sm-light'>
          <div className='w-full h-[200px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='h-52'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>

          </div>
          <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
            Reporte por circuitos
          </h5>
        </Card>
      </Link>
    </>
  )
}
