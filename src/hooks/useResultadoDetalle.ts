import { useQuery } from '@tanstack/react-query'
import ResultadoService from '../services/ResultadoService'
import { useSeccionesStore } from '../store/secciones-store'

export default function useResultadoDetalle () {
  const currentSeccion = useSeccionesStore(store => store.currentSeccion)
  const cargo = useSeccionesStore((store) => store.currentCargo)
  const { data, isLoading, isError, refetch } = useQuery({ queryKey: ['resultadoDetalle', cargo, currentSeccion], queryFn: async () => await ResultadoService.getResultadoDetalle({ cargo, circuito: currentSeccion as string | undefined }) })

  return { data, isLoading, isError, refetch }
}
