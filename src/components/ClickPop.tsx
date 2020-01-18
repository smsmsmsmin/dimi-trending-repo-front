import React, {useState} from "react";
import css from "@emotion/css";
export default (props: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  const [clicked, setClick] = useState(false);
  const pop = css`
    transition: 200ms;
    transition-timing-function: cubic-bezier(.06,.67,.24,.91);
    transform: scale(1);
    ${clicked && {
      transform: 'scale(0.98) !important'
    }}
  `
  return <div onMouseDown={setClick.bind(null, true)} onMouseUp={setClick.bind(null, false)} css={pop} {...props} />
}