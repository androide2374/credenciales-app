import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { SeccionesData } from '../constance/secciones'
import { type Cargos } from '../domain/cargos'
import { type SeccionesType } from '../types'

interface State {
  secciones: typeof SeccionesData
  cargos: Cargos[]
  currentCargo: string
  currentSeccion: SeccionesType | 'General'
  step: number

  changeStep: (value: number) => void
  selectedSeccion: (seccion: SeccionesType) => void
  selectedCargo: (cargo: string) => void
  setCargos: (cargos: Cargos[]) => void
  reset: () => void
}

export const useSeccionesStore = create<State>()(
  devtools(
    persist(
      (set) => {
        return {
          cargos: [],
          currentCargo: '7446c69a-81f1-42d3-a403-e2a992e97aa4',
          secciones: SeccionesData,
          currentSeccion: 'General',
          step: 0,

          selectedSeccion: (seccion) => {
            set({ currentSeccion: seccion }, false, 'SELECTED_SECCION')
          },

          changeStep (value) {
            set(() => ({ step: value }))
          },

          selectedCargo: (cargo) => {
            set({ currentCargo: cargo }, false, 'SELECTED_CARGO')
          },

          setCargos: (cargos) => {
            set({ cargos }, false, 'SET_CARGOS')
          },

          reset: () => {
            set({ currentSeccion: 'General' }, false, 'RESET')
          }
        }
      },
      { name: 'Secciones' }
    )
  )
)
