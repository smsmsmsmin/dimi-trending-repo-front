import React, { useEffect, useState } from "react";
import css from "@emotion/css";
import PageTitle from "../components/PageTitle";
import api from "../utils/api";
import { majorName } from "../utils/major";
import DeveloperProfile from "../components/DeveloperProfile";

export interface IDevelopers {
  _id: string;
  name: string;
  githubid: string;
  year: string;
  department: keyof typeof majorName;
  bio: string;
  email: string;
  followers: number;
  public_repos: number;
  total_stars: number;
}
const Developer: React.FC = () => {
  const [developers, setDevelopers] = useState<Array<IDevelopers>>([]);

  useEffect(() => {
    api.get("/get/rankeduser").then(({ data }) => {
      setDevelopers(data);
    });
  }, []);

  return (
    <>
      <PageTitle>개발자</PageTitle>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {developers.map(developer => (
          <DeveloperProfile key={developer._id} {...developer} />
        ))}
      </div>
    </>
  );
};

export default Developer;
