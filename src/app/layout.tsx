import '@/styles/globals.css'
import { type Metadata } from 'next'
import RQProvider from './components/RQProvider'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

export default function RootLayout ({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <html lang='es'>
      <body className='dark:bg-slate-800 dark: text-white'>
        <RQProvider>
          {children}
        </RQProvider>
      </body>
    </html>
  )
}
