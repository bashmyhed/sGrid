import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Siren } from 'lucide-react'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/hospitals', label: 'Hospitals' },
  { to: '/ambulances', label: 'Ambulances' },
  { to: '/incidents', label: 'Incidents' },
  { to: '/public', label: 'Citizen View' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/audit', label: 'Audit' },
]

const desktopLink = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-base font-medium transition ${
    isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-700'
  }`

const mobileLink = ({ isActive }) =>
  `block rounded-lg px-4 py-3 text-base font-medium ${
    isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-10 w-10" />
          <span className="text-xl font-bold tracking-tight text-navy-700 sm:text-2xl">
            Sanjeevani<span className="text-brand-500">Grid</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={desktopLink}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/public"
            className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-red-700 sm:px-5"
          >
            <Siren size={18} />
            <span className="hidden sm:inline">Emergency</span>
          </Link>
          <button
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={mobileLink} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}