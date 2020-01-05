import React from "react";
import css from "@emotion/css";

const PageTitle = ({
  type,
  ...props
}: { type?: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>) => (
  <span
    css={css`
      display: block;
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 25px;
      text-align: ${type === "center" ? "center" : "left"};
    `}
    {...props}
  />
);

export default PageTitle;
