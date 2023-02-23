import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "../components/Error404";
import Navbar from "../components/Navbar/Navbar";
import PaymentSuccessAnimation from "../components/PaymentSuccess";
import Cartpage from "../pages/Cartpage";
import Checkout from "../pages/Checkout";
import Homepage from "../pages/Homepage";
import Loader from "../pages/Loader";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import Productspage from "../pages/Productspage";
import Signup from "../pages/Signup";
import SingleProduct from "../pages/SingleProduct";
import Wishlist from "../pages/Wishlist";

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
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<PaymentSuccessAnimation />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Box>
  );
};

export default Allroutes;
