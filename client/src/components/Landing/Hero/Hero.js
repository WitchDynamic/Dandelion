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
        <img className={classes.nodeBg} src={img} alt="" />
      </div>
      <div className={classes.heroContent}>
        <Typography className={classes.heroTitle}>Dandelion</Typography>
        <hr className={classes.divider} />
        <Typography className={classes.heroDescription}>
          Visualize a network of your Spotify listening habits and discover new
          music!
        </Typography>
        <Auth />
      </div>
    </div>
  );
};

export default Hero;
