import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import CartDetails from "../components/Cart/CartDetails";
import CartItems from "../components/Cart/CartItems";
import "../styles/cartpage.css"

const Cartpage = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box w={"95%"} className="cart_container" margin="auto" mt={"50px"}>
        <CartItems></CartItems>
        <CartDetails></CartDetails>
      </Box>
    </Box>
  );
};

export default Cartpage;
