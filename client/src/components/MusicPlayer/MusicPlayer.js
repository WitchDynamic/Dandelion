import SpotifyPlayer from "react-spotify-web-playback";

const MusicPlayer = ({ nodeId }) => {
  const token = localStorage.getItem("accessToken");
  console.log("Current node id: " + JSON.stringify(nodeId));
  if (!nodeId) return <div></div>;
  return (
    <SpotifyPlayer
      autoPlay={true}
      showSaveIcon
      syncExternalDeviceInterval
      initialVolume={0.2}
      token={token}
      //play={false}
      uris={[`spotify:artist:${nodeId}`]}
    />
  );
};

export default MusicPlayer;
