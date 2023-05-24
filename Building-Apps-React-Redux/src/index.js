// This is the entry point for our app
import React from "react";
import { render } from "react-dom";

const App = (props) => {
  return <p>Hi. from {props.message}</p>;
};

function Hello(props) {
  return <div>Hello world {props.message}</div>;
}

class Hello1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Hello world from {this.props.message}</div>;
  }
}

// render(<Hello1 message="class component" />, document.getElementById("app"));
// render(<Hello message="function component" />, document.getElementById("app"));
render(<App message="Arrow function " />, document.getElementById("app"));
