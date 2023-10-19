import { useQuery } from '@tanstack/react-query'
import ResultadoService from '../services/ResultadoService'
import { useSeccionesStore } from '../store/secciones-store'

export default function useResultadoMapa (escrutinio: string) {
  const cargo = useSeccionesStore((store) => store.currentCargo)
  const { data, isLoading, isError, refetch } = useQuery({ queryKey: ['todos', cargo, escrutinio], queryFn: async () => await ResultadoService.getResultadoMapa(cargo, escrutinio) })

  return { data, isLoading, isError, refetch }
}
