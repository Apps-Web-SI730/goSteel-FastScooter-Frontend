import axios from "axios"

const API_BASE_URL = "http://localhost:5087/"
// const API_BASE_URL = ''

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-type": "application/json" }
})

export default http;