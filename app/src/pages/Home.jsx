import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Hospital, Ambulance, MapPin, Users, TrendingUp, ClipboardList,
  BedDouble, HeartPulse, Siren, Stethoscope, Check, ArrowRight,
} from 'lucide-react'
import { getHospitals, getAmbulances } from '../services/api'

const steps = [
  { icon: Siren, title: 'Report Incident', desc: 'Location and type of emergency are captured in seconds.' },
  { icon: MapPin, title: 'Smart Match', desc: 'Haversine distance finds the nearest hospital with free beds and the closest free ambulance.' },
  { icon: Ambulance, title: 'Dispatch & Track', desc: 'Status updates reach everyone in real time through live updates.' },
]

const features = [
  { icon: Hospital, title: 'Hospital Resources', desc: 'Live bed, ICU and oxygen availability across hospitals.', to: '/hospitals' },
  { icon: Ambulance, title: 'Ambulance Tracking', desc: 'See which ambulances are free, busy or on the way.', to: '/ambulances' },
  { icon: MapPin, title: 'Smart Matching', desc: 'Nearest suitable hospital and ambulance for every incident, using Haversine distance.', to: '/incidents' },
  { icon: Users, title: 'Citizen View', desc: 'A simple public page to find help quickly in an emergency.', to: '/public' },
  { icon: TrendingUp, title: 'Analytics', desc: 'Trends and insights to plan resources better.', to: '/analytics' },
  { icon: ClipboardList, title: 'Audit Trail', desc: 'Every update is logged for accountability.', to: '/audit' },
]

const audiences = [
  {
    icon: Stethoscope,
    title: 'Hospitals',
    points: ['Publish live bed, ICU and oxygen status', 'Reduce overcrowding with better routing', 'Every update is logged in the audit trail'],
  },
  {
    icon: Ambulance,
    title: 'Ambulance Operators',
    points: ['See which hospital has space before leaving', 'Update availability and status quickly', 'Get matched with the nearest incident'],
  },
  {
    icon: Users,
    title: 'Citizens',
    points: ['Find hospitals with free beds nearby', 'A simple view built for stressful moments', 'Works on phone screens too'],
  },
]

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-lg">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Icon size={26} />
      </div>
      <div>
        <p className="text-2xl font-bold text-navy-900">{value}</p>
        <p className="text-sm text-slate-500">{label}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [hospitals, setHospitals] = useState(null)
  const [ambulances, setAmbulances] = useState(null)

  useEffect(() => {
    getHospitals().then(setHospitals)
    getAmbulances().then(setAmbulances)
  }, [])

  const sum = (key) => hospitals.reduce((total, h) => total + h[key], 0)

  const stats = [
    { icon: Hospital, value: hospitals ? hospitals.length : '—', label: 'Hospitals listed' },
    { icon: BedDouble, value: hospitals ? sum('availableBeds') : '—', label: 'Beds available' },
    { icon: HeartPulse, value: hospitals ? sum('icuAvailable') : '—', label: 'ICU beds available' },
    { icon: Ambulance, value: ambulances ? ambulances.filter((a) => a.status === 'available').length : '—', label: 'Ambulances free' },
  ]

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-linear-to-br from-brand-50 via-white to-brand-100">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
            Integrated Emergency Healthcare Resource Management
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-navy-900 md:text-6xl">
            The right care, <span className="text-brand-600">right when it matters.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            One grid to see hospital beds, ambulances and emergencies in real time, so help reaches faster.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/hospitals" className="rounded-full bg-linear-to-r from-brand-600 to-navy-600 px-6 py-3 font-semibold text-white shadow hover:opacity-90">
              Find Hospitals
            </Link>
            <Link to="/incidents" className="rounded-full border border-navy-600 px-6 py-3 font-semibold text-navy-700 hover:bg-navy-50">
              Report Incident
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Live snapshot */}
      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* 3. How it works */}
      <section className="mt-16 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-navy-900">How it works</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
            From the first report to the hospital door, in three steps.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <span className="absolute -top-3 left-6 rounded-full bg-linear-to-r from-brand-600 to-navy-600 px-3 py-1 text-xs font-bold text-white">
                  STEP {i + 1}
                </span>
                <div className="mb-4 mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <s.icon size={26} />
                </div>
                <h3 className="text-lg font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features (hover gradient) */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-navy-900">Everything in one grid</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Modules that work together during an emergency.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.to}
              to={f.to}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-linear-to-br from-brand-700 to-navy-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                  <f.icon size={26} />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 transition-colors duration-300 group-hover:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 transition-colors duration-300 group-hover:text-white/90">
                  {f.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition-colors duration-300 group-hover:text-white">
                  Open <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Who it's for */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-navy-900">Built for everyone in the chain</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <div key={a.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                    <a.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900">{a.title}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-slate-600">
                      <Check size={18} className="mt-0.5 shrink-0 text-brand-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Emergency banner */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-linear-to-r from-brand-700 to-navy-700 px-8 py-12 text-center text-white md:px-16">
          <h2 className="text-3xl font-bold">Need help right now?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Find the nearest hospital with free beds on the Citizen View. In a life-threatening emergency, call 112.
          </p>
          <Link
            to="/public"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 font-semibold text-white shadow-lg hover:bg-red-700"
          >
            <Users size={20} /> Open Citizen View
          </Link>
        </div>
      </section>
    </>
  )
}