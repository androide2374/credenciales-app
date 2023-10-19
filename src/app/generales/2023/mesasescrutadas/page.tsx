import TablaMesasEscrutadas from '@/app/components/mesas-escrutadas'
import { Escrutinio } from '@/constance'

export default function page () {
  return (
    <div><TablaMesasEscrutadas escrutinio={Escrutinio.Generales2023} /></div>
  )
}
