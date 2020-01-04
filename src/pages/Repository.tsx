import React from "react";
import RepositoryRow from "../components/RepositoryRow";
import Box from "../components/Box";
import PageTitle from "../components/PageTitle";

const Repository: React.FC = () => {
  return (
    <>
      <PageTitle>레포지토리</PageTitle>
      <Box>
        <RepositoryRow
          username="yooonspace"
          repository="dimi-trending-repo-front"
          language="TypeScript"
          description="디미고의 인기있는 프로젝트 레포지토리를 모아서 보여주는 프로젝트"
          star={300}
          forked={99}
        />
        <RepositoryRow
          username="yooonspace"
          repository="dimi-trending-repo-front"
          language="TypeScript"
          description="디미고의 인기있는 프로젝트 레포지토리를 모아서 보여주는 프로젝트"
          star={300}
          forked={99}
        />
        <RepositoryRow
          username="yooonspace"
          repository="dimi-trending-repo-front"
          language="TypeScript"
          description="디미고의 인기있는 프로젝트 레포지토리를 모아서 보여주는 프로젝트"
          star={300}
          forked={99}
        />
        <RepositoryRow
          username="yooonspace"
          repository="dimi-trending-repo-front"
          language="TypeScript"
          description="디미고의 인기있는 프로젝트 레포지토리를 모아서 보여주는 프로젝트"
          star={300}
          forked={99}
        />
      </Box>
    </>
  );
};

export default Repository;
