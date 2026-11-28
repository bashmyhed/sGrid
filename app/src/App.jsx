import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Hospitals from './pages/Hospitals'
import Ambulances from './pages/Ambulances'
import Incidents from './pages/Incidents'
import Public from './pages/Public'
import Analytics from './pages/Analytics'
import Audit from './pages/Audit'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/ambulances" element={<Ambulances />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/public" element={<Public />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  )
}