import axios from "axios";
import { ROOT_URL } from "@/shared/constants/apiEndpoints";

export const WebService = axios.create({
  baseURL: ROOT_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
