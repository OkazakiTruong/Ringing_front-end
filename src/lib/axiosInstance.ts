import axios from "axios";

const env = import.meta.env;
console.log("env.BASE_URL", import.meta.env.VITE_API_URL);

const axiosInstance = axios.create({
  baseURL: env.VITE_API_URL || "http://localhost:3000/ringing-v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (env.VITE_ENVIRONMENT === "development") {
      console.log("Request:", config.method?.toUpperCase(), config.url);
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
