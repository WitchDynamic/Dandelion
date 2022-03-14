import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  graphContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreen: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -2,
  },
}));
