import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import CartDetails from "../components/Cart/CartDetails";
import CartItems from "../components/Cart/CartItems";
import "../styles/cartpage.css";
import { getCart } from "../redux/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";

const Cartpage = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((store) => store.cart);
  console.log(carts);
  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <Box>
      <Navbar></Navbar>
      <Box margin="auto" mt={"50px"}>
        {carts == undefined ? (
          <Box>
            <Text>No Data To Show</Text>
          </Box>
        ) : (
          <Box w={"95%"} className="cart_container">
            <CartItems></CartItems>
            <CartDetails></CartDetails>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Cartpage;
