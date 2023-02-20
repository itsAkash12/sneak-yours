import { Box, Button, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import {ImCross} from "react-icons/im"
import "../../styles/cartpage.css"

const CartCard = ({title, image, price}) => {
  console.log(image,title,price);
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
      <Text fontSize={{base:"xs", md:"sm", lg:"sm" , xl:"md" }}>{title}</Text>
      <Text fontSize={{base:"xs", md:"sm", lg:"sm" , xl:"md" }}>{`₹${parseFloat(price).toLocaleString()}.00`}
</Text>
      <Select w={"60px"}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Select>
      <Button><ImCross></ImCross></Button>
    </Box>
  );
};

export default CartCard;
