import React, { useState } from "react";
import Network from "../Network/Network";
import LoadingBar from "../LoadingBar/LoadingBar";
import useStyles from "./styles";

const GraphVis = ({ topArtists, relatedArtists, isLoading, setNodeId }) => {
  const [loadingProgress, setLoadingProgress] = React.useState(0);
  const [showBar, setShowBar] = useState(false);
  const [stabilized, setStabilized] = useState(false);
  const classes = useStyles();

  return (
    <>
      {showBar && (
        <div className={classes.loadingBarDiv}>
          <LoadingBar loadingProgress={loadingProgress} />
        </div>
      )}
      <div className={classes.fullscreen}>
        <Network
          topArtists={topArtists}
          relatedArtists={relatedArtists}
          isLoading={isLoading}
          setNodeId={setNodeId}
          setShowBar={setShowBar}
          setLoadingProgress={setLoadingProgress}
          stabilized={stabilized}
          setStabilized={setStabilized}
        />
      </div>
    </>
  );
};

export default GraphVis;
