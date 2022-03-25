import React from "react";
import { Box, Typography } from "@material-ui/core";
import LegendItem from "./LegendItem/LegendItem";
import useStyles from "./styles";

const Legend = () => {
  const classes = useStyles();

  const TaText = (
    <Typography variant="body2" className={classes.legendText}>
      Represents a top artist for the selected time range. A larger circle means
      this artist is closely related to your other top artists.
    </Typography>
  );
  const RaText = (
    <Typography variant="body2" className={classes.legendText}>
      Represents artists that are similar to your top artists. Larger circles
      are a good indicator of artists that fit your listening preferences.
    </Typography>
  );

  return (
    <Box className={classes.legendBox}>
      <LegendItem color="#2CBAD3" label="Top Artist" description={TaText} />
      <LegendItem color="#a84ec4" label="Related Artist" description={RaText} />
    </Box>
  );
};

export default Legend;
