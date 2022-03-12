import { makeStyles } from "@material-ui/core/styles";

const purple = "#5B5A99";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    backgroundColor: "transparent !important",
    boxShadow: "none",
  },
  toolbar: {
    paddingLeft: "0px",
  },
  avatar: {
    color: "#FFF",
    backgroundColor: "#A84EC4",
    marginRight: "7px",
  },
  title: {
    color: "#FFFFFF",
    flexGrow: 1,
    marginLeft: "15px",
    textDecoration: "none",
  },
  menuIcon: {
    marginRight: 2,
  },
}));
