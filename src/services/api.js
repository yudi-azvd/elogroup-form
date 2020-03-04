import 'dotenv/config'

import axios from 'axios'

console.log(process.env.REACT_APP_API_URL)

let baseURL
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8080'
}

const api = axios.create({
  // API_URL só é definido em ambiente de produção
  baseURL:  process.env.REACT_APP_API_URL || 'http://localhost:8080'
})

export default api