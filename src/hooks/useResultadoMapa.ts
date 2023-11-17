import { useQuery } from '@tanstack/react-query'
import ResultadoService from '../services/ResultadoService'
import { useSeccionesStore } from '../store/secciones-store'
import { Escrutinio } from '@/constance'

export default function useResultadoMapa (escrutinio: string) {
  const cargo = useSeccionesStore((store) => store.currentCargo)
  const { data, isLoading, isError, refetch } = useQuery({ queryKey: ['todos', cargo, escrutinio], queryFn: async () => await ResultadoService.getResultadoMapa(escrutinio === Escrutinio.Balotage2023 ? '64C6472A-4900-4F2E-ACEC-027B5ABE4712' : cargo, escrutinio) })

  return { data, isLoading, isError, refetch }
}
