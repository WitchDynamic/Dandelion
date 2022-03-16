import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Network from "../Network/Network";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { getUser, getArtists, getRelatedArtists } from "../../api/lib/getters";
import useStyles from "./styles";
import LoadingBar from "../LoadingBar/LoadingBar";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [topArtists, setTopArtists] = useState([]);
  const [relatedArtists, setRelatedArtists] = useState({});
  const [artistLimit, setArtistLimit] = useState(20);
  const [timeRange, setTimeRange] = useState("medium_term");
  const [isLoading, setIsLoading] = useState(true);
  const [showBar, setShowBar] = useState(false);
  const [nodeId, setNodeId] = useState(null);
  const [loadingProgress, setLoadingProgress] = React.useState(0);
  const [graph, setGraph] = useState({ nodes: [], edges: [] });
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
    }
    getUser().then((res) => {
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
        artistLimit={artistLimit}
        setArtistLimit={setArtistLimit}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
      />
      {showBar && (
        <div className={classes.loadingBarDiv}>
          <LoadingBar loadingProgress={loadingProgress} />
        </div>
      )}
      <div className={classes.fullscreen}>
        <Network
          graph={graph}
          setGraph={setGraph}
          topArtists={topArtists}
          relatedArtists={relatedArtists}
          isLoading={isLoading}
          setNodeId={setNodeId}
          setShowBar={setShowBar}
          setLoadingProgress={setLoadingProgress}
        />
        <div className={classes.player}>
          <MusicPlayer nodeId={nodeId} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
