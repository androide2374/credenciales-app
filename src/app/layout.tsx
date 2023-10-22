import '@/styles/globals.css'
import { type Metadata } from 'next'
import RQProvider from './components/RQProvider'
import NavbarWithDropdown from './components/navbar'

export const metadata: Metadata = {
  title: 'Escrutinio Lomas de Zamora',
  description: 'App de Escrutinio Lomas de Zamora'

}

export default function RootLayout ({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <html lang='es'>
      <body className='dark:bg-slate-800 dark: text-white grid '>
        <NavbarWithDropdown />

        <RQProvider>
          {children}
        </RQProvider>
      </body>
    </html>
  )
}
