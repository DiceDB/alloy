import axios from 'axios';
let PLAYGROUND_MONO_URL = process.env.NEXT_PUBLIC_PLAYGROUND_MONO_URL;

if (!PLAYGROUND_MONO_URL) {
  console.warn(
    'Warning: NEXT_PUBLIC_BACKEND_URL is not defined. Defaulting to http://localhost:3000',
  );
  PLAYGROUND_MONO_URL = 'http://localhost:8080';
}
export const WebService = axios.create({
  baseURL: PLAYGROUND_MONO_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
