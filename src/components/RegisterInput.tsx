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
        {inputLabel && <span css={styles.inputLabel}>{inputLabel}</span>}
        <input css={styles.input(!inputLabel)} type="text" {...props} />
      </div>
    </div>
  );
};

const styles = {
  label: css`
    font-size: 0.875rem;
    margin-bottom: 0.625em;
  `,
  input: (leftBorder: boolean) => css`
  width: 100%;
  box-sizing: border-box;
  padding: 0.75em 1.5em;
  border: 0;
  appearance: none;
  background-color: #f3f3f3;
  font-size: inherit;
  outline-width: 0;
  ${leftBorder ? `
    border-radius: 30px;
  ` : `border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding-left: 3px`}
`,
  inputWrap: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25em;
  `,
  inputLabel: css`
    font-size: 1.25em;
    background-color: #f3f3f3;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 6px;
    padding-left: 15px;
    line-height: 24px;
  `,
  inputLabelWrap: css`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 6px;
    padding-left: 0px;
  `
};

export default RegisterInput;
