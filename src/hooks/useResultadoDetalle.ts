import { useQuery } from '@tanstack/react-query'
import ResultadoService from '../services/ResultadoService'
import { useSeccionesStore } from '../store/secciones-store'
import { Escrutinio } from '@/constance'

export default function useResultadoDetalle (escrutinio: string, refeshInterval: number | null = 1000) {
  const currentSeccion = useSeccionesStore(store => store.currentSeccion)
  const cargo = useSeccionesStore((store) => store.currentCargo)
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['resultadoDetalle', cargo, currentSeccion, escrutinio],
    queryFn: async () => await ResultadoService.getResultadoDetalle({ cargo: escrutinio === Escrutinio.Balotage2023 ? '64C6472A-4900-4F2E-ACEC-027B5ABE4712' : cargo, circuito: currentSeccion as string | undefined, escrutinio }),
    refetchInterval: refeshInterval ?? 1000
  })

  return { data, isLoading, isError, refetch }
}
