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
      border-radius: 30px;
      font-size: 1.063rem;
      background-color: #e81572;
      transition: 200ms box-shadow;
      &:hover {
        box-shadow: 0px 0px 10px #E882AE;
      }
    `}
    {...props}
  />
);

export default Button;
