import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, login } from "../../actions/auth";

const Auth = () => {
  const CLIENT_ID = "b4cf5825f1384e468d19ea6ae85cb236";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth);

  useEffect(() => {
    const hash = window.location.hash;
    console.log("hash: " + hash);
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      console.log("token from hash: " + token);
    }
    dispatch(login(token));
  }, []);

  return (
    <>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </>
  );
};

export default Auth;
