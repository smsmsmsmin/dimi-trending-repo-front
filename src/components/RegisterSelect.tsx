import React from "react";
import css from "@emotion/css";

const RegisterSelect = ({
  label,
  ...props
}: { label: string } & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>) => (
  <div css={styles.inputWrap}>
    <span css={styles.label}>{label}</span>
    <select css={[styles.input, styles.select]} {...props}>
      {props.children}
    </select>
  </div>
);

const styles = {
  label: css`
    // display: block;
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  `,
  input: css`
    width: 100%;
    background: transparent;
    // border: 0;
    font-size: 1.563rem;
    border-color: #b5b9bd;
    border-width: 0 0 1px 0;
    transition: border-color linear 0.2s;
    & :focus {
      border-color: #e81572;
      outline: 0;
    }
  `,
  inputWrap: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.250em;
  `,
  select: css`
    border: 0;
  `
};

export default RegisterSelect;
