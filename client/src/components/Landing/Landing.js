import React from "react";
import Auth from "../Auth/Auth";
import useStyles from "./styles";
import { Container, Typography } from "@material-ui/core";

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.bg2}>
      <div className={classes.nodeOverlay}>
        <Container className={classes.landingContent}>
          <Typography variant="h1" className={classes.title}>
            SpotiGraph
          </Typography>
          <Typography className={classes.description} variant="h4">
            See your music in a graph & stuff... :]
          </Typography>
          <Auth />
        </Container>
      </div>
    </div>
  );
};

export default Landing;
