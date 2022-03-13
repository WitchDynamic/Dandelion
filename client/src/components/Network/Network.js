import React from "react";
import Graph from "react-graph-vis";
import { Container } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import useStyles from "./styles";
//import "./styles.css";

const Network = ({ nodes }) => {
  const classes = useStyles();
  const graph = {
    nodes: nodes,
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ],
  };

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#893BA2",
    },
    height: "500px",
    nodes: {
      color: "#A84EC4",
      shape: "dot",
      font: {
        color: "white",
      },
    },
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
  };

  return (
    <Graph
      className={classes.graph}
      style={{ height: "100px" }}
      graph={graph}
      options={options}
      events={events}
      getNetwork={(network) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
};

export default Network;
