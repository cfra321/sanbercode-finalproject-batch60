import React, { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching:", searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="mt-4 mb-8 flex justify-center items-center">
      <div className="relative w-full max-w-3xl"> {/* Change max-width here */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/11741/11741045.png"
          alt="Search Icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
        />
        <input
          type="text"
          placeholder="Cari pekerjaan..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full pl-10 p-3 border border-gray-300 rounded-l-[2px] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
      </div>
      <button
        type="submit"
        aria-label="Search"
        className="p-3 bg-blue-600 rounded-r-[2px] text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
