import { RadioButtonWrapper } from "../common";

import React from "react";

export const RadioButton = ({ name, value, checked, onChange }) => {
  return (
    <RadioButtonWrapper>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label>{value}</label>
    </RadioButtonWrapper>
  );
};
