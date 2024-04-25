import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByName } from "../redux/Actions";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(getProductsByName(e.target.value));
  };

  return (
    <div className="searchInput">
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
