import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Developer, Repository } from "../pages";
import Header from "../components/Header";

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Repository} />
      <Route exact path="/developer" component={Developer} />
    </Switch>
  </BrowserRouter>
);

export default App;
