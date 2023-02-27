import React from "react";
import AllEntries from "./AllEntries";

const OverLimitEntries = () => {
  return (
    <>
      <AllEntries isOverlimit={true} />
    </>
  );
};

export default OverLimitEntries;
