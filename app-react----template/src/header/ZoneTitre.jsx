import React from "react";
import logo from "../assets/logoSorbonne.png"; 
import "./ZoneTitre.css";

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <img src={logo} alt="Project Logo" className="project-logo" />
      <h1>Mon forum</h1>
    </div>
  );
};

export default HeaderTitle;
