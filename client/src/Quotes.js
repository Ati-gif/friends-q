import "./App.css";
import Tvquotes from "./components/Tvquotes";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Quote = () => {
  useEffect(() => {
    console.log("Quote component Mounted");
  }, []);
  return (
    <div>
      <h1>Quote Page</h1>
      <Link to="/">Home</Link>
    </div>
  );
};
export default Quote;
