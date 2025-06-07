import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://leetlab-production.up.railway.app/api/v1",
  withCredentials: true,
});
