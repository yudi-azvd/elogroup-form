import 'dotenv/config'

import axios from 'axios'

const api = axios.create({
  // API_URL só é definido em ambiente de produção
  baseURL:  process.env.API_URL || 'http://localhost:8080'
})

export default api