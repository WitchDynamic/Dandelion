import React, { useEffect } from "react";
import Filters from "../Filters/Filters";
import Navbar from "../Navbar/Navbar";
import Network from "../Network/Network";
import { Container } from "@material-ui/core";

const Dashboard = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash);
    const accessToken = urlParams.get("#access_token");
    const refreshToken = urlParams.get("refresh_token");
    const expiresIn = urlParams.get("expires_in");
    //convert to epoch
    const expiration = Math.floor(new Date().getTime() / 1000.0) + expiresIn;
    //save in local storage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("expiration", expiration);
  }, []);

  //console.log(user.images);
  return (
    <>
      <Navbar />
      <Container>
        <Filters />
        <Network />
      </Container>
    </>
  );
};

export default Dashboard;
