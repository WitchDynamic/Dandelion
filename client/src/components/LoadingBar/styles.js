import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  loadingBar: {
    "& .MuiLinearProgress-bar": {
      backgroundColor: "#3f51b5",
    },
    backgroundColor: "#333",
    height: 30,
    borderRadius: 16,
  },
}));
