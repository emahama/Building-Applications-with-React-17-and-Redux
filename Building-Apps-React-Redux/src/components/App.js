import React from "react";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./common/PageNotFound";
import CoursesPage from "./courses/CoursesPage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
