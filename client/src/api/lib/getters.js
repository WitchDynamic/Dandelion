import { spotiClient } from "../spotiClient";

export const getArtists = async () => {
  const data = await spotiClient
    .get("/me/top/artists", {
      params: { limit: 5, offset: 0, time_range: "long_term" },
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getUser = async () => {
  //console.log("in getUser accesstoken: " + localStorage.getItem("accessToken"));
  const { data } = await spotiClient.get("/me");
  return data;
};

export const getRelatedArtists = async (artistId) => {
  const data = await spotiClient.get(`/artists/${artistId}/related-artists`);
  return data;
};
