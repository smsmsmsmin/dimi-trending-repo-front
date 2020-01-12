import React from "react";
import css from "@emotion/css";

interface IProps {
  name: string;
  users: Array<string>;
}

const RepositoryRowBottomIconSetHover = (props: IProps) => (
  <div css={styles.container}>
    <span>{props.name}</span>
    <div css={styles.profileWrap}>
      {props.users.map(username => (
        <a css={styles.profileImgWrap} href={`https://github.com/${username}`} key={username}>
          <img
            css={styles.profileImg}
            src={`https://github.com/${username}.png`}
            alt={`${username}'s profile`}
          />
        </a>
      ))}
    </div>
  </div>
);

const styles = {
  container: css`
    display: none;
    flex-direction: column;
    background-color: white;
    border: 1px solid #e1e4e8;
    position: absolute;
    top: 20px;
    padding: 10px;
    border-radius: 5px;
    cursor: default;
    @media (max-width: 767px) {
      display: none !important;
    }
  `,
  profileWrap: css`
    display: flex;
    width: 100%;
    margin-top: 10px;
  `,
  profileImgWrap: css`
    margin-right: 5px;
  `,
  profileImg: css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
    & :last-child {
      margin-right: 0;
    }
  `
};

export default RepositoryRowBottomIconSetHover;
