import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import CustomSelect from "./Select/Select";

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
      <Grid item xs={12} md={2}>
        <CustomSelect defaultVal={timeRange[1]} options={timeRange} />
      </Grid>
      <Grid item xs={12} md={2}>
        <CustomSelect defaultVal={20} options={artistRange} />
      </Grid>
    </Grid>
  );
};

export default Filters;
