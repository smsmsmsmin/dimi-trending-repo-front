import React from "react";
import css from "@emotion/css";
import RepositoryRowBottomIconSet from "./RepositoryRowBottomIconSet";
import ColorSet from "../styles/github-language-colors";

interface IProps {
  username: string;
  repository: string;
  language: keyof typeof ColorSet;
  description: string;
  star: number | string;
  forked: number | string;
}

const RepositoryRow = (props: IProps) => {
  const { username, repository, language, description, star, forked } = props;
  return (
    <div css={styles.container}>
      <div css={styles.leftWrap}>
        <a
          href={`https://github.com/${username}/${repository}`}
          css={styles.username}
        >
          {username}/<span css={styles.repository}>{repository}</span>
        </a>
        <span css={styles.description}>{description}</span>
        <div css={styles.bottomWrap}>
          <RepositoryRowBottomIconSet type={language}>
            {language}
          </RepositoryRowBottomIconSet>
          <RepositoryRowBottomIconSet type="star">
            {star}
          </RepositoryRowBottomIconSet>
          <RepositoryRowBottomIconSet type="forked">
            {forked}
          </RepositoryRowBottomIconSet>
        </div>
      </div>
      <a href={`https://github.com/${username}`} css={styles.profileImageA}>
        <img
          src={`https://github.com/${username}.png`}
          css={styles.profileImage}
        />
      </a>
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e1e4e8;
    padding: 30px 0;
    & :first-of-type {
      padding-top: 0;
    }
    & :last-child {
      border: 0;
      padding-bottom: 0;
    }
  `,
  leftWrap: css`
    max-width: 80%;
    @media (max-width: 767px) {
      max-width: 100%;
    }
  `,
  username: css`
    display: block;
    color: #0366d6;
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 20px;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  `,
  repository: css`
    font-weight: 700;
  `,
  description: css`
    display: block;
    margin-bottom: 20px;
    line-height: 1.4;
  `,
  bottomWrap: css`
    display: flex;
    font-size: 14px;
  `,
  profileImageA: css`
    margin: auto 0;
    @media (max-width: 767px) {
      display: none;
    }
  `,
  profileImage: css`
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
  `
};

export default RepositoryRow;
