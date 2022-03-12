import React from "react";
import { Button, Link } from "@material-ui/core";
import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();
  const accessToken = localStorage.getItem("accessToken");

  return (
    <>
      {!accessToken ? (
        <Button
          className={classes.btn}
          component="a"
          href="http://localhost:5000/login"
          style={{ color: "#FFF" }}
        >
          Log in with Spotify
        </Button>
      ) : (
        <Button
          className={classes.btn}
          component={Link}
          href="/dashboard"
          style={{ color: "#FFF" }}
        >
          Go to Dashboard
        </Button>
      )}
    </>
  );
};

export default Auth;
