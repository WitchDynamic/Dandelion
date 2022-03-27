import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  infoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "900px",
    position: "relative",

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
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23381e65'/%3E%3Cstop offset='1' stop-color='%23381e65' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23381e65'/%3E%3Cstop offset='1' stop-color='%23381e65' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231f1b51'/%3E%3Cstop offset='1' stop-color='%231f1b51' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23561C77'/%3E%3Cstop offset='1' stop-color='%23561C77' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231F1B51'/%3E%3Cstop offset='1' stop-color='%231F1B51' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231F1B51'/%3E%3Cstop offset='1' stop-color='%231F1B51' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E\")",
      /* background by SVGBackgrounds.com */
    },
  },

  infoWrapper: {
    display: "grid",
    zIndex: "1",
    height: "860px",
    width: "100%",
    maxWidth: "1200px",
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
  },

  infoRow: {
    display: "grid",
    gridAutoColumns: "minmax(auto, 1fr)",
    alignItems: "center",
    gridTemplateAreas: `'col1 col2'`,

    "@media screen and (max-width: 768px)": {
      gridTemplateAreas: `'col1 col1' 'col2 col2'`,
    },
  },

  columnOne: {
    marginBottom: "15px",
    padding: "0 15px",
    gridArea: "col1",
  },

  columnTwo: {
    marginBottom: "15px",
    padding: "0 15px",
    gridArea: "col2",
  },

  textWrapper: {
    maxWidth: "540px",
    paddingBottom: "50px",
    paddingTop: "15px",
  },

  infoTitle: {
    color: "#fff",
    fontSize: "40px",
    letterSpacing: "1px",
    marginBottom: "25px",
    fontFamily: "Montserrat",
    fontWeight: "600",
    textShadow:
      "0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)",
  },

  imageWrap: {
    maxWidth: "555px",
    height: "100%",
  },

  infoImg: {
    margin: "0 0 10px 0",
    paddingRight: "0",
    //boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
    boxShadow: "rgb(17, 0, 38) 0px 20px 30px -10px",

    "@media screen and (max-width: 1450px)": {
      maxWidth: "100%",
    },
  },

  italicText: {
    fontStyle: "italic",
    color: "#E5DCF9;",
  },
}));
