import React from "react";
import { Tooltip } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import useStyles from "./styles";

const TooltipBtn = ({ description }) => {
  const classes = useStyles();

  return (
    <div className={classes.tDiv}>
      <Tooltip title={description} arrow placement="right">
        <HelpIcon className={classes.icon} color="primary" />
      </Tooltip>
    </div>
  );
};

export default TooltipBtn;
