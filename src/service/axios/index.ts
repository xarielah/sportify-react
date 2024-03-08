import ax from "axios";

export const axios = ax.create({
  baseURL: import.meta.env.VITE_BACKEND || "http://localhost:3000/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
