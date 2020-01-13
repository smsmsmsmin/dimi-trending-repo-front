import React, { useEffect, useState } from "react";
import css from "@emotion/css";

interface IProps {
  name: string;
  label: string;
  value: string;
  options: Array<{
    value: string;
    customLabel?: string;
  }>;
  onChange: (name: string, value: string) => void;
}

const SegmentedSelect = (props: IProps) => {
  const { name, label, options, onChange } = props;

  const [selectedValue, setSelectedValue] = useState<string>(options[0].value);

  useEffect(() => {
    onChange(name, selectedValue);
  }, [selectedValue, name, onChange]);

  return (
    <div css={styles.inputWrap}>
      <span css={styles.label}>{label}</span>
      <div css={styles.container}>
        {props.options.map(option => (
          <button
            key={option.value}
            type="button"
            css={styles.option(selectedValue === option.value)}
            value={option.value}
            onClick={() => setSelectedValue(option.value)}
          >
            {option.customLabel || option.value}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  label: css`
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  `,
  inputWrap: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25em;
  `,
  container: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    background-color: #f3f3f3;
    outline-width: 0;
    border-radius: 30px;
    user-select: none;
    overflow: hidden;
  `,
  option: (isSelected: boolean) => css`
    display: flex;
    border: 0;
    flex: 1;
    justify-content: center;
    background-color: ${isSelected ? "#e81572" : "transparent"};
    color: ${isSelected ? "white" : "black"};
    padding: 0.75em 0;
    font: inherit;
    outline: 0;
    cursor: pointer;
    & :first-of-type {
      padding-left: 1.5em;
    }
    & :last-child {
      padding-right: 1.5em;
    }
  `
};

export default SegmentedSelect;
