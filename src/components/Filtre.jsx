import React, { useState } from "react";
import "./Filtre.css";

const HeaderFilter = ({ onFilter }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(query); // Calls parent function with the query
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Filter content..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default HeaderFilter;
