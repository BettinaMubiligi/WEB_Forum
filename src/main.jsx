/* import React from "react";
import ReactDOM from "react-dom/client";
import AuthPage from "./components/PageLogin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPage />
  </React.StrictMode>
); */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "./index.css";

const handleFilter = (query) => {
  console.log("Filtering content for:", query);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header onFilter={handleFilter} />
  </React.StrictMode>
);