import { useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

const MusicPlayer = ({ nodeId }) => {
  const token = localStorage.getItem("accessToken");
  const [currentId, setCurrentId] = useState(null);
  console.log("Current node id: " + JSON.stringify(nodeId));
  if (!nodeId && !currentId) return <div></div>;
  if (currentId != nodeId && nodeId != null) setCurrentId(nodeId);
  return (
    <SpotifyPlayer
      autoPlay={true}
      showSaveIcon
      syncExternalDeviceInterval
      initialVolume={0.2}
      token={token}
      //play={false}
      uris={[`spotify:artist:${nodeId}`]}
      styles={{
        activeColor: "#2CBAD3",
        bgColor: "#333",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#2CBAD3",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
        sliderHandleColor: "#fff",
      }}
    />
  );
};

export default MusicPlayer;
