import React from "react";
import css from "@emotion/css";

const PageWrap = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;
    `}
  >
    <div
      css={css`
        width: 100%;
        max-width: 1000px;
        padding: 25px 15px;
      `}
      {...props}
    >
      {props.children}
    </div>
  </div>
);

export default PageWrap;
