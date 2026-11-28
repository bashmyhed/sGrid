import { hospitals, ambulances } from './mockData'

// Backend ready hole USE_MOCK = false koro
const USE_MOCK = true
// Port ta placeholder, Pranoy er server er asol port jene bodle nio
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

async function request(path) {
  const res = await fetch(`${BASE_URL}${path}`)
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json()
}

export async function getHospitals() {
  if (USE_MOCK) return hospitals
  return request('/api/hospitals')
}

export async function getAmbulances() {
  if (USE_MOCK) return ambulances
  return request('/api/ambulances')
}