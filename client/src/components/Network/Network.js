import React, { useEffect, useState } from "react";
import Graph from "react-graph-vis";
import { Container } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import useStyles from "./styles";
import constructNetwork from "./constructNetwork";
//import "./styles.css";

const Network = ({ topArtists, relatedArtists }) => {
  const [graph, setGraph] = useState({ nodes: [], edges: [] });
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
      },
      configure: true,
    },
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
  };

  return (
    <Graph
      className={classes.data}
      style={{ height: "100px" }}
      graph={data}
      options={options}
      events={events}
      getNetwork={(network) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
};

export default Network;
