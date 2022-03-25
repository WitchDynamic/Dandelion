import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  "@global": {
    ".vis-network": {
      backgroundColor: "#1f1b51",
      //marginTop: "20px",
      boxShadow: "0 10px 10px -5px",
    },
  },
  skelly: {
    "&.MuiSkeleton-text": {
      transform: "scale(1, 1)",
    },
  },
}));
