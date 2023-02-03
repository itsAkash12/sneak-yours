import { Box } from "@chakra-ui/react";
import React from "react";
import {FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

const InputSearch = () => {
  return (
    <Box position={"sticky"} top="0px" display={"flex"} gap="2px" className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="search"
      />
      <button className="search-btn" >
        <FaSearch />
      </button>
    </Box>
  );
};

export default InputSearch;
