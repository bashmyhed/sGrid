import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-slate-100 py-6 text-center text-sm text-slate-500">
        © 2026 SanjeevaniGrid · Emergency Healthcare Resource Management
      </footer>
    </div>
  )
}