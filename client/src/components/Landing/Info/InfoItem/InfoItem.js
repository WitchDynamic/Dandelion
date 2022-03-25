import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import useStyles from "./styles";

const InfoItem = ({ icon, primaryText, secondaryText }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.infoList}>
      <ListItemAvatar>
        <Avatar className={classes.itemAvatar}>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText
        className={classes.infoItemText}
        primary={primaryText}
        secondary={secondaryText}
      />
    </ListItem>
  );
};

export default InfoItem;
