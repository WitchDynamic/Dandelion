import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Filters from "../Filters/Filters";
import Navbar from "../Navbar/Navbar";
import Network from "../Network/Network";
import { Container } from "@material-ui/core";
import { setToken } from "../../actions/auth";
import { getUser, getArtists, getRelatedArtists } from "../../api/lib/getters";
import constructNetwork from "../Network/constructNetwork";
import useStyles from "./styles";
import "./styles.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [topArtists, setTopArtists] = useState([]);
  const [relatedArtists, setRelatedArtists] = useState({});
  const [artistLimit, setArtistLimit] = useState(20);
  const [timeRange, setTimeRange] = useState("medium_term");
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

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
      //dispatch(setToken(accessToken));
    }
    getUser().then((res) => {
      //console.log(res);
      setUser(res);
    });

    const relatedArtistHelper = async (artistId) => {
      const {
        data: { artists },
      } = await getRelatedArtists(artistId);
      return artists;
    };

    const fetchRelatedArtists = async (artistList) => {
      let nodes = {};
      for (let artist = 0; artist < artistList.length; artist++) {
        const relatedArtist = await relatedArtistHelper(artistList[artist].id);
        nodes = { ...nodes, [artistList[artist].id]: relatedArtist };
      }
      console.log(nodes);
      setRelatedArtists(nodes);
      setIsLoading(false);
    };

    const fetchTopArtists = async () => {
      setIsLoading(true);
      const {
        data: { items },
      } = await getArtists(artistLimit, timeRange);
      setTopArtists(items);
      //makes sure items is defined before calling fetchRelatedArtists
      fetchRelatedArtists(items);
    };
    fetchTopArtists();
  }, [artistLimit, timeRange]);

  return (
    <>
      <Navbar
        name={user?.display_name}
        profile={user?.external_urls.spotify}
        img={user?.images[0]?.url}
      />
      <Container>
        <Filters
          artistLimit={artistLimit}
          setArtistLimit={setArtistLimit}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />
      </Container>

      <div className={classes.fullscreen}>
        <Network
          topArtists={topArtists}
          relatedArtists={relatedArtists}
          isLoading={isLoading}
        />
        <div className="loader" id="graph-spinner"></div>
      </div>
    </>
  );
};

export default Dashboard;
