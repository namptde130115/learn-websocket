import axios from "axios";
import * as queryString from "query-string";
import constants from "../constants";

const axiosClient = axios.create({
  withCredentials: true,
  baseURL: constants.URL_API,
  headers: {
    "content-type": "application/json",
  },

  paramsSerializer: (params) => queryString.stringify(params),
});

// axiosClient.interceptors.request.use((config) => {
//   const accessToken = getToken("accessToken");
//   if (accessToken) {
//     config.headers["set-cookie"] = "Authorize=" + accessToken;
//   }
//   return config;
// });

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    if (error.response) {
      console.log('error', error.response)
      if (error.response.status === 401 && error.response.config.url !== "/auth/sign_in_admin") {
        const domain = process.env.REACT_APP_DOMAIN;
        localStorage.removeItem("persist:root");
        localStorage.removeItem('token');
        window.location.href = `http://admin.${domain}/login`;
      }
      return error.response;
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
