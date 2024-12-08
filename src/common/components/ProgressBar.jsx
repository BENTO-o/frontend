import React from "react";
import { ProgressBarFill, ProgressBarWrapper } from "../common";

export const ProgressBar = ({ percentage }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarFill percentage={percentage} />
    </ProgressBarWrapper>
  );
};
