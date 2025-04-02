
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/Header";
import MainPage from "./components/MainPage";
import "./index.css";

const handleFilter = (query) => {
  console.log("Filtering content for:", query);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
    <Header onFilter={handleFilter} />
    <MainPage/>
    </div>
  </React.StrictMode>
);