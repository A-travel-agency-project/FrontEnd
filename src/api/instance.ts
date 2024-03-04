import axios from "axios";

export const baseInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
});
