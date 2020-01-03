import React from "react";
import css from "@emotion/css";

const PageTitle = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
) => (
  <span
    css={css`
      font-size: 25px;
      font-weight: 700;
    `}
    {...props}
  />
);

export default PageTitle;
