import React from "react";
import { IconButton, Typography, Tooltip } from "@material-ui/core";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import HelpIcon from "@material-ui/icons/Help";
import useStyles from "./styles";

const TooltipBtn = () => {
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

  const text = (
    <Typography variant="body2">
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est,
      vel aliquam tellus. Praesent non nunc mollis, fermentum neque at, semper
      arcu. Nullam eget est sed sem iaculis gravida eget vitae justo.
    </Typography>
  );

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
          title={text}
        >
          <IconButton onClick={handleTooltipOpen}>
            <HelpIcon className={classes.icon} color="primary" />
          </IconButton>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default TooltipBtn;
