import React from "react";
import css from "@emotion/css";

const Button = ({
  disabled,
  ...props
}: { disabled?: boolean } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => (
  <button
    disabled={disabled || false}
    css={css`
      width: 100%;
      border: 0;
      cursor: pointer;
      color: ${disabled ? "#6f6f6f" : "white"};
      padding: 0.75em 1.5em;
      border-radius: 30px;
      font: inherit;
      font-size: 1.2rem;
      font-weight: 700;
      background-color: ${disabled ? "#f0f0f0" : "#e81572"};
      transition: 200ms box-shadow;
    `}
    {...props}
  />
);

export default Button;
