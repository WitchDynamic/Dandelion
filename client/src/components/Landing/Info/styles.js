import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  infoContainer: {
    background: "#BABABAB",

    "@media screen and (max-width: 768px)": {
      padding: "100px 0",
    },
  },

  infoBg: {
    zIndex: -1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23381e65'/%3E%3Cstop offset='1' stop-color='%23381e65' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23381e65'/%3E%3Cstop offset='1' stop-color='%23381e65' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231f1b51'/%3E%3Cstop offset='1' stop-color='%231f1b51' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23561C77'/%3E%3Cstop offset='1' stop-color='%23561C77' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231F1B51'/%3E%3Cstop offset='1' stop-color='%231F1B51' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231F1B51'/%3E%3Cstop offset='1' stop-color='%231F1B51' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E\")",
    /* background by SVGBackgrounds.com */
  },

  infoWrapper: {
    display: "grid",
    zIndex: "1",
    height: "860px",
    width: "100%",
    maxWidth: "1100px",
    marginRight: "auto",
    marginLeft: "auto",
    padding: "0 24px",
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
    paddingTop: "0",
    paddingBottom: "60px",
  },

  infoTitle: {
    color: "#fff",
    fontSize: "40px",
    fontWeight: "700",
    letterSpacing: "1.4px",
    marginBottom: "25px",
  },

  imageWrap: {
    maxWidth: "555px",
    height: "100%",
  },

  infoImg: {
    width: "100%",
    margin: "0 0 10px 0",
    paddingRight: "0",
  },
}));
