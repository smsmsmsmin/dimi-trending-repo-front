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
      font-size: 1.563rem;
      font-weight: 700;
      margin-bottom: 1.563rem;
      text-align: ${type === "center" ? "center" : "left"};
    `}
    {...props}
  />
);

export default PageTitle;
