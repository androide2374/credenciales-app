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
    </>
  )
}
