import { useEffect, useState } from 'react'
import { getHospitals } from '../services/api'

export default function Hospitals() {
  const [hospitals, setHospitals] = useState(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    getHospitals().then(setHospitals)
  }, [])

  if (!hospitals) return <p className="p-8 text-slate-500">Loading...</p>

  const filtered = hospitals.filter((h) =>
    `${h.name} ${h.area}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-navy-900">Hospitals</h1>
      <p className="mt-1 text-slate-600">Live bed and ICU availability</p>

      <input
        className="mt-6 w-full max-w-sm rounded-lg border border-slate-200 px-4 py-2 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        placeholder="Search by name or area"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((h) => (
          <div key={h.id} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-navy-900">{h.name}</h3>
                <p className="text-sm text-slate-500">{h.area}</p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  h.availableBeds > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {h.availableBeds > 0 ? 'Beds available' : 'Full'}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-brand-50 p-3">
                <p className="text-slate-500">Beds</p>
                <p className="text-lg font-semibold text-brand-700">
                  {h.availableBeds}
                  <span className="text-sm font-normal text-slate-400"> / {h.totalBeds}</span>
                </p>
              </div>
              <div className="rounded-lg bg-brand-50 p-3">
                <p className="text-slate-500">ICU</p>
                <p className="text-lg font-semibold text-brand-700">{h.icuAvailable}</p>
              </div>
            </div>

            <p className={`mt-3 text-sm ${h.oxygen ? 'text-emerald-600' : 'text-red-600'}`}>
              ● {h.oxygen ? 'Oxygen available' : 'No oxygen'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}