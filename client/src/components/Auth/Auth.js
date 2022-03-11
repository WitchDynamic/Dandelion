import React from "react";
import { Button, Link } from "@material-ui/core";

const Auth = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token ? (
        <Button
          component="a"
          href="http://localhost:5000/login"
          style={{ color: "#FFF" }}
        >
          Log in with Spotify
        </Button>
      ) : (
        <Button component={Link} href="/dashboard" style={{ color: "#FFF" }}>
          Go to Dashboard
        </Button>
      )}
    </>
  );
};

export default Auth;
