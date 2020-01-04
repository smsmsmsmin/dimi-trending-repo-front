import React from "react";
import auth from "../utils/auth";
import { Redirect } from "react-router";

const Root = () => {
  return (
    <>
      {auth.getUserInfo() ? (
        <Redirect to="/repository" />
      ) : (
        <Redirect to="/register" />
      )}
    </>
  );
};

export default Root;
