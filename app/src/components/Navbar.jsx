import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/hospitals', label: 'Hospitals' },
  { to: '/ambulances', label: 'Ambulances' },
  { to: '/incidents', label: 'Incidents' },
  { to: '/public', label: 'Citizen View' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/audit', label: 'Audit' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="brand">SanjeevaniGrid</span>
      <ul>
        {links.map((l) => (
          <li key={l.to}>
            <NavLink to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}