import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";

const CustomSelect = ({ value, options, label, setValue, isNum }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    //setVal(event.target.value);
    setValue(event.target.value);
  };

  const iconComponent = (props) => {
    return <ExpandMoreIcon className={props.className + " " + classes.icon} />;
  };

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <Select
        label={label}
        disableUnderline
        classes={{ root: classes.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={isNum ? value : value.toLowerCase().replace(/ /g, "_")}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            value={isNum ? option : option.toLowerCase().replace(/ /g, "_")}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
