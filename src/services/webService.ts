import axios from "axios";
let BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!BACKEND_URL) {
  console.warn(
    "Warning: NEXT_PUBLIC_BACKEND_URL is not defined. Defaulting to http://localhost:3000"
  );
  BACKEND_URL = "http://localhost:8080";
}
export const WebService = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
