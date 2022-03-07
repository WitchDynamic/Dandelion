import React from "react";
import { useSelector } from "react-redux";

const Auth = () => {
  const CLIENT_ID = "b4cf5825f1384e468d19ea6ae85cb236";
  const REDIRECT_URI = "http://localhost:3000/dashboard";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const token = useSelector((state) => state.auth);

  return (
    <>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <a href="http://localhost:3000/dashboard">Go to Dashboard</a>
      )}
    </>
  );
};

export default Auth;
