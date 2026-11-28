import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from './Logo'

const modules = [
  { to: '/hospitals', label: 'Hospitals' },
  { to: '/ambulances', label: 'Ambulances' },
  { to: '/incidents', label: 'Incidents' },
  { to: '/public', label: 'Citizen View' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/audit', label: 'Audit' },
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-navy-900 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-white p-1.5">
                <Logo className="h-7 w-7" />
              </span>
              <span className="text-xl font-bold text-white">
                Sanjeevani<span className="text-brand-500">Grid</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              An integrated emergency healthcare resource management system, connecting hospitals, ambulances and citizens.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Modules</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {modules.map((m) => (
                <li key={m.to}>
                  <Link to={m.to} className="text-slate-400 transition hover:text-brand-500">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Project</h4>
            <p className="mt-4 text-sm text-slate-400">Final Year Project</p>
            <p className="mt-1 text-sm text-slate-400">Built with React, Tailwind CSS and Vite</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-sm text-slate-500">
          © 2026 SanjeevaniGrid
        </div>
      </footer>
    </div>
  )
}