import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ display: "flex" }}>
      <Link to="/">Home</Link>
      <p> - </p>
      <Link to="/about">About</Link>
      <p> - </p>
      <Link to="/quote">Quote</Link>
    </div>
  );
};

export default NavBar;
