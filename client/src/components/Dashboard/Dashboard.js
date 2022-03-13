import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Filters from "../Filters/Filters";
import Navbar from "../Navbar/Navbar";
import Network from "../Network/Network";
import { Container } from "@material-ui/core";
import { setToken } from "../../actions/auth";
import { getUser, getArtists, getRelatedArtists } from "../../api/lib/getters";
import constructNetwork from "../Network/constructNetwork";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [topArtists, setTopArtists] = useState([]);
  const [relatedArtists, setRelatedArtists] = useState({});
  const [artistNodes, setArtistNodes] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      const urlParams = new URLSearchParams(window.location.hash);
      const accessToken = urlParams.get("#access_token");
      const refreshToken = urlParams.get("refresh_token");
      const expiresIn = urlParams.get("expires_in");
      //convert to epoch
      const expiration = Math.floor(new Date().getTime() / 1000.0) + expiresIn;
      //save in local storage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("expiration", expiration);
      dispatch(setToken(accessToken));
    }

    getUser().then((res) => {
      setUser(res);
    });
    getArtists().then((artists) => {
      setTopArtists(artists.data.items);
    });
  }, []);

  if (topArtists.length > 0) {
    console.log("artists: " + JSON.stringify(topArtists));
  }

  return (
    <>
      <Navbar
        name={user?.display_name}
        profile={user?.external_urls.spotify}
        img={user?.images[0]?.url}
      />
      <Container>
        <Filters />
        <Network nodes={artistNodes} />
      </Container>
    </>
  );
};

export default Dashboard;
