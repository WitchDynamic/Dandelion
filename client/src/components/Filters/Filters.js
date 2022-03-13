import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import CustomSelect from "./CustomSelect/CustomSelect";
import TooltipBtn from "./TooltipBtn/TooltipBtn";

const Filters = ({ artistLimit, setArtistLimit, timeRange, setTimeRange }) => {
  const classes = useStyles();

  const timeRangeOptions = ["Short Term", "Medium Term", "Long Term"];
  const artistRangeOptions = [10, 20, 30, 40, 50];

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
          value={timeRange}
          options={timeRangeOptions}
          label="Time Range"
          setValue={setTimeRange}
          isNum={false}
        />
        <TooltipBtn />
      </Grid>
      <Grid className={classes.gridItem}>
        <CustomSelect
          value={artistLimit}
          options={artistRangeOptions}
          label="Artist Range"
          setValue={setArtistLimit}
          isNum={true}
        />
        <TooltipBtn />
      </Grid>
    </Grid>
  );
};

export default Filters;
