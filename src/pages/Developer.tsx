import React from "react";
import PageWrap from "../components/PageWrap";
import ProfileBox from "../components/ProfileBox";
import css from "@emotion/css";

const Developer: React.FC = () => {
  return (
    <PageWrap
      css={css`
        display: flex;
        flex-wrap: wrap;
        height: fit-content;
      `}
    >
      <ProfileBox name="이승민" username="yooonspace" th="19" major="WP"/>
      <ProfileBox name="이승민" username="yooonspace" th="19" major="HD"/>
      <ProfileBox name="이승민" username="yooonspace" th="19" major="DC"/>
      <ProfileBox name="이승민" username="yooonspace" th="19" major="EB"/>
      <ProfileBox name="이승민" username="yooonspace" th="19" major="WP"/>
      <ProfileBox name="이승민" username="yooonspace" th="19" major="HD"/>
    </PageWrap>
  );
};

export default Developer;
