import React from "react";
import { Typography, List } from "@material-ui/core";
import useStyles from "./styles";
import img from "../../../images/DandelionInfo.png";
import InfoItem from "./InfoItem/InfoItem";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const Info = () => {
  const classes = useStyles();
  return (
    <div className={classes.infoContainer}>
      <div className={classes.infoWrapper}>
        <div className={classes.infoRow}>
          <div className={classes.columnOne}>
            <div className={classes.textWrapper}>
              <Typography className={classes.infoTitle}>
                How It Works
              </Typography>
              <List>
                <InfoItem
                  icon={<VpnKeyIcon />}
                  primaryText="Get started in seconds"
                  secondaryText="No need to create an account. Sign in securely with Spotify."
                />
                <InfoItem
                  icon={<BubbleChartIcon />}
                  primaryText="Visualize"
                  secondaryText="Adjust the time and artist filters to generate an interactive network of your listening pattern. Large purple nodes indicate a higher probability of matching your music taste."
                />
                <InfoItem
                  icon={<LibraryMusicIcon />}
                  primaryText="Discover new music"
                  secondaryText={
                    <p>
                      Click on an artist to instantly play their top songs. Find
                      something you like? Liking a song automatically adds it to
                      your Spotify liked songs!
                      <br />
                      <span className={classes.italicText}>
                        *Music player only available to Spotify premium members
                      </span>
                    </p>
                  }
                />
              </List>
            </div>
          </div>
          <div className={classes.columnTwo}>
            <div className={classes.imageWrap}>
              <img src={img} className={classes.infoImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
