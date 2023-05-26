import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    course: {
      title: "",
    },
  };

  render() {
    return <h2>Courses</h2>;
  }
}

export default CoursesPage;
