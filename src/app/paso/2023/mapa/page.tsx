'use client'
import CargoSelect from '@/app/components/cargo-select'
import MapaSeccion from '@/app/components/mapa-seccion'
import { Escrutinio } from '@/constance'
import { Card } from 'flowbite-react'

export default function Paso2023 () {
  return (
    <main className='flex flex-col justify-center items-center'>
      <section className='container'>
        <CargoSelect />
      </section>
      <Card className='w-full'>
        <MapaSeccion escrutinio={Escrutinio.Paso2023} />
      </Card>
    </main>
  )
}
