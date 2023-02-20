import { Box, Button, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteCart, getCart, increaseQuantity } from "../../redux/cart/cart.actions";
import "../../styles/cartpage.css";

const CartCard = ({ title, image, price, quan, quantity, cartId, toggle }) => {
  const dispatch = useDispatch();
  const handleAddQuan=async(cartId)=> {
    await dispatch(increaseQuantity(cartId));
    // dispatch(getCart(token));
    toggle()
  }
  const handleDelQuan=async(cartId)=> {
    await dispatch(decreaseQuantity(cartId));
    toggle();
  }
  const handleDeleteCart=async(cartId)=> {
    await dispatch(deleteCart(cartId));
    toggle();
  }
  return (
    <Box
      w={"95%"}
      margin="auto"
      padding={"10px"}
      className="cart_card"
      gap={"5px"}
    >
      <Image
        border={"1px solid grey"}
        borderTopLeftRadius={"15px"}
        borderBottomRightRadius={"15px"}
        src={image[0].url}
      />
      <Text fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "md" }}>
        {title}
      </Text>
      <Text fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "md" }}>
        {`₹${parseFloat(price).toLocaleString()}.00`}
      </Text>
      <Box
        display={"flex"}
        gap="10px"
        justifyContent={"center"}
        alignItems="center"
      >
        <Button onClick={()=> handleDelQuan(cartId)}>-</Button>
        <Text>{quan}</Text>
        <Button onClick={()=> handleAddQuan(cartId)}>+</Button>
      </Box>
      <Button onClick={()=> handleDeleteCart(cartId)}>
        <ImCross></ImCross>
      </Button>
    </Box>
  );
};

export default CartCard;
