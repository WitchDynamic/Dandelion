import axios from "axios";

const url = "http://localhost:5000";

export const spotiClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
  //   headers: {
  //     Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //   },
});

spotiClient.interceptors.request.use(async (config) => {
  //Check token expiration
  if (
    Math.floor(new Date().getTime() / 1000.0) >
    localStorage.getItem("expiration")
  ) {
    const { data } = await axios.post(`${url}/refresh_token`, {
      refresh_token: localStorage.getItem("refreshToken"),
    });
    const expiration =
      Math.floor(new Date().getTime() / 1000.0) + data.expires_in;
    localStorage.setItem("accessToken", data.access_token);
    localStorage.setItem("expiration", expiration);
  }
  // Append headers to api reqs
  let token = localStorage.getItem("accessToken");
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});
