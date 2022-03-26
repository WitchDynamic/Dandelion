const constructNetwork = (topArtists, relatedArtists) => {
  const artistNodes = [];
  const artistEdges = [];

  topArtists.map((artist) => {
    artistNodes.push({
      id: artist.id,
      label: artist.name,
      title: artist.name,
      color: {
        border: "#2498AC",
        background: "#2CBAD3",
        highlight: {
          border: "#3DC0D6",
          background: "#90DBE8",
        },
      },
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
          color: {
            border: "#913fab",
            background: "#a84ec4",
            highlight: {
              border: "#913fab",
              background: "#ca5bed",
            },
          },
          size: 10,
        });
      }
    });
  });
  //console.log("Returning artistNodes2: " + JSON.stringify(artistNodes));
  return { nodes: artistNodes, edges: artistEdges };
};

export default constructNetwork;
