import { makeStyles } from "@material-ui/core/styles";

const purple = "#5B5A99";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
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
    textDecoration: "none",
    fontFamily: "Montserrat",
  },
  menuIcon: {
    marginRight: 2,
  },
  dandelionIcon: {
    maxHeight: "45px",
    marginLeft: "10px",
  },
}));
