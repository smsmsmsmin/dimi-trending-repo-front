import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Root } from "../pages";
import Header from "../components/header";

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Root} />
    </Switch>
  </BrowserRouter>
);

export default App;
