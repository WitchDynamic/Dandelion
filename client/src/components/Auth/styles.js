import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  btn: {
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    color: "#84E6FF",
    margin: "30px 0",
    fontSize: 20,
    fontFamily: "Montserrat",
    borderColor: "#FFF",
    textTransform: "none",
    borderRadius: "25px",
    boxShadow:
      "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
    padding: "7px 45px",
  },
}));
