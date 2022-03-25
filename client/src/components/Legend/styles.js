import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  legendBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    top: "30px",
    left: "10px",
    maxWidth: "fit-content",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "8px",
    borderRadius: 5,
  },
  legendText: {
    fontFamily: "Montserrat",
  },
}));
