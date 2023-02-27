import React from "react";
import AllEntries from "./AllEntries";

const OverLimitEntries = () => {
  return (
    <>
      <AllEntries isOnOverlimit={true} />
    </>
  );
};

export default OverLimitEntries;
