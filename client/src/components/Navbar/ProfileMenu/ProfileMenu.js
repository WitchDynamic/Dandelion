import React from "react";
import useStyles from "./styles";
import { Menu, MenuItem, Button } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/auth";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <Button
        className={classes.name}
        id="positioned-button"
        aria-controls={open ? "positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Dropdown
      </Button>
      <Menu
        className={classes.menu}
        id="positioned-menu"
        aria-labelledby="positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          My account
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
