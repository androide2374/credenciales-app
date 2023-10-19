import { type ResultadoDetalle } from '@/domain/result'

function addAlpha (color: string, opacity: number) {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
  return color + _opacity.toString(16).toUpperCase()
}
function getAvatar (name: string) {
  const data = name.split(' ')

  return data.slice(0, 2).map(x => x.slice(0, 1).toUpperCase()).join('')
}
export interface Props extends ResultadoDetalle {}
export default function Item ({ AGRUPACION, COLOR, FOTO, PORCENTAJE, VOTOS_AGRUPACION, NOMBRE, APELLIDO }: Props) {
  return (
    <main className='mt-3'>
      <section className='flex flex-row justify-between'>
        <span className='text-2xl font-semibold' style={{ color: COLOR }}>
          {AGRUPACION}
        </span>
      </section>
      <hr />
      <section className='flex flex-row justify-between items-center gap-10 mt-2'>

        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          {
            FOTO
              // eslint-disable-next-line @next/next/no-img-element
              ? <img className="w-10 h-10 rounded-full" src={`/restfront/${FOTO}`} alt="AGRUPACION" />
              : <span className="font-medium text-gray-600 dark:text-gray-300">{getAvatar(AGRUPACION)}</span>
          }
        </div>

        <div className='flex-1'>
          <h3 className='uppercase font-semibold'>
            {NOMBRE} - {APELLIDO}
          </h3>

          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700" style={{ backgroundColor: addAlpha(COLOR, 0.3) }}>
            <div className="h-2.5 rounded-full" style={{ width: `${PORCENTAJE}%`, backgroundColor: COLOR }}></div>
          </div>

          {/* <LinearProgress
            variant="determinate"
            sx={{
              '& .MuiLinearProgress-bar1Determinate': {
                backgroundColor: COLOR
              },
              bgcolor: addAlpha(COLOR, 0.3),
              marginTop: 1,
              marginBottom: 1
            }}
            value={PORCENTAJE}
          /> */}
          <h3>
            {VOTOS_AGRUPACION} votos
          </h3>
        </div>
        <h3>
          {PORCENTAJE} %
        </h3>
      </section>
    </main>
  )
}
