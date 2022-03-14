import { makeStyles } from "@material-ui/core/styles";

const textColor = "#6F6C99";
const textHover = "#53B9EA";

export default makeStyles(() => ({
  sidebar: {
    "& .MuiPaper-root": {
      background: "linear-gradient(180deg, #1c193e, rgba(27, 25, 66), #17163B)",
      width: "12%",
      minWidth: "250px",
      maxWidth: "250px",
    },
    "& .MuiListItem-gutters": {
      paddingLeft: "30px",
    },
    "& .MuiBackdrop-root": {
      backgroundColor: "transparent",
    },
  },

  sidebarTitle: {
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

  sidebarBox: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: "250px",
  },
  sidebarBodyDiv: {
    marginTop: "70px",
  },
  sidebarBodyText: {
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: "20px",
  },
}));
