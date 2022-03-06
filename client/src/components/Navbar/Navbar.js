import React from "react";
import { AppBar, Box, Toolbar, Avatar, Typography } from "@material-ui/core";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import useStyles from "./styles";
import img from "../../images/white_cat.jpg";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Sidebar />
          <Typography className={classes.title} variant="h5" component="div">
            SpotiGraph
          </Typography>
          <Avatar className={classes.avatar} alt="spotify-img" src={img}>
            {/* {user?.authData.result.name.charAt(0)} */}
          </Avatar>
          <ProfileMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
