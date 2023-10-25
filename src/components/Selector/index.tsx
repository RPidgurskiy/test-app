import React, { FC } from "react";
import { EuiComboBox } from "@elastic/eui";
import { SelectorProps } from "../../types";

export const Selector: FC<SelectorProps> = ({
  options,
  selectedPosts,
  onChange,
  isLoading,
}) => {
  return (
    <EuiComboBox
      aria-label="Accessible screen reader label"
      placeholder="Select or create options"
      options={options}
      selectedOptions={selectedPosts}
      onChange={onChange}
      isClearable={true}
      isLoading={isLoading}
    />
  );
};
