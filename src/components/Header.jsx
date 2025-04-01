import React from "react";
import HeaderTitle from "./ZoneTitre";
import HeaderFilter from "./Filtre";
import "./Header.css";

const Header = ({ onFilter }) => {
  return (
    <header className="header">
      <HeaderTitle />
      <HeaderFilter onFilter={onFilter} />
    </header>
  );
};

export default Header;
