import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  itemAvatar: {
    backgroundColor: "#017D9D",
    color: "white",
  },

  infoList: {
    "&.MuiListItem-gutters": {
      paddingLeft: "0px",
    },
  },

  infoItemText: {
    "& .MuiListItemText-primary": {
      fontFamily: "Montserrat",
      color: "#fff",
      fontSize: "20px",
      fontWeight: "600",
    },
    "& .MuiListItemText-secondary": {
      fontFamily: "Montserrat",
      fontSize: "18px",
      color: "#D4C0FF",
    },
  },
}));
