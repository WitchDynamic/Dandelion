import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  graphContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  player: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    fontFamily: "Nexa",
    fontWeight: "bold",
  },
}));
