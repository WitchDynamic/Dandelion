import React from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerContent}>
      <Typography variant="h2" className={classes.title}>
        Not Found
      </Typography>
      <Button
        className={classes.btn}
        size="large"
        variant="contained"
        component={Link}
        to="/"
      >
        Home
      </Button>
    </div>
  );
};

export default NotFound;
