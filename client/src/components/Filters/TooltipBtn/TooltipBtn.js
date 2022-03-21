import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import HelpIcon from "@material-ui/icons/Help";
import useStyles from "./styles";

const TooltipBtn = ({ description }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const popperOptions = {
    modifiers: {
      offset: {
        offset: "185px, -100px",
      },
    },
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div className={classes.tDiv}>
        <Tooltip
          PopperProps={{
            disablePortal: true,
            popperOptions,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={description}
        >
          <IconButton
            onClick={handleTooltipOpen}
            classes={{ root: classes.iconButton }}
          >
            <HelpIcon className={classes.icon} color="primary" />
          </IconButton>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default TooltipBtn;
