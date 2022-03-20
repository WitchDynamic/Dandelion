import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  "@global": {
    ".MuiTooltip-arrow": {
      color: "rgb(18, 16, 45, 0.95)",
    },
  },
  legendItemDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  legendLabel: {
    color: "#FFF",
    fontFamily: "Nexa",
  },
}));
