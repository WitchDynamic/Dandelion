import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  name: {
    color: "#D4C0FF !important",
    fontSize: "18px",
    fontFamily: "Montserrat",
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
    fontFamily: "Montserrat",
  },
}));
