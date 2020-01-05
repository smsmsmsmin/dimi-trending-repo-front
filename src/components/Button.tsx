import React from "react";
import css from "@emotion/css";

const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <button
    css={css`
      width: 100%;
      border: 0;
      color: white;
      padding: 7px 14px;
      border-radius: 3px;
      font-size: 17px;
      background-color: #e81572;
    `}
    {...props}
  />
);

export default Button;
