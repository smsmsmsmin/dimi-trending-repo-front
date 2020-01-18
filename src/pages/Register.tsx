import React, { useCallback, useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Box from "../components/Box";
import css from "@emotion/css";
import Button from "../components/Button";
import RegisterInput from "../components/RegisterInput";
import PageDescription from "../components/PageDescription";
import auth from "../utils/auth";
import { RouteComponentProps } from "react-router";
import api from "../utils/api";
import SegmentedSelect from "../components/SegmentedSelect";
import ClickPopDiv from "../components/ClickPop"

interface IInfo {
  name: string;
  username: string;
  th: string;
  major: string;
}

const Register: React.FC<RouteComponentProps> = props => {
  const [validation, setValidation] = useState<boolean>(false);
  const [info, setInfo] = useState<IInfo>({
    name: "",
    username: "",
    th: "",
    major: ""
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      e.persist();
      setInfo(p => ({ ...p, [e.target.name]: e.target.value }));
    },
    []
  );

  const setAnimatedData = useCallback((name: string, value: string) => {
    setInfo(p => ({
      ...p,
      [name]: value
    }));
  }, []);

  useEffect(() => {
    setValidation(!(info.name && info.username));
    console.log(info);
  }, [info]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (info.name && info.username) {
      api
        .post("/useradd", {
          params: {
            name: info.name,
            department: info.major,
            year: info.th,
            githubid: info.username
          }
        })
        .then(r => {
          console.log(r);
          auth.setUserInfo(info);
          alert("등록이 완료되었습니다.");
          props.history.push("/repository");
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      alert("입력한 정보를 다시 한번 확인해주세요.");
    }
  };

  return (
    <Box
      css={css`
        width: 50%;
        margin: 0 auto;
        @media (max-width: 767px) {
          width: 100%;
        }
      `}
    >
      <PageTitle type="center">디미고인이신가요?</PageTitle>
      <PageDescription type="center" margin="2.5">
        정보 수집을 위해 아래의 폼을 제출해주세요!
      </PageDescription>
      <form onSubmit={handleSubmit}>
        <RegisterInput
          label="이름"
          name="name"
          value={info.name}
          onChange={handleChange}
        />
        <RegisterInput
          label="Github Username"
          name="username"
          inputLabel="@"
          value={info.username}
          onChange={handleChange}
        />
        <SegmentedSelect
          label="기수"
          name="th"
          value={info.th}
          onChange={setAnimatedData}
          options={[
            { value: "17", customLabel: "17기" },
            { value: "18", customLabel: "18기" },
            { value: "19", customLabel: "19기" }
          ]}
        />
        <SegmentedSelect
          label="학과"
          name="major"
          value={info.major}
          onChange={setAnimatedData}
          options={[
            { value: "DC" },
            { value: "EB" },
            { value: "WP" },
            { value: "HD" }
          ]}
        />
        <ClickPopDiv
          css={css`
            display: flex;
            justify-content: flex-end;
            padding-top: 2.5em;
          `}
        >
          <Button type="submit" disabled={validation}>
            제출
          </Button>
        </ClickPopDiv>
      </form>
    </Box>
  );
};

export default Register;
