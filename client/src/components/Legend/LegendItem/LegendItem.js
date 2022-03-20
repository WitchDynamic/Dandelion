import React from "react";
import { Typography, Tooltip } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import useStyles from "./styles";

const LegendItem = ({ color, label, description }) => {
  const classes = useStyles();
  return (
    <Tooltip title={description} arrow placement="right">
      <div className={classes.legendItemDiv}>
        <FiberManualRecordIcon fontSize="large" style={{ color: color }} />
        <Typography className={classes.legendLabel}>{label}</Typography>
      </div>
    </Tooltip>
  );
};

export default LegendItem;
