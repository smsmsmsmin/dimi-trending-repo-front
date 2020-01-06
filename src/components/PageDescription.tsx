import React from "react";
import css from "@emotion/css";

const PageDescription = ({
  type,
  margin,
  ...props
}: { type?: string; margin?: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>) => (
  <span
    css={css`
      margin-bottom: ${margin || 1.563}em;
      text-align: ${type === "center" ? "center" : "left"};
    `}
    {...props}
  />
);

export default PageDescription;
