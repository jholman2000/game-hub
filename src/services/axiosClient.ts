import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.rawg.io/api", //import.meta.env.RAWG_API_URL,
  params: {
    key: "df986ad41b884d66a7a19be9997d0546", //import.meta.env.RAWG_API_KEY,
  },
  timeout: 10000,
});

// Optional: attach auth token
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Optional: global error handling
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  },
);

export default axiosClient;
