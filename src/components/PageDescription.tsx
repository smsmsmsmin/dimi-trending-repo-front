import React from "react";
import css from "@emotion/css";

const PageDescription = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
) => (
  <span
    css={css`
      margin-bottom: 25px;
    `}
    {...props}
  />
);

export default PageDescription;
