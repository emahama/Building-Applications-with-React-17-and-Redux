import React from "react";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
};

export default App;
