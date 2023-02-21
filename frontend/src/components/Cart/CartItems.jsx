import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import CartCard from "./CartCard";
import "../../styles/cartpage.css";
import { useSelector } from "react-redux";

const CartItems = ({toggle}) => {
  const {carts,cartCount} = useSelector((store) => store.cart);
  return (
    <Box>
      <Heading fontSize={"xx-large"}>Your Cart Items({cartCount})</Heading>
      <Box
        padding="20px 0px"
        display={"grid"}
        gridTemplateColumns="repeat(1,1fr)"
        gap={"20px"}
      >
        {carts && carts.map((ele) => <CartCard key={ele._id} title={ele.prodId.product_title} image={ele.prodId.images} price={ele.prodId.price} quan={ele.quantity} quantity={ele.prodId.quantity} cartId={ele._id} toggle={toggle}></CartCard>)}
      </Box>
    </Box>
  );
};

export default CartItems;
