import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByName } from "../redux/Actions";

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(getProductsByName(e.target.value));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search products..."
      />
    </div>
  );
};

export default Search;
