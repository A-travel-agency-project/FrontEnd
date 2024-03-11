import axios from "axios";

export const instance = axios.create({
  baseURL: "http://13.124.147.192:8080",
  timeout: 3000,
});
