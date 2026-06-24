import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.freeapi.app/api"
})