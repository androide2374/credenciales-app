import { useQuery } from '@tanstack/react-query'
import ResultadoService from '../services/ResultadoService'
import { useSeccionesStore } from '../store/secciones-store'

export default function useResultadoMapa () {
  const cargo = useSeccionesStore((store) => store.currentCargo)
  const { data, isLoading, isError, refetch } = useQuery({ queryKey: ['todos', cargo], queryFn: async () => await ResultadoService.getResultadoMapa(cargo) })

  return { data, isLoading, isError, refetch }
}
