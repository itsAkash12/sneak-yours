import { Box, Button, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import {ImCross} from "react-icons/im"
import "../../styles/cartpage.css"

const CartCard = () => {
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
        src="https://res.cloudinary.com/dyv0uxpi2/image/upload/v1675268194/jakugjmugjqv9hiujpm4.jpg"
      />
      <Text fontSize={{base:"xs", md:"sm", lg:"sm" , xl:"md" }}>WMN’S RUN STAR MOTION CX PLATFORM ‘RUST PINK’</Text>
      <Text fontSize={{base:"xs", md:"sm", lg:"sm" , xl:"md" }}>Rs. 29,995.00
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
