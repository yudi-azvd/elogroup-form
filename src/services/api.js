import 'dotenv/config'

import axios from 'axios'

console.log(process.env.REACT_APP_API_URL)

let baseURL
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8080'
}
else if (process.env.NODE_ENV === 'production') {
  baseURL = process.env.REACT_APP_API_URL
}

const api = axios.create({ baseURL })

export default api