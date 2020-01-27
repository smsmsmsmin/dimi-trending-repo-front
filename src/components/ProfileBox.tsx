import React, { useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
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
      <div>
        <Box>
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
              <span css={[styles.chip, styles.majorChip]}>
                {majorName[major]}
              </span>
            </div>
            <span css={styles.username}>@{username}</span>
          </div>
        </Box>
      </div>
    </a>
  );
};

const styles = {
  container: css`
    max-width: calc(25% - 1.25em);
    height: fit-content;
    padding: 0.625em;
    text-decoration: none;
    color: initial;
    transition: 300ms;
    transition-timing-function: cubic-bezier(0.06, 0.67, 0.24, 0.91);
    @media (max-width: 767px) {
      max-width: 100%;
    }
  `,
  box: css`
    display: flex;
    padding: 1.25em;
    margin-bottom: 1.25em;
    transition: 200ms;
    transition-timing-function: cubic-bezier(0.06, 0.67, 0.24, 0.91);
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
    margin: 0 auto 1.25em auto;
    @media (max-width: 767px) {
      width: 50%;
      height: 50%;
      margin: 0 0.938em 0 0;
    }
  `,
  image: css`
    transition-duration: 300ms;
    transition-timing-function: linear;
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    opacity: 100%;
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
    font-size: 1.563rem;
    font-weight: 700;
    margin-bottom: 0.625em;
    transition: 500ms;
    transition-timing-function: cubic-bezier(0.06, 0.67, 0.24, 0.91);
  `,
  username: css`
    font-size: 1.25em;
    color: #666666;
    @media (max-width: 767px) {
      margin-bottom: 0;
    }
  `,
  chipWrap: css`
    display: flex;
    margin-bottom: 0.625em;
    @media (max-width: 767px) {
      // margin-bottom: 0;
    }
  `,
  chip: css`
    display: flex;
    align-items: center;
    height: 1.875em;
    border-radius: 1.25em;
    font-size: 1rem;
    padding: 0 0.625em;
    background: #e4e4e4;
    & :first-of-type {
      margin-right: 5px;
    }
  `,
  majorChip: css`
    background-color: #424242;
    color: white;
  `,
};

export default ProfileBox;
