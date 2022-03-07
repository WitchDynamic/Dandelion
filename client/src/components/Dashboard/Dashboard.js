import React from "react";
import Filters from "../Filters/Filters";
import Navbar from "../Navbar/Navbar";
import Network from "../Network/Network";
import { Container } from "@material-ui/core";

const Dashboard = () => {
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
