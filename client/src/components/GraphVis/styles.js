import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  fullscreen: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -2,
  },
  loadingBarDiv: {
    position: "relative",
    top: "40vh",
    width: "35vw",
    left: "32vw",
  },
}));
