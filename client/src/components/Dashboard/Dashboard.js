import React, { useEffect } from "react";
import Filters from "../Filters/Filters";
import Navbar from "../Navbar/Navbar";
import Network from "../Network/Network";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";

const Dashboard = () => {
  const dispatch = useDispatch();

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
      dispatch(login(token));
    }
  }, []);

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
