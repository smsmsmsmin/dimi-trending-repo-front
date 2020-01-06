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
      padding: 0.438em 0.875em;
      border-radius: 3px;
      font-size: 1.063rem;
      background-color: #e81572;
    `}
    {...props}
  />
);

export default Button;
