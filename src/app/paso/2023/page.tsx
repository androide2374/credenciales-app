import CardLinks from '@/app/components/cards-links'

export default function Page () {
  return (
    <div className='grid justify-center text-center gap-9'>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">PASO 2023</h1>
      <div className='grid w-4/5 justify-start gap-11 grid-flow-col'>
        <CardLinks link='paso/2023' />
      </div>
    </div>
  )
}
