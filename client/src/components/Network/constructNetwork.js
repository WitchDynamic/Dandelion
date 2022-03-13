import { logout } from "../../actions/auth";

const constructNetwork = (topArtists) => {
  //   console.log(
  //     "in construct newtork (relatedArtists): " + JSON.stringify(relatedArtists)
  //   );
  console.log(
    "in construct network: (topArtists) " + JSON.stringify(topArtists)
  );
  const artistNodes = [];
  const artistEdges = [];

  topArtists.map((artist) => {
    artistNodes.push({
      id: artist.id,
      label: artist.name,
      title: artist.name,
      color: "green",
    });
  });

  //   Object.keys(relatedArtists).map((fromArtist) => {
  //     relatedArtists[fromArtist].map((artist) => {
  //       artistNodes.push({
  //         id: artist.id,
  //         label: artist.name,
  //         title: artist.name,
  //         color: "purple",
  //       });
  //     });
  //   });
  console.log("Returning artistNodes2: " + artistNodes);
  return artistNodes;
};

export default constructNetwork;
