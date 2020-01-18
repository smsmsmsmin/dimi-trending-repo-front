import React, { useEffect, useState } from "react";
import RepositoryRow from "../components/RepositoryRow";
import Box from "../components/Box";
import PageTitle from "../components/PageTitle";
import api from "../utils/api";
import ColorSet from "../styles/github-language-colors";
import { majorName } from "../utils/major";

interface IRepo {
  _id: string;
  username: string;
  department: keyof typeof majorName;
  year: string;
  githubid: string;
  reponame: string;
  repourl: string;
  description: string;
  stargazer: Array<string>;
  stargazer_count: number;
  forkazger_count: number;
  language: keyof typeof ColorSet;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Array<IRepo>>([]);
  useEffect(() => {
    api.get("/get/rankedrepo").then(({ data }) => {
      setRepository(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <PageTitle>레포지토리</PageTitle>
      <Box>
        {repository.map(repository => (
          <RepositoryRow
            key={repository._id}
            username={repository.githubid}
            repository={repository.reponame}
            language={repository.language}
            description={repository.description}
            star={repository.stargazer_count}
            forked={repository.forkazger_count}
            user={{
              name: repository.username,
              th: repository.year,
              major: repository.department
            }}
          />
        ))}
      </Box>
    </>
  );
};

export default Repository;
