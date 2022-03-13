import { logout } from "../../actions/auth";

const constructNetwork = (topArtists, relatedArtists) => {
  // console.log(
  //   "in construct newtork (relatedArtists): " + JSON.stringify(relatedArtists)
  // );
  // console.log(
  //   "in construct network (topArtists): " + JSON.stringify(topArtists)
  // );
  const artistNodes = [];
  const artistEdges = [];

  topArtists.map((artist) => {
    artistNodes.push({
      id: artist.id,
      label: artist.name,
      title: artist.name,
      color: "#1DB954",
      size: 10,
    });
  });

  Object.keys(relatedArtists).map((fromArtist) => {
    relatedArtists[fromArtist].map((artist) => {
      let skip = false;
      artistNodes.forEach((node) => {
        if (node.id == artist.id) {
          skip = true;
          let index = artistNodes.findIndex((artist) => artist.id == node.id);
          artistNodes[index].size += 5;
        }
      });
      artistEdges.push({
        from: fromArtist,
        to: artist.id,
        arrows: { to: { enabled: false } },
        color: { inherit: "from" },
      });
      if (!skip) {
        artistNodes.push({
          id: artist.id,
          label: artist.name,
          title: artist.name,
          color: "purple",
          size: 10,
        });
      }
    });
  });
  //console.log("Returning artistNodes2: " + JSON.stringify(artistNodes));
  return { nodes: artistNodes, edges: artistEdges };
};

export default constructNetwork;
