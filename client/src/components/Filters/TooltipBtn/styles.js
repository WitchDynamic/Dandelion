import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  "@global": {
    ".MuiTooltip-tooltip": {
      backgroundColor: "rgb(18, 16, 45, 0.95)",
    },
  },
  icon: {
    paddingTop: 14,
    paddingBottom: 15,
  },
  tDiv: {
    display: "flex",
    alignItems: "center",
    paddingTop: "10px",
    marginLeft: "5px",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));
