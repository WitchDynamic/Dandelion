import axios from "axios";

export const getUser = async () => {
  try {
    const resp = await axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      });
  } catch (err) {
    console.log(err.response);
  }
};
