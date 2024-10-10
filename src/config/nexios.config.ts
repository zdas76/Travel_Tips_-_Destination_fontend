import { cookies } from "next/headers";
import { Nexios } from "nexios-http";

const nexiosInstance = new Nexios({
  baseURL: `http://localhost:5000/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },

  timeout: 10000,
});

nexiosInstance.interceptors.request.use(
  function (config) {
    const cookiesStore = cookies();
    const accessToken = cookiesStore.get("accessToken")?.value;

    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `${accessToken}`,
      };
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
nexiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default nexiosInstance;
