import React from "react";
import { Typography } from "@material-ui/core";
import Auth from "../../Auth/Auth";
import useStyles from "./styles";
import img from "../../../images/NodeBackground.png";

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroBg}>
        <img className={classes.nodeBg} src={img} />
      </div>
      <div className={classes.heroContent}>
        <Typography variant="h1" className={classes.heroTitle}>
          SpotiGraph
        </Typography>
        <Typography className={classes.heroDescription} variant="h4">
          See your music in a graph & stuff... :]
        </Typography>
        <div className={classes.heroBtnWrapper}>
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default Hero;
