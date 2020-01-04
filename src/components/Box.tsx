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
      display: flex;
      height: fit-content;
      flex-direction: column;
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: -5px 10px 60px -13px rgba(0, 0, 0, 0.2);
    `}
    {...props}
  />
);
export default Box;
