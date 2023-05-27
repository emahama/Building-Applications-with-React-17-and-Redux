import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const CoursesPage = (props) => {
  const [course, setCourse] = useState({ title: "" });

  const handleChange = (event) => {
    const newCourse = { ...course, title: event.target.value };
    setCourse(newCourse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.actions.createCourse(course);
    // alert(this.state.course.title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
      {props.courses.map((course, index) => (
        <div key={index}>{course.title}</div>
      ))}
    </form>
  );
};

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
