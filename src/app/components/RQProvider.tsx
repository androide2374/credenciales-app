'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Flowbite } from 'flowbite-react'
const queryClient = new QueryClient()

export default function RQProvider ({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <Flowbite theme={{ dark: true }}>
      {/* <DarkThemeToggle /> */}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Flowbite>
  )
}
