import React from "react";
import css from "@emotion/css";
import logo from "../assets/logo.png";
import star from "../assets/star.svg";

const Header: React.FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.headWrap}>
        <img css={styles.logo} src={logo} alt="logo" />
        <span css={styles.headText}>
          <img src={star} css={styles.star} />
          DIMI TRANDING REPO
        </span>
        <span>
          디미고의 인기있는 프로젝트 레포지토리를 모아서 보여주는 프로젝트
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
  `,
  logo: css`
    width: 200px;
    margin-bottom: 30px;
  `,
  headWrap: css`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
  `,
  headText: css`
    position: relative;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 10px;
  `,
  star: css`
    position: absolute;
    width: 30px;
    top: -10px;
    right: -10px;
    transform: rotate(20deg);
  `
};

export default Header;
