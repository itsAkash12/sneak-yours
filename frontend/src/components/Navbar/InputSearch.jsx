import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import { useDispatch } from "react-redux";
import { SEARCH_BY_VALUE } from "../../redux/product/product.types";

const InputSearch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const handleSearchByValue = () => {
    if (location.pathname == "/products") {
      dispatch({ type: SEARCH_BY_VALUE, payload: search });
      setSearch("");
    } else {
      navigate("/products");
      dispatch({ type: SEARCH_BY_VALUE, payload: search });
      setSearch("");
    }
  };
  return (
    <Box
      position={"sticky"}
      top="0px"
      display={"flex"}
      gap="2px"
      className="search-box"
    >
      <input
        type="text"
        className="search-input"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-btn" onClick={() => handleSearchByValue()}>
        <FaSearch />
      </button>
    </Box>
  );
};

export default InputSearch;
