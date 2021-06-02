import "./App.css";
import Tvquotes from "./components/Tvquotes";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function AppTvquotes() {
  useEffect(() => {
    console.log("AppTvquotes component Mounted");
  }, []);
  return (
    <div className="App">
      <Tvquotes />
    </div>
  );
}

export default AppTvquotes;
