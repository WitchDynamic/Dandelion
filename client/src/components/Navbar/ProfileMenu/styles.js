import { makeStyles } from "@material-ui/core/styles";

const purple = "#5B5A99 !important";

export default makeStyles(() => ({
  name: {
    color: purple,
    fontSize: "18px",
    fontFamily: "Nexa",
    textTransform: "none",
  },
  menu: {
    marginTop: "40px",
    "& .MuiPopover-paper": {
      backgroundColor: "#0a091b",
    },
  },
  menuItem: {
    color: "#FFF !important",
    fontFamily: "Nexa",
  },
}));
