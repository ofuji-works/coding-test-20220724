import axios from "axios"
import { API_URL } from "config"

export const client = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
  },
  responseType: "json",
})
