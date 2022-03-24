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
        <Typography className={classes.heroTitle}>SpotiGraph</Typography>
        <hr className={classes.divider} />
        <Typography className={classes.heroDescription}>
          Visualize your listening habits and discover new music!
        </Typography>
        <Auth />
      </div>
    </div>
  );
};

export default Hero;
