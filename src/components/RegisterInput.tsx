import React from "react";
import css from "@emotion/css";

interface IProps {
  label: string;
  inputLabel?: string;
}

const RegisterInput = ({
  label,
  inputLabel,
  ...props
}: IProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => {
  return (
    <div css={styles.inputWrap}>
      <span css={styles.label}>{label}</span>
      <div css={styles.inputLabelWrap}>
        <span css={styles.inputLabel}>{inputLabel}</span>
        <input css={styles.input} type="text" {...props} />
      </div>
    </div>
  );
};

const styles = {
  label: css`
    // display: block;
    font-size: 0.875rem;
    margin-bottom: 0.625em;
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
    margin-bottom: 1.25em;
  `,
  inputLabel: css`
    font-size: 1.563em;
  `,
  inputLabelWrap: css`
    display: flex;
    flex-direction: row;
    width: 100%;
  `
};

export default RegisterInput;
