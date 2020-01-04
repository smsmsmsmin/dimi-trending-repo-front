import React from "react";
import PageTitle from "../components/PageTitle";
import Box from "../components/Box";
import css from "@emotion/css";

const Register = () => {
  return (
    <>
      <Box>
          <PageTitle>환영합니다!</PageTitle>
          <input css={css`font-size: 25px;`} type="text"/>
          <select>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
          </select>
          <select>
              <option>디지털컨텐츠과</option>
              <option>E-비즈니스과</option>
              <option>웹프로그래밍과</option>
              <option>해킹방어과</option>
          </select>
      </Box>
    </>
  );
};

export default Register;
