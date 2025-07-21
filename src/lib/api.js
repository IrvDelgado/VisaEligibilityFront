import axios from 'axios'

const API_BASE_URL = 'https://api.pronostika.top/api/v1' // actualiza si cambia

export async function checkEligibility(data) {
  const res = await axios.post(`${API_BASE_URL}/visa/eligibility`, data)
  return res.data
}