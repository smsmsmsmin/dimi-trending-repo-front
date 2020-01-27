import React, { useCallback, useEffect, useState } from "react";
import Box from "../components/Box";
import css from "@emotion/css";
import Button from "../components/Button";
import RegisterInput from "../components/RegisterInput";
import DimigoInLogo from "../assets/dimigoin.svg";
import dimigoin from "../utils/dimigoin";
import auth from "../utils/auth";
import { RouteComponentProps } from "react-router";

interface IInfo {
  id: string;
  password: string;
}

const Register: React.FC<RouteComponentProps> = props => {
  const [validation, setValidation] = useState<boolean>(false);
  const [info, setInfo] = useState<IInfo>({
    id: "",
    password: ""
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
    setValidation(!!(info.id && info.password));
  }, [info]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validation) {
      const request = await dimigoin.getUserInfo(info);
      if (request.data) {
        await console.log(request);
        await auth.setUserInfo(info);
        await alert("등록이 완료되었습니다.");
        await props.history.push("/repository");
      }
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
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-bottom: 3em;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <img
          src={DimigoInLogo}
          css={css`
            width: 70px;
            margin-bottom: 1.25em;
          `}
        />
        <span
          css={css`
            font-size: 1.7em;
            font-weight: 700;
          `}
        >
          디미고인으로 로그인
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <RegisterInput
          name="id"
          value={info.id}
          onChange={handleChange}
          placeholder="아이디"
          autoComplete="off"
        />
        <RegisterInput
          name="password"
          type="password"
          value={info.password}
          onChange={handleChange}
          placeholder="비밀번호"
          autoComplete="off"
        />
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            padding-top: 3em;
          `}
        >
          <Button type="submit" disabled={false}>
            로그인
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default Register;
