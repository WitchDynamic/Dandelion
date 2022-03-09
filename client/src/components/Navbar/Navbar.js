import React from "react";
import { AppBar, Box, Toolbar, Avatar, Typography } from "@material-ui/core";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import useStyles from "./styles";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);

  return (
    <Box>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Sidebar />
          <Typography className={classes.title} variant="h5" component="div">
            SpotiGraph
          </Typography>
          <Avatar
            className={classes.avatar}
            alt="spotify-img"
            src={user?.images[0].url}
          >
            {user?.display_name.charAt(0)}
          </Avatar>
          <ProfileMenu
            name={user?.display_name}
            profile={user?.external_urls.spotify}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
