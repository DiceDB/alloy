import axios from "axios";
const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL;

export const WebService = axios.create({
  baseURL: ROOT_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
