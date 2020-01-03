import React from "react";
import css from "@emotion/css";

const Box = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => (
  <div
    css={css`
      background: white;
      padding: 30px;
      margin: 25px 0 0;
      border-radius: 8px;
      box-shadow: -5px 10px 60px -13px rgba(0, 0, 0, 0.2);
    `}
    {...props}
  />
);
export default Box;
