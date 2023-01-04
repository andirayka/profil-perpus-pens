import axios from 'axios'

const api = axios.create({
  baseURL: 'https://profil-perpus-pens-api-production.up.railway.app/',
  // baseURL: 'http://localhost:3000/',
  timeout: 60000,
})

export default api
