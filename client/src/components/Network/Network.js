import React, { useEffect, useState } from "react";
import Graph from "react-graph-vis";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import constructNetwork from "./constructNetwork";

const Network = ({ topArtists, relatedArtists, isLoading }) => {
  const [graph, setGraph] = useState({ nodes: [], edges: [] });
  const [network, setNetwork] = useState({});
  useEffect(() => {
    setGraph(constructNetwork(topArtists, relatedArtists));
  }, [relatedArtists]);

  const classes = useStyles();
  const data = {
    nodes: graph.nodes,
    edges: graph.edges,
  };

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#893BA2",
    },
    height: "1200px",
    nodes: {
      color: "#A84EC4",
      shape: "dot",
      font: {
        color: "white",
      },
    },
    options: {
      physics: {
        enabled: true,
        barnesHut: {
          gravity: -17950,
          centralGravity: 1,
          springLength: 220,
          springStrength: 0.14,
          damping: 0.66,
          overlap: 1,
        },
        stabilization: {
          enabled: true,
          iterations: 2000,
          updateInterval: 2,
        },
      },
      configure: true,
    },
  };

  const events = {
    select: ({ nodes, edges }) => {
      console.log("Selected nodes:");
      console.log(nodes);
      console.log("Selected edges:");
      console.log(edges);
      alert("Selected node: " + nodes);
    },
    stabilized: () => {
      if (network) {
        // Network will be set using getNetwork event from the Graph component
        // network.setOptions({ physics: false }); // Disable physics after stabilization
        network.fit();
      }
    },
    startStabilizing: () => {
      console.log("Started stabilizing");
    },
    stabilizationProgress: (iterations, total) => {
      if (network) {
        console.log("Network is stabilizing! " + iterations + " " + total);
      }
    },
    stabilizationIterationsDone: () => {
      console.log("Network has stabilized!");
    },
  };

  return isLoading ? (
    <Skeleton animation="wave" variant="circular" width={1000} height={1000} />
  ) : (
    <Graph
      className={classes.data}
      style={{ height: "100px" }}
      graph={data}
      options={options}
      events={events}
      getNetwork={(network) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
        setNetwork(network);
      }}
    />
  );
};

export default Network;
