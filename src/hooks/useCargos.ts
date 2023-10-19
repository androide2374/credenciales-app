'use client'
import CombosService from '@/services/CombosService'
import { useSeccionesStore } from '@/store/secciones-store'
import { useEffect } from 'react'

export default function useCargos () {
  const cargos = useSeccionesStore(store => store.cargos)
  const setCargos = useSeccionesStore(store => store.setCargos)
  useEffect(() => {
    CombosService.getCargos()
      .then((res) => {
        setCargos(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return { cargos }
}
