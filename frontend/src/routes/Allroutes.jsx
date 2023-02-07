import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Productspage from "../pages/Productspage";
import Signup from "../pages/Signup";

const Allroutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Productspage />} />
      </Routes>
    </Box>
  );
};

export default Allroutes;
