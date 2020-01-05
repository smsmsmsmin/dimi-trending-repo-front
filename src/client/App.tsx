import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Developer, Repository, Register, Root } from "../pages";
import Header from "../components/Header";
import PageWrap from "../components/PageWrap";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <PageWrap>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/register" component={Register} />
          <Route path="/repository" component={Repository} />
          <Route path="/developer" component={Developer} />
        </Switch>
      </PageWrap>
    </BrowserRouter>
  );
};

export default App;
