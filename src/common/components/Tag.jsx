import React from "react";
import { RemoveButton, TagWrapper } from "../common";

export const Tag = ({ children, onRemove }) => {
  return (
    <TagWrapper>
      {children}
      <RemoveButton onClick={onRemove}>X</RemoveButton>
    </TagWrapper>
  );
};
