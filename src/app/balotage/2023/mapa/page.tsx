'use client'
import MapaSeccion from '@/app/components/mapa-seccion'
import { Escrutinio } from '@/constance'
import { Card } from 'flowbite-react'

export default function Generales2023 () {
  return (
    <main className='flex flex-col justify-center items-center'>
      <Card className='w-full'>
        <MapaSeccion escrutinio={Escrutinio.Balotage2023} />
      </Card>
    </main>
  )
}
