import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import CustomSelect from "./CustomSelect/CustomSelect";
import TooltipBtn from "./TooltipBtn/TooltipBtn";

const Filters = ({ artistLimit, setArtistLimit, timeRange, setTimeRange }) => {
  const classes = useStyles();

  const timeRangeOptions = ["Short Term", "Medium Term", "Long Term"];
  const artistRangeOptions = [1, 5, 10, 20, 30, 40, 50];

  const TrText = (
    <Typography variant="body2" className={classes.tooltipText}>
      Short Term: Last 4 weeks of listening data <br />
      <br /> Medium Term: Approximately last 6 months worth of data <br />
      <br /> Long Term: Calculated from several years of data and including all
      new data as it becomes available
    </Typography>
  );
  const ArText = (
    <Typography variant="body2" className={classes.tooltipText}>
      Amount of top artists to display on the graph
    </Typography>
  );

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
        <TooltipBtn description={TrText} />
      </Grid>
      <Grid className={classes.gridItem}>
        <CustomSelect
          value={artistLimit}
          options={artistRangeOptions}
          label="Artist Range"
          setValue={setArtistLimit}
          isNum={true}
        />
        <TooltipBtn description={ArText} />
      </Grid>
    </Grid>
  );
};

export default Filters;
