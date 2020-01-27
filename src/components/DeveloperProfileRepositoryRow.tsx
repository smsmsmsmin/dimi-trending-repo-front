import React from "react";
import RepositoryRowBottomIconSet from "./RepositoryRowBottomIconSet";
import { IRepo } from "../pages/Repository";
import css from "@emotion/css";

const DeveloperProfileRepositoryRow = (props: IRepo) => {
  return (
    <li key={props._id} css={styles.list}>
      <a href={props.repourl} css={styles.link}>
        <div css={styles.listLeft}>
          <RepositoryRowBottomIconSet type={props.language} />
          {props.reponame}
        </div>
        <div css={styles.listRight}>
          <RepositoryRowBottomIconSet type="star" css={styles.starSet}>
            {props.stargazer_count}
          </RepositoryRowBottomIconSet>
          <RepositoryRowBottomIconSet type="forked">
            {props.forkazger_count}
          </RepositoryRowBottomIconSet>
        </div>
      </a>
    </li>
  );
};

const styles = {
  list: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
  `,
  link: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: inherit;
  `,
  starSet: css`
    cursor: pointer;
    & :hover > div {
      display: flex;
    }
  `,
  listLeft: css`
    display: flex;
  `,
  listRight: css`
    display: flex;
  `
};

export default DeveloperProfileRepositoryRow;
