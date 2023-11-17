'use client'

import { Navbar } from 'flowbite-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavbarWithDropdown () {
  const pathName = usePathname()
  return (
    <Navbar rounded>
      <Navbar.Brand>
        <Link href='/'>
          <img src="/restfront/icono.png" className="mr-3 h-6 sm:h-9" alt="Icono" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">UPLZ</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href='/' active={pathName === '/'}>
          Inicio
        </Navbar.Link>
        <Navbar.Link as={Link} href="/paso/2023" active={pathName.includes('/paso/2023')}>Paso 2023</Navbar.Link>
        <Navbar.Link as={Link} href="/generales/2023" active={pathName.includes('/generales/2023')}>Generales 2023</Navbar.Link>
        <Navbar.Link as={Link} href="/balotage/2023" active={pathName.includes('/balotage/2023')}>Balotage 2023</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
