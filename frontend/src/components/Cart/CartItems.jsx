import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import CartCard from "./CartCard";
import "../../styles/cartpage.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const {carts} = useSelector((store) => store.cart);
  return (
    <Box>
      <Heading fontSize={"xx-large"}>Your Cart Items(3)</Heading>
      <Box
        padding="20px 0px"
        display={"grid"}
        gridTemplateColumns="repeat(1,1fr)"
        gap={"20px"}
      >
        {carts && carts.map((ele) => <CartCard title={ele.prodId.product_title} image={ele.prodId.images} price={ele.prodId.price}></CartCard>)}
      </Box>
    </Box>
  );
};

export default CartItems;