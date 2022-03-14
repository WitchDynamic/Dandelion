import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  bg2: {
    // Shapes bg
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    top: 0,
    left: 0,
    minHeight: "100%",
    width: "100%",
    backgroundImage:
      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='800' preserveAspectRatio='none' viewBox='0 0 1440 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1012%26quot%3b)' fill='none'%3e%3crect width='1440' height='800' x='0' y='0' fill='rgba(40%2c 34%2c 122%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c646.62C122.292%2c649.091%2c148.687%2c457.408%2c248.726%2c387.025C342.174%2c321.279%2c502.268%2c354.641%2c557.316%2c254.517C611.632%2c155.725%2c520.151%2c39.071%2c501.126%2c-72.051C482.745%2c-179.41%2c525.164%2c-311.412%2c447.372%2c-387.65C368.933%2c-464.522%2c237.637%2c-425.865%2c128.409%2c-437.322C40.331%2c-446.561%2c-43.698%2c-458.681%2c-131.658%2c-448.385C-235.509%2c-436.229%2c-344.793%2c-433.54%2c-429.348%2c-372.032C-523.769%2c-303.347%2c-609.849%2c-205.628%2c-624.602%2c-89.804C-639.309%2c25.66%2c-579.913%2c141.1%2c-506.178%2c231.164C-441.197%2c310.536%2c-321.64%2c312.022%2c-242.349%2c377.102C-147.029%2c455.337%2c-123.29%2c644.129%2c0%2c646.62' fill='%23201b62'%3e%3c/path%3e%3cpath d='M1440 1140.373C1515.869 1150.128 1598.538 1188.04 1664.648 1149.559 1730.778 1111.066 1736.608 1019.5699999999999 1767.67 949.642 1798.359 880.554 1866.6190000000001 814.335 1845.842 741.649 1824.732 667.797 1730.82 646.819 1668.34 602.143 1621.371 568.558 1578.109 533.594 1524.584 511.934 1465.937 488.201 1406.459 467.258 1343.28 470.602 1268.316 474.57 1188.094 483.345 1131.563 532.738 1072.436 584.399 1035.811 663.04 1033.218 741.514 1030.719 817.12 1078.466 882.537 1117.8690000000001 947.112 1153.1309999999999 1004.9 1191.593 1061.373 1249.644 1096.2 1306.656 1130.404 1374.058 1131.895 1440 1140.373' fill='%23302992'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1012'%3e%3crect width='1440' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e\")",
  },

  bg: {
    // Graph bg
    position: "fixed",
    top: 0,
    left: 0,
    minHeight: "100%",
    width: "100%",
    backgroundColor: "#170F58",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='470' height='470' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23221C66' stroke-width='1.5'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%235D27E5'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\")",
  },

  landingContent: {
    //backgroundColor: "rgb(0, 0, 0, 0.5)",
    marginTop: "15%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    color: "#FFFFFF",
    fontFamily: "Nexa",
    fontWeight: "bold",
  },

  description: {
    marginTop: 15,
    color: "#71F3F4",
  },
}));
