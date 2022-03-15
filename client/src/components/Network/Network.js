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
      improvedLayout: false,
    },
    edges: {
      width: 0.55,
      color: { inherit: "from" },
      smooth: {
        type: "continuous",
      },
    },
    // height: "100%",
    // width: "100%",
    autoResize: true,
    nodes: {
      borderWidth: 2,
      shape: "dot",
      font: {
        color: "white",
      },
    },
    physics: {
      enabled: true,
      stabilization: { iterations: 750, updateInterval: 50 },
      repulsion: {
        centralGravity: 0.0,
        springLength: 50,
        springConstant: 0.01,
        nodeDistance: 200,
        damping: 0.09,
      },
      solver: "repulsion",
      barnesHut: {
        gravitationalConstant: -15000,
        centralGravity: 0.04,
        springLength: 200,
        springConstant: 0.02,
        damping: 0.66,
        avoidOverlap: 1,
      },
      forceAtlas2Based: {
        theta: 0.5,
        gravitationalConstant: -100,
        centralGravity: 0.012,
        springConstant: 0.08,
        springLength: 100,
        damping: 0.4,
        avoidOverlap: 1,
      },
    },
  };
  // setIsLoading(false);
  const events = {
    select: ({ nodes, edges }) => {
      console.log("Selected nodes:");
      console.log(nodes);
      console.log("Selected edges:");
      console.log(edges);
    },
    stabilized: function (event) {
      var { iterations } = event;
      console.log("iterations: " + iterations);
      // Here you should make the graph visible
    },
    startStabilizing: () => {
      console.log("Started stabilizing");
    },
    stabilizationProgress: ({ iterations, total }) => {
      console.log("Network is stabilizing! " + JSON.stringify(iterations));
      document.getElementById("graph-spinner").style.opacity = 1;
    },
    stabilizationIterationsDone: () => {
      console.log("Network has stabilized!");
      document.getElementById("graph-spinner").style.opacity = 0;
    },
  };

  return isLoading ? (
    <Skeleton
      className={classes.skelly}
      animation="wave"
      width="100vw"
      height="100vh"
    />
  ) : (
    <Graph
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
