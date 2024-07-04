import { Navbar, DarkThemeToggle, Button } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Header() {

  const [current, setCurrent] = useState('')
  useEffect(() => {
    const url = location.href.split('/').pop()
    const active = url ? url : ''
    setCurrent(active)
  }, [])

  return (
    <Navbar fluid>
      <Navbar.Brand>
        <img src="/vite.svg" alt="logo" className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MiMarca</span>
      </Navbar.Brand>
      <div className="flex gap-2 md:order-2">
        <Button>SIgn in</Button>
        <Button className="border-cyan-700 bg-transparent text-sm text-black hover:bg-cyan-300">SIgn up</Button>
        <Navbar.Toggle />
        <DarkThemeToggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={current === ''}>Home</Navbar.Link>
        <Navbar.Link href="/about" active={current === 'about'}>About</Navbar.Link>
        <Navbar.Link href="/contact" active={current === 'contact'}>Contact</Navbar.Link>
      </Navbar.Collapse>

    </Navbar>
  )
}
