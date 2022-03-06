import React from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
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
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography className={classes.title} variant="h6">
        Friends
      </Typography>
      <List className={classes.listMenu}>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem className={classes.listItem} button key={text}>
            <ListItemIcon className={classes.menuItem}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText className={classes.menuItem} primary={text} />
          </ListItem>
        ))}
      </List>
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
