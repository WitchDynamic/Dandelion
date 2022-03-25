import { spotiClient } from "../spotiClient";

export const getArtists = async (artistLimit, timeRange) => {
  const data = await spotiClient
    .get("/me/top/artists", {
      params: { limit: artistLimit, offset: 0, time_range: timeRange },
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getUser = async () => {
  //console.log("in getUser accesstoken: " + localStorage.getItem("accessToken"));
  const { data } = await spotiClient.get("/me");
  window.location.hash = "";
  return data;
};

export const getRelatedArtists = async (artistId) => {
  const data = await spotiClient.get(`/artists/${artistId}/related-artists`);
  return data;
};
