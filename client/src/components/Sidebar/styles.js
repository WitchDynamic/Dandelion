import { makeStyles } from "@material-ui/core/styles";

const textColor = "#6F6C99";
const textHover = "#53B9EA";

export default makeStyles(() => ({
  sidebar: {
    "& .MuiPaper-root": {
      background: "linear-gradient(180deg, #1c193e, rgba(27, 25, 66), #17163B)",
      width: "12%",
      minWidth: "fit-content",
    },
    "& .MuiListItem-gutters": {
      paddingLeft: "30px",
    },
    "& .MuiBackdrop-root": {
      backgroundColor: "transparent",
    },
  },
  title: {
    textAlign: "center",
    marginTop: "20px",
    color: "#FFFFFF",
  },

  listMenu: {
    marginTop: "30px",
  },

  listItem: {
    "& .MuiListItemIcon-root": {
      "&:hover": {
        color: textHover,
      },
    },
    "& .MuiListItemText-root": {
      "&:hover": {
        color: textHover,
      },
    },
  },

  menuItem: {
    color: textColor,
  },

  menuIcon: {
    color: "#A84EC4",
    fontSize: "40px",
  },
}));
