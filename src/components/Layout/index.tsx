import React, { FC } from "react";
import { EuiPage, EuiPageBody, EuiPageSection } from "@elastic/eui";
import { LayoutProps } from "../../types";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <EuiPage paddingSize="xl" direction={"column"}>
      <EuiPageBody paddingSize="none">
        <EuiPageSection>{children}</EuiPageSection>
      </EuiPageBody>
    </EuiPage>
  );
};
