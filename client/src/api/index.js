import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// API.interceptors.request.use(() => {
//   if (
//     Math.floor(new Date().getTime() / 1000.0) >
//     localStorage.getItem("expiration")
//   ) {
//     // accessToken has expired
//     const resp = API.post(
//       "/refresh_token",
//       localStorage.getItem("refreshToken")
//     );
//     // const { data } = ^^^ ?
//     console.log("resp in interceptor: " + resp);
//     localStorage.setItem("accessToken", resp);
//   }
// });

export const getUser = () =>
  API.post("/get_user", { accessToken: localStorage.getItem("accessToken") });

export const getArtists = async (e) => {
  console.log("In getArtists, here is the token");
  // e.preventDefault();
  console.log(localStorage.getItem("accessToken"));
  const { data } = await axios.get(
    "https://api.spotify.com/v1/me/top/artists",
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      // params: {
      //   limit: 20,
      //   offset: 0,
      //   time_range: "long_term",
      // },
    }
  );
  console.log("returning " + JSON.stringify(data));
  return data;
};
