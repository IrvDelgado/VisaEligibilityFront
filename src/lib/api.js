import axios from 'axios'

const API_BASE_URL = 'https://api.pronostika.top/api/v1' 
const Local_API_BASE_URL = 'http://localhost:3000/api/v1' // Local development URL

// API Key para autenticación
const API_KEY = 'dev-visa-checker-key-2024'

// Configurar headers por defecto con la API key
const apiClient = axios.create({
  headers: {
    'X-API-Key': API_KEY,
    'Content-Type': 'application/json'
  }
})

export async function checkEligibility(data) {
  // Use the local API base URL if running in development mode
  const res = await apiClient.post(`${API_BASE_URL}/visa/eligibility`, data)
  return res.data
}