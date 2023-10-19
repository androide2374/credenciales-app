'use client'
import CargoSelect from '@/app/components/cargo-select'
import Detalle from '@/app/components/detalle'
import Secciones from '@/app/components/mapsvg'
import { Card } from 'flowbite-react'

export default function Paso2023 () {
  return (
    <main className='flex flex-col justify-center items-center'>
      <section className='container'>
        <CargoSelect />
      </section>
      <Card className='w-full'>
        <section className='flex flex-row items-stretch'>
          <Secciones />
          <Detalle />
        </section>
      </Card>
    </main>
  )
}
