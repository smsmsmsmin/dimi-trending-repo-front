import React from "react";
import css from "@emotion/css";
import Box from "./Box";
import {majorName} from "../utils/major";

interface IProps {
  name: string;
  username: string;
  th: string | number;
  major: "HD" | "WP" | "EB" | "DC";
}

const ProfileBox = (props: IProps) => {
  const { name, username, th, major } = props;

  return (
    <div css={styles.container}>
      <Box css={styles.box}>
        <div css={styles.imageWrap}>
          <img
            src="https://github.com/yooonspace.png"
            css={styles.image}
            alt={`${username}'s profile`}
          />
        </div>
        <span css={styles.name}>{name}</span>
        <div css={styles.chipWrap}>
          <span css={styles.chip}>{th}기</span>
          {/*<span css={[styles.chip, css`background-color: ${majorColor[major]}; color: white;`]}>{majorName[major]}</span>*/}
          <span css={[styles.chip, styles.majorChip]}>{majorName[major]}</span>
        </div>
        <span css={styles.username}>@{username}</span>
      </Box>
    </div>
  );
};

const styles = {
  container: css`
    max-width: calc(25% - 20px);
    height: fit-content;
    padding: 10px;
    @media (max-width: 767px) {
      max-width: 100%;
    }
  `,
  box: css`
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
  `,
  imageWrap: css`
    display: block;
    width: 90%;
    height: 90%;
    margin-bottom: 20px;
    margin: 0 auto 20px auto;
  `,
  image: css`
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  `,
  major: css`
    top: 40px;
    right: -10px;
  `,
  name: css`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
  `,
  username: css`
    font-size: 20px;
    color: #666666;
  `,
  chipWrap: css`
    display: flex;
    margin-bottom: 10px;
  `,
  chip: css`
    display: flex;
    align-items: center;
    height: 30px;
    border-radius: 20px;
    // font-size: 14px;
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
