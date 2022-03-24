import React from "react";
import { Drawer, Button, Box, Typography } from "@material-ui/core";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import useStyles from "./styles";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShowSidebar(open);
  };

  const list = () => (
    <Box
      className={classes.sidebarBox}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography className={classes.sidebarTitle} variant="h6">
        Friends
      </Typography>
      <div className={classes.sidebarBodyDiv}>
        <Typography className={classes.sidebarBodyText} variant="body1">
          Hello there!
        </Typography>
        <Typography className={classes.sidebarBodyText} variant="body1">
          This feature hasn't been implemented yet. Check back soon! :)
        </Typography>
      </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        {<MenuOpenIcon className={classes.menuIcon} />}
      </Button>
      <Drawer
        className={classes.sidebar}
        anchor="left"
        open={showSidebar}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default Sidebar;
