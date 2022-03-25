import React, { useState } from "react";
import { Button, Link } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  const checkTokenExpiration = () => {
    if (
      Math.floor(new Date().getTime() / 1000.0) >
      localStorage.getItem("expiration")
    ) {
      dispatch(logout());
      setAccessToken(null);
    }
  };

  if (accessToken) checkTokenExpiration();

  return (
    <>
      {!accessToken ? (
        <Button
          className={classes.btn}
          component="a"
          href="http://localhost:5000/login"
          variant="outlined"
        >
          Log in with Spotify
        </Button>
      ) : (
        <Button
          className={classes.btn}
          component={Link}
          href="/dashboard"
          variant="outlined"
        >
          Go to Dashboard
        </Button>
      )}
    </>
  );
};

export default Auth;
