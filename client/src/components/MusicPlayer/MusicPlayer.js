import { useState } from "react";
import useStyles from "./styles";
import SpotifyPlayer from "react-spotify-web-playback";
import SpotifyLogo from "../../images/Spotify_Logo_RGB_White.png";

const MusicPlayer = ({ nodeId }) => {
  const token = localStorage.getItem("accessToken");
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  //console.log("Current node id: " + JSON.stringify(nodeId));
  if (!nodeId && !currentId) return <div></div>;
  if (currentId != nodeId && nodeId != null) setCurrentId(nodeId);

  return (
    <>
      <img
        src={SpotifyLogo}
        className={classes.spotifyLogo}
        alt="Spotify Logo"
      />
      <SpotifyPlayer
        autoPlay={true}
        showSaveIcon
        syncExternalDeviceInterval
        initialVolume={0.2}
        token={token}
        //play={false}
        uris={[`spotify:artist:${nodeId}`]}
        styles={{
          activeColor: "#fff",
          bgColor: "#333",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#2CBAD3",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
          sliderHandleColor: "#fff",
        }}
      />
    </>
  );
};

export default MusicPlayer;
