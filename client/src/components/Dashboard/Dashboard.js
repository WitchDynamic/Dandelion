import React, { useEffect } from "react";
import Filters from "../Filters/Filters";
import Navbar from "../Navbar/Navbar";
import Network from "../Network/Network";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import axios from "axios";

const Dashboard = () => {
  const dispatch = useDispatch();

  const getUser = async (token) => {
    try {
      await axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((resp) => {
          dispatch(login(token, resp.data));
        });
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.localStorage.setItem("token", token);
      getUser(token);
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
