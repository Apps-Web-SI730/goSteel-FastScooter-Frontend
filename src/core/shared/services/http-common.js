import axios from "axios"

const API_BASE_URL = "https://localhost:44312/"
// const API_BASE_URL = ''

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-type": "application/json" }
})

export default http;