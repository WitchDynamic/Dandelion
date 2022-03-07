import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import CustomSelect from "./CustomSelect/CustomSelect";
import TooltipBtn from "./TooltipBtn/TooltipBtn";

const Filters = () => {
  const classes = useStyles();

  const timeRange = ["Short Term", "Medium Term", "Long Term"];
  const artistRange = [10, 20, 30, 40, 50];

  return (
    <Grid
      className={classes.grid}
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid className={classes.gridItem}>
        <CustomSelect
          defaultVal={timeRange[1]}
          options={timeRange}
          label="Time Range"
        />
        <TooltipBtn />
      </Grid>
      <Grid className={classes.gridItem}>
        <CustomSelect
          defaultVal={artistRange[1]}
          options={artistRange}
          label="Artist Range"
        />
        <TooltipBtn />
      </Grid>
    </Grid>
  );
};

export default Filters;
