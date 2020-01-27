import React, {useState} from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
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
  const [spinner, showSpinner] = useState(false)
  const click = () => {
    showSpinner(true)
  }
  return (
    <a
      href={`https://github.com/${username}`}
      css={styles.container} onClick={click}>
        <div>
        <Box>
        {spinner && <ClimbingBoxLoader css={styles.climber(spinner)} />}
        <div css={[styles.imageWrap, disappearingAnimation.imageWrap(spinner)]}>
          <img
            src="https://github.com/yooonspace.png"
            css={[styles.image, disappearingAnimation.image(spinner)]}
            alt={`${username}'s profile`}
          />
        </div>
        <div css={styles.infoWrap}>
          <span css={[styles.name, disappearingAnimation.name(spinner)]}>{name}</span>
          <div css={[styles.chipWrap, disappearingAnimation.chipWrap(spinner)]}>
            <span css={[styles.chip, disappearingAnimation.chip(spinner)]}>{th}기</span>
            {/*<span css={[styles.chip, css`background-color: ${majorColor[major]}; color: white;`]}>{majorName[major]}</span>*/}
            <span css={[styles.chip, styles.majorChip,disappearingAnimation.chip(spinner)]}>
              {majorName[major]}
            </span>
          </div>
          <span css={styles.username}>@{username}</span>
          {spinner && <span css={styles.movingto}>으로 이동하는중...</span>}
        </div>
      </Box>

        </div>
      </a>
  );
};
const disappearingAnimation = {
  name: (spinner: boolean) => spinner && css`
    font-size: 0rem;
    margin-bottom: 0em;
    opacity: 0;
  `,
  image: (spinner: boolean) => spinner && css`
    opacity: 0;
    height: 0px;
  `,
  chip: (spinner: boolean) => spinner && css`
    height: 0px;
    font-size: 0px;
    padding: 0px 0px;
  `,
  imageWrap: (spinner: boolean) => spinner && css`
    width: 0px;
    height: 0px;
    margin: 0px 0px;
  `,
  chipWrap: (spinner: boolean) => spinner && css`
    margin: 0px 0px;
  `
}
const styles = {
  container: css`
    max-width: calc(25% - 1.25em);
    height: fit-content;
    padding: 0.625em;
    text-decoration: none;
    color: initial;
    transition: 300ms;
    transition-timing-function: cubic-bezier(.06,.67,.24,.91);
    @media (max-width: 767px) {
      max-width: 100%;
    }
    & :hover {
      transform: translateY(-5px);
    }
  `,
  box: () => css`
    display: flex;
    padding: 1.25em;
    margin-bottom: 1.25em;
    transition: 200ms;
    transition-timing-function: cubic-bezier(.06,.67,.24,.91);
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
    transition-timing-function: cubic-bezier(.06,.67,.24,.91);
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
  climber: (spinner: Boolean) => css`
    transition: 300ms;
    opacity: 0;
    ${spinner && ({
      opacity: 0.3
    })}
  `,
  movingto: css`
    font-size: 1.25em;
    line-height: 1.5em;
  `
};

export default ProfileBox;
