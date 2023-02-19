import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Cartpage from "../pages/Cartpage";
import Homepage from "../pages/Homepage";
import Loader from "../pages/Loader";
import Login from "../pages/Login";
import Productspage from "../pages/Productspage";
import Signup from "../pages/Signup";
import SingleProduct from "../pages/SingleProduct";

const Allroutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Productspage />} />
        <Route path="/single/:id" element={<SingleProduct />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </Box>
  );
};

export default Allroutes;
