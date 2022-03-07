import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  containerContent: {
    position: "absolute",
    top: "20%",
    bottom: 0,
    left: 0,
    right: 0,
    maxWidth: "fit-content",
    margin: "auto",
    flexDirection: "column",
    display: "flex",
    marginTop: "60px",
  },
  containerVideo: {
    maxWidth: "fit-content",
    margin: "auto",
    flexDirection: "column",
    display: "flex",
    marginTop: "-140px",
    zIndex: 0,
  },
  title: {
    color: "white",
    zIndex: 1,
    paddingBottom: "15px",
    fontSize: "70px",
  },
  btn: {
    maxWidth: "fit-content",
    margin: "0 auto",
    background: "linear-gradient(60deg, #1ba8e1, #7763ed, #f309fd)",
    color: "white",
    marginBottom: "30px",
  },
}));
