import 'dotenv/config'

import axios from 'axios'

let baseURL
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8080'
}
else if (process.env.NODE_ENV === 'production') {
  baseURL = process.env.REACT_APP_API_URL
}

console.log(baseURL)
const api = axios.create({ baseURL })

export default api