import React, { useCallback, useEffect, useState } from "react";
import Box from "../components/Box";
import css from "@emotion/css";
import Button from "../components/Button";
import RegisterInput from "../components/RegisterInput";
import DimigoInLogo from "../assets/dimigoin.svg";
import dimigoin from "../utils/dimigoin";
import auth from "../utils/auth";
import { RouteComponentProps } from "react-router";
import Swal from "sweetalert2";
import { classToMajor, gradeToYear } from "../utils/convert";
import api from "../utils/api";
import SweetAlert from "../utils/swal";

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

  useEffect(() => {
    setValidation(!!(info.id && info.password));
  }, [info]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validation) {
      try {
        const request = await dimigoin.getUserInfo(info);
        if (request.data) {
          const { data } = request;
          await auth.setUserInfo(info);
          const { value } = await Swal.fire({
            title: "추가 정보 입력",
            text: "자신의 Github Username(닉네임 아님)을 입력해주세요.",
            icon: "info",
            input: "text",
            inputPlaceholder: "yooonspace",
            confirmButtonText: "확인"
          });
          await api.post("/useradd", {
            params: {
              name: data.name,
              department: classToMajor(data.klass),
              year: gradeToYear(data.grade),
              githubid: value,
              dimigoinid: data.idx
            }
          });
          await SweetAlert.success("성공적으로 등록이 완료되었습니다!");
          await props.history.push("/repository");
        } else {
          await SweetAlert.error("입력한 정보를 다시 한번 확인해주세요.");
        }
      } catch (e) {
        await SweetAlert.error("아이디나 비밀번호가 틀렸습니다.");
      }
    }
  };

  return (
    <Box css={styles.box}>
      <div css={styles.header}>
        <img src={DimigoInLogo} alt="DIMIGOIN LOGO" css={styles.logo} />
        <span css={styles.headerText}>디미고인으로 로그인</span>
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
        <div css={styles.buttonWrap}>
          <Button type="submit" disabled={false}>
            로그인
          </Button>
        </div>
      </form>
    </Box>
  );
};

const styles = {
  box: css`
    width: 50%;
    margin: 0 auto;
    @media (max-width: 767px) {
      width: 100%;
    }
  `,
  header: css`
    display: flex;
    align-items: center;
    margin-bottom: 3em;
    flex-direction: column;
    justify-content: center;
  `,
  logo: css`
    width: 70px;
    margin-bottom: 1.25em;
  `,
  headerText: css`
    font-size: 1.7em;
    font-weight: 700;
  `,
  buttonWrap: css`
    display: flex;
    justify-content: flex-end;
    padding-top: 3em;
  `
};

export default Register;
