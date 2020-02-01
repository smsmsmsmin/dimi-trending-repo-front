import React, { useEffect, useState } from "react";
import Box from "./Box";
import { majorColor, majorName } from "../utils/major";
import api from "../utils/api";
import css from "@emotion/css";
import { IDevelopers } from "../pages/Developer";
import { IRepo } from "../pages/Repository";
import ColorSet from "../styles/github-language-colors";
import DeveloperProfileRepositoryRow from "./DeveloperProfileRepositoryRow";
import GoldMedal from '../assets/medal-gold.svg'
import SilverMedal from '../assets/medal-silver.svg'
import BronzeMedal from '../assets/medal-bronze.svg'
const DeveloperProfile = (props: IDevelopers & {rank: number}) => {
  const [repositorys, setRepositorys] = useState<Array<IRepo>>([]);

  useEffect(() => {
    api
      .get("/get/userrankedrepo", {
        params: { githubid: props.githubid }
      })
      .then(({ data }) => {
        setRepositorys(data);
      });
  }, []);

  return (
    <Box key={props._id} css={styles.container}>
      <div css={styles.leftWrap}>
        <div css={styles.imageWrap}>
          {props.rank < 3 && <div css={styles.medalWrap}>
            <img src={[GoldMedal, SilverMedal, BronzeMedal][props.rank]} css={styles.medal} />
          </div>}
          <img
            src={`https://github.com/${props.githubid}.png`}
            css={styles.image}
            alt={`${props.githubid}'s profile`}
          />
        </div>
        <div css={styles.infoWrap}>
          <span css={styles.name}>{props.name}</span>
          <span css={styles.username}>@{props.githubid}</span>
          <div css={styles.chipWrap}>
            <span css={styles.chip}>{props.year}기</span>
            <span
              css={[
                styles.chip,
                styles.majorChip(majorColor[props.department])
              ]}
            >
              {majorName[props.department]}
            </span>
          </div>
        </div>
      </div>
      <div css={styles.rightWrap}>
        <ul css={styles.ul}>
          {repositorys.slice(0, 10).map(repository => (
            <DeveloperProfileRepositoryRow
              key={repository._id}
              {...repository}
            />
          ))}
        </ul>
      </div>
    </Box>
  );
};

const styles = {
  container: css`
    display: flex;
    flex-direction: row;
    width: 100%;
    text-decoration: none;
    color: initial;
    margin-bottom: 1em;
  `,
  leftWrap: css`
    width: 30%;
    @media (max-width: 767px) {
      width: 100%;
    }
  `,
  rightWrap: css`
    width: 70%;
    @media (max-width: 767px) {
      display: none;
    }
  `,
  imageWrap: css`
    display: block;
    width: 90%;
    margin: 0 auto 1.25em auto;
    @media (max-width: 767px) {
      width: 100%;
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
  medalWrap: css`
    height: 0px;
  `,
  medal: css`
    width: min(30%, 138px);
    position: relative;
    top: 1em;
    left: min(70%, 320px);
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
    margin-bottom: 0.25em;
    font-weight: 700;
    transition: 500ms;
    transition-timing-function: cubic-bezier(0.06, 0.67, 0.24, 0.91);
  `,
  username: css`
    display: block;
    font-size: 1.25em;
    color: #666666;
    margin-bottom: 0.625em;
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
  majorChip: (color: string) => css`
    // background-color: #424242;
    background-color: ${color};
    color: white;
  `,
  ul: css`
    width: 100%;
  `,
  circle: (language: keyof typeof ColorSet) => css`
    display: block;
    width: 0.938em;
    height: 0.938em;
    border-radius: 50%;
    margin-right: 5px;
    background-color: ${ColorSet[language] || "black"};
  `
};

export default DeveloperProfile;
