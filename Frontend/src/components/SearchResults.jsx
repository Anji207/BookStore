import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get("q");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white pt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      {/* Add logic to show real results here */}
      <p>Display results matching your query here...</p>
    </div>
  );
};

export default SearchResults;
