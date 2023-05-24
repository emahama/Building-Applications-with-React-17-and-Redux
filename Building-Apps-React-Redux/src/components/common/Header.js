import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyles = {
    color: "#F15B2A",
  };

  return (
    <nav>
      <NavLink to="/" exact activeStyle={activeStyles}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" exact activeStyle={activeStyles}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/courses" exact activeStyle={activeStyles}>
        Courses
      </NavLink>
    </nav>
  );
};

export default Header;
