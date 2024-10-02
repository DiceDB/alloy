import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const WebService = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
