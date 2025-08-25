import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const link = 'px-3 py-2 rounded hover:bg-neutral-800'
  return (
    <header className="sticky top-0 z-10 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold">{'<Talisson Damião />'}</Link>
        <nav className="flex gap-1">
          <NavLink to="/" className={link}>Início</NavLink>
          <NavLink to="projects" className={link}>Projects</NavLink>
          <NavLink to="about" className={link}>About</NavLink>
          <NavLink to="contact" className={link}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
