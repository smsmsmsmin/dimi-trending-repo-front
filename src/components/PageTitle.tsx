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
    display: block;
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 25px;
    `}
    {...props}
  />
);

export default PageTitle;
