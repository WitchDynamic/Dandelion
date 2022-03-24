import { makeStyles } from "@material-ui/core/styles";

const purple = "#5B5A99";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    //backgroundColor: "transparent !important",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    //boxShadow: "none",
  },
  toolbar: {
    paddingLeft: "0px",
  },
  avatar: {
    color: "#FFF",
    backgroundColor: "#A84EC4",
    marginRight: "7px",
    height: "47px",
    width: "47px",
  },
  titleContainer: {
    flexGrow: 1,
  },
  title: {
    color: "#FFFFFF",
    marginLeft: "10px",
    textDecoration: "none",
    fontFamily: "Montserrat",
    //fontWeight: "600",
  },
  menuIcon: {
    marginRight: 2,
  },
}));
