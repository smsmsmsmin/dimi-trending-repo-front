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
      padding: 1.875em;
      border-radius: 0.938em;
      box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.03);
    `}
    {...props}
  />
);
export default Box;
