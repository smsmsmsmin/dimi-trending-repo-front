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
      padding-top: 25px;
      background-color: #f0f0f0;
    `}
    {...props}
  >
    <div
      css={css`
        width: 1000px;
      `}
    >
      {props.children}
    </div>
  </div>
);

export default PageWrap;
