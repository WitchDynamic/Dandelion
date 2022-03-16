import React from "react";
import { LinearProgress, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";

const LoadingBar = ({ loadingProgress }) => {
  const classes = useStyles();

  return (
    <Box>
      <LinearProgress
        className={classes.loadingBar}
        variant="determinate"
        value={loadingProgress}
      />
    </Box>
  );
};

export default LoadingBar;
