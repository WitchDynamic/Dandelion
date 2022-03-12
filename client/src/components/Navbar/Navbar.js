import React from "react";
import { AppBar, Box, Toolbar, Avatar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import useStyles from "./styles";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({ name, profile, img }) => {
  const classes = useStyles();

  return (
    <Box>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Sidebar />
          <Typography
            component={Link}
            to="/"
            className={classes.title}
            variant="h5"
          >
            SpotiGraph
          </Typography>
          <Avatar className={classes.avatar} alt="spotify-img" src={img}>
            {name?.charAt(0)}
          </Avatar>
          <ProfileMenu name={name} profile={profile} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
