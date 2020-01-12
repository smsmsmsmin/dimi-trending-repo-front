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
      <div css={styles.selectWrap}>
        <select css={[styles.input, styles.select]} {...props}>
          {props.children}
        </select>
      </div>
    </div>
  );

const styles = {
  label: css`
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  `,
  input: css`
  width: 100%;
  background-color: transparent;
  outline: none;
`,
  inputWrap: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.250em;
  `,
  select: css`
    border: 0;
  `,
  selectWrap: css`
    width: 100%;
    box-sizing: border-box;
    padding: 0.75em 1.5em;
    border: 0;
    background-color: #f3f3f3;
    font-size: inherit;
    outline-width: 0;
    border-radius: 30px;
  `
};

export default RegisterSelect;
