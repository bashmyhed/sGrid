import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/hospitals', label: 'Hospitals' },
  { to: '/ambulances', label: 'Ambulances' },
  { to: '/incidents', label: 'Incidents' },
  { to: '/public', label: 'Citizen View' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/audit', label: 'Audit' },
]

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:text-brand-700'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-navy-700">
        Sanjeevani<span className="text-brand-500">Grid</span>
        </Link>

        <ul className="hidden gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/public"
          className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Emergency
        </Link>
      </nav>
    </header>
  )
}