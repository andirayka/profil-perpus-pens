import axios from 'axios'

const api = axios.create({
  baseURL: 'https://long-cyan-scorpion-gown.cyclic.app/',
  // baseURL: 'http://localhost:3000/',
  timeout: 60000,
})

export default api
