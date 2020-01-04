import React from "react";
import ProfileBox from "../components/ProfileBox";
import css from "@emotion/css";
import PageTitle from "../components/PageTitle";

const Developer: React.FC = () => {
  return (
    <>
      <PageTitle>개발자</PageTitle>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          height: fit-content;
          margin-left: -10px;
          margin-right: -10px;
        `}
      >
        <ProfileBox name="이승민" username="yooonspace" th="19" major="WP" />
        <ProfileBox name="이승민" username="yooonspace" th="19" major="HD" />
        <ProfileBox name="이승민" username="yooonspace" th="19" major="DC" />
        <ProfileBox name="이승민" username="yooonspace" th="19" major="EB" />
        <ProfileBox name="이승민" username="yooonspace" th="19" major="WP" />
        <ProfileBox name="이승민" username="yooonspace" th="19" major="HD" />
      </div>
    </>
  );
};

export default Developer;
