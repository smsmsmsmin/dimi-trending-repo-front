import React from "react";
import css from "@emotion/css";
import logo from "../assets/logo.png";
import star from "../assets/star.svg";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.headWrap}>
        <div css={styles.leftWrap}>
          <img css={styles.logo} src={logo} alt="logo" />
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <span css={styles.headText}>
              <img src={star} css={styles.star} />
              DIMI TRENDING REPO
            </span>
            <span
              css={css`
                color: #586069;
                @media (max-width: 767px) {
                  display: none;
                }
              `}
            >
              디미고의 인기있는 프로젝트 레포지토리를 모아서 보여주는 프로젝트
            </span>
          </div>
        </div>
        <div>
          <NavLink
            exact
            to="/"
            css={styles.menu}
            activeStyle={{ color: "#e81572" }}
          >
            레포지토리
          </NavLink>
          <NavLink
            to="/developer"
            css={styles.menu}
            activeStyle={{ color: "#e81572" }}
          >
            개발자
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    width: 100%;
    justify-content: center;
  `,
  headWrap: css`
    display: flex;
    width: 1000px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  `,
  leftWrap: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  `,
  logo: css`
    width: 65px;
    margin-right: 10px;
    @media (max-width: 767px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  `,
  headText: css`
    width: fit-content;
    position: relative;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
  `,
  star: css`
    display: none;
    position: absolute;
    width: 25px;
    top: -10px;
    right: -10px;
    transform: rotate(20deg);
  `,
  menu: css`
    border: 0;
    text-decoration: none;
    font-size: 20px;
    color: #586069;
    margin-left: 15px;
    & :first-of-type {
      margin-left: 0;
    }
  `
};

export default Header;
