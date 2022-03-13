import axios from "axios";

export const spotiClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
  //   headers: {
  //     Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //   },
});

spotiClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = localStorage.getItem("accessToken");
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});
