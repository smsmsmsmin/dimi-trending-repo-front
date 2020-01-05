import React from "react";
import css from "@emotion/css";
import Box from "./Box";
import { majorName } from "../utils/major";

interface IProps {
  name: string;
  username: string;
  th: string | number;
  major: "HD" | "WP" | "EB" | "DC";
}

const ProfileBox = (props: IProps) => {
  const { name, username, th, major } = props;

  return (
    <a href={`https://github.com/${username}`} css={styles.container}>
      <Box css={styles.box}>
        <div css={styles.imageWrap}>
          <img
            src="https://github.com/yooonspace.png"
            css={styles.image}
            alt={`${username}'s profile`}
          />
        </div>
        <div css={styles.infoWrap}>
          <span css={styles.name}>{name}</span>
          <div css={styles.chipWrap}>
            <span css={styles.chip}>{th}기</span>
            {/*<span css={[styles.chip, css`background-color: ${majorColor[major]}; color: white;`]}>{majorName[major]}</span>*/}
            <span css={[styles.chip, styles.majorChip]}>
              {majorName[major]}
            </span>
          </div>
          <span css={styles.username}>@{username}</span>
        </div>
      </Box>
    </a>
  );
};

const styles = {
  container: css`
    max-width: calc(25% - 20px);
    height: fit-content;
    padding: 10px;
    text-decoration: none;
    color: initial;
    @media (max-width: 767px) {
      max-width: 100%;
    }
  `,
  box: css`
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      flex-direction: row;
      align-items: center;
      margin-bottom: 0;
    }
  `,
  imageWrap: css`
    display: block;
    width: 90%;
    height: 90%;
    margin: 0 auto 20px auto;
    @media (max-width: 767px) {
      width: 50%;
      height: 50%;
      margin: 0 15px 0 0;
    }
  `,
  image: css`
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  `,
  infoWrap: css`
    width: 100%;
  `,
  major: css`
    top: 40px;
    right: -10px;
  `,
  name: css`
    display: block;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 20px;
    }
  `,
  username: css`
    font-size: 20px;
    color: #666666;
    @media (max-width: 767px) {
      font-size: 17px;
      margin-bottom: 0;
    }
  `,
  chipWrap: css`
    display: flex;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      // margin-bottom: 0;
    }
  `,
  chip: css`
    display: flex;
    align-items: center;
    height: 30px;
    border-radius: 20px;
    font-size: 14px;
    padding: 0 10px;
    background: #e4e4e4;
    & :first-of-type {
      margin-right: 5px;
    }
  `,
  majorChip: css`
    background-color: #424242;
    color: white;
  `
};

export default ProfileBox;
