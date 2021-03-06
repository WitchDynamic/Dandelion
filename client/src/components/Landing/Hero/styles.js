import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  heroContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "900px",
    position: "relative",
    zIndex: 1,
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23004d80'/%3E%3Cstop offset='1' stop-color='%23004d80' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23004d80'/%3E%3Cstop offset='1' stop-color='%23004d80' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231f1b51'/%3E%3Cstop offset='1' stop-color='%231f1b51' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23007F9F'/%3E%3Cstop offset='1' stop-color='%23007F9F' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231F1B51'/%3E%3Cstop offset='1' stop-color='%231F1B51' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231F1B51'/%3E%3Cstop offset='1' stop-color='%231F1B51' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E\")",
      transform: "rotate(180deg)",
      zIndex: 2,
    },
  },

  heroBg: {
    zIndex: 3,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  nodeBg: {
    width: "100%",
    height: "100%",
  },

  heroContent: {
    zIndex: 4,
    maxWidth: "1200px",
    position: "absolute",
    padding: "0 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  heroTitle: {
    color: "#fff",
    fontSize: "88px",
    fontFamily: "Montserrat",
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: "1.5px",
    textShadow:
      "2px 7px 5px rgba(0,0,0,0.3),  0px -4px 10px rgba(255,255,255,0.2)",

    "@media screen and (max-width: 768px)": {
      fontSize: "60px",
    },

    "@media screen and (max-width: 480px)": {
      fontSize: "52px",
    },
  },

  heroDescription: {
    marginTop: "30px",
    color: "#fff",
    fontSize: "26px",
    textAlign: "center",
    maxWidth: "600px",
    fontFamily: "Montserrat",
    fontWeight: "400",

    "@media screen and (max-width: 768px)": {
      fontSize: "25px",
    },

    "@media screen and (max-width: 480px)": {
      fontSize: "20px",
    },
  },
  divider: {
    margin: "10px",
    width: "660px",
    backgroundColor: "#9BA4A6",
    height: "1px",
    border: "none",

    "@media screen and (max-width: 768px)": {
      width: "400px",
    },

    "@media screen and (max-width: 480px)": {
      width: "300px",
    },
  },
}));
