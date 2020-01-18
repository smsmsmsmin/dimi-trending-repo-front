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
              <img src={star} css={styles.star} alt="star" />
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
        <div css={styles.rightWrap}>
          <NavLink
            exact
            to="/repository"
            css={styles.menu}
          >
            레포지토리
          </NavLink>
          <NavLink
            to="/developer"
            css={styles.menu}
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
    @media (max-width: 767px) {
      flex-direction: column;
    }
  `,
  leftWrap: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.875em 0;
    @media (max-width: 767px) {
      padding: 1.25em 0;
      flex-direction: column;
    }
  `,
  rightWrap: css`
    padding: 1.875em 20px;
    flex-direction: row;
    display: flex;
    @media (max-width: 767px) {
      padding: 0 0 1.25em 0;
    }
  `,
  logo: css`
    width: 65px;
    margin-right: 0.938em;
    @media (max-width: 767px) {
      margin-right: 0;
      margin-bottom: 0.625em;
    }
  `,
  headText: css`
    width: fit-content;
    position: relative;
    font-size: 1.563rem;
    font-weight: 700;
    margin-bottom: 0.625em;
    @media (max-width: 767px) {
      margin-bottom: 0;
    }
  `,
  star: css`
    display: none;
    position: absolute;
    width: 1.563rem;
    top: -0.625em;
    right: -0.625em;
    transform: rotate(20deg);
  `,
  menu: css`
    border: 0;
    text-decoration: none;
    font-size: 1.25em;
    color: #586069;
    margin-left: 0.938em;
    transition: 300ms color;
    display: block;
    transition-timing-function: cubic-bezier(.06,.67,.24,.91);
    & :first-of-type {
      margin-left: 0;
    }
    &.active {
      color: #E81572;
    }
    &:hover:not(.active) {
      color: #D660BB;
    }
  `
};

export default Header;
