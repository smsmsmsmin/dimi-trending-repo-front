import React from "react";
import css from "@emotion/css";
import { GoRepoForked, GoStar } from "react-icons/all";
import ColorSet from "../styles/github-language-colors";

interface IProps {
  type: "star" | "forked" | "user" | keyof typeof ColorSet;
}

const RepositoryRowBottomIconSet = ({
  type,
  ...props
}: IProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >) => {
  const icon = () => {
    switch (type) {
      case "star":
        return <GoStar css={styles.icon} size={17} />;
      case "forked":
        return <GoRepoForked css={styles.icon} size={17} />;
      case "user":
        return <span css={styles.user} />;
      default:
        return (
          <span
            css={[
              styles.circle,
              css`
                background-color: ${ColorSet[type] || "black"};
              `
            ]}
          />
        );
    }
  };

  return (
    <div css={styles.wrap}>
      {icon()}
      <span {...props} />
    </div>
  );
};

const styles = {
  wrap: css`
    display: flex;
    position: relative;
    align-items: center;
    cursor: default;
    & :not(:nth-of-type(3)) {
      margin-right: 1.25em;
    }
    & :hover > div {
      display: flex;
    }
  `,
  circle: css`
    display: block;
    width: 0.938em;
    height: 0.938em;
    border-radius: 50%;
    margin-right: 5px;
  `,
  icon: css`
    margin-right: 5px;
  `,
  user: css`
    & :after {
      content: "•";
      margin: 0 1.25em;
    }
    @media (max-width: 767px) {
      & :after {
        display: none;
      }
    }
  `
};

export default RepositoryRowBottomIconSet;
