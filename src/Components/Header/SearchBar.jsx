import React from "react";

function SearchBar() {
  return (
    <div className="p-2 bg-white text-black">
      <input
        className="w-full p-2 border rounded"
        placeholder="Search Amazon..."
      />
    </div>
  );
}

export default SearchBar;
