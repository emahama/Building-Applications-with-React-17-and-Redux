// This is the entry point for our app
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
/*
The purpose of <Router> is to wrap the application components and enable the implementation of client-side routing.
* */
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
