import React from "react";
import css from "@emotion/css";
import Box from "./Box";

interface IProps {
  name: string;
  username: string;
  th: string | number;
  major: "HD" | "WP" | "EB" | "DC";
}

const ProfileBox = (props: IProps) => {
  const { name, username, th, major } = props;
  const majorColor = {
    EB: "#424242",
    DC: "#ff0080",
    WP: "#9a2efe",
    HD: "#3a01df"
  };
  return (
    <div css={styles.container}>
      <Box css={styles.box}>
        <div css={styles.imageWrap}>
          <img src="https://github.com/yooonspace.png" css={styles.image} />
          <div css={[styles.circle, styles.th]}>{th}</div>
          <div
            css={[
              styles.circle,
              styles.major,
              css`
                // background-color: ${majorColor[major]};
              `
            ]}
          >
            {major}
          </div>
        </div>
        <span css={styles.name}>{name}</span>
        <span css={styles.username}>@{username}</span>
      </Box>
    </div>
  );
};

const styles = {
  container: css`
    max-width: calc(33.3333% - 20px);
    height: fit-content;
    padding: 10px;
  `,
  box: css`
    display: flex;
    margin-bottom: 20px;
  `,
  imageWrap: css`
    display: block;
    width: 90%;
    height: 90%;
    margin-bottom: 20px;
    position: relative;
    margin: 0 auto 20px auto;
  `,
  image: css`
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  `,
  circle: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 25px;
    color: white;
    background-color: #424242;
    border-radius: 30px;
  `,
  th: css`
    background-color: #e81572;
    right: 20px;
  `,
  major: css`
    top: 50px;
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
  `
};

export default ProfileBox;
