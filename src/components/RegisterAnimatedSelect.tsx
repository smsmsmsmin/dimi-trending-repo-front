import React, { useState, useEffect } from 'react'
import css from "@emotion/css";
const AnimatedSelect = ({
    label,
    options,
    name,
    value,
    onChange
}: {
    label: string,
    options: string[],
    name: string,
    value: string,
    onChange: (name: string, value: string) => void
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isSelecting, setIsSelecting] = useState(false)
    const clicked = () => {
        setIsSelecting(() => !isSelecting)
    }
    useEffect(() => {
        onChange(name, options[selectedIndex])
    }, [selectedIndex])
    return (
        <div css={styles.inputWrap}>
        <span css={styles.label}>{label}</span>
        <div css={styles.selectWrap} onClick={clicked}>
            {options[selectedIndex]}
        </div>
        <div css={styles.selections(isSelecting)}>
            {options.map((v, i) => <div onClick={() => {
                setSelectedIndex(i)
                setIsSelecting(false)
            }} css={styles.option(i, isSelecting)} key={v}>{v}</div>)}
        </div>
    </div>
    )
}

const styles = {
    label: css`
        font-size: 0.875rem;
        margin-bottom: 0.625rem;
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
  `,
    selections: (isSelecting: boolean) => css`
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 20px;
        padding: 0px 0px;
        margin-top: 6px;
        overflow: hidden;
        position: relative;
        transition: 400ms cubic-bezier(0,.87,.38,.98);
        ${!isSelecting && `
            margin-top: 0;
        `}
  `,
    option: (index: number, isSelecting: boolean) => css`
        padding: 12px;
        transition: ${index * 100}ms cubic-bezier(0,.87,.38,.98);
        transition: 500ms background-color;
        background-color: transparent;
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
        ${!isSelecting && `
            padding-top: 0px;
            padding-bottom: 0px;
            display: none;
        `}
    `
}
export default AnimatedSelect