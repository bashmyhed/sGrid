import { Link } from 'react-router-dom'

const features = [
  { icon: '🏥', title: 'Hospital Resources', desc: 'Live bed, ICU and oxygen availability across hospitals.', to: '/hospitals' },
  { icon: '🚑', title: 'Ambulance Tracking', desc: 'See which ambulances are free, busy or on the way.', to: '/ambulances' },
  { icon: '📍', title: 'Smart Matching', desc: 'Nearest suitable hospital and ambulance for every incident, using Haversine distance.', to: '/incidents' },
  { icon: '👥', title: 'Citizen View', desc: 'A simple public page to find help quickly in an emergency.', to: '/public' },
  { icon: '📊', title: 'Analytics', desc: 'Trends and insights to plan resources better.', to: '/analytics' },
  { icon: '📋', title: 'Audit Trail', desc: 'Every update is logged for accountability.', to: '/audit' },
]

export default function Home() {
  return (
    <>
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
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-xl">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-navy-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}