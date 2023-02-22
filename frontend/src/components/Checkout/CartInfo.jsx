import { Box, Divider, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const CartInfo = () => {
  return (
    <Box borderWidth="thin" borderRadius={"10px"} p="30px">
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        gap="20px"
        mb={"10px"}
      >
        <Heading fontSize={"2xl"} textAlign="center">
          <TbTruckDelivery></TbTruckDelivery>
        </Heading>
        <Heading fontSize={"xl"} textAlign="center">
          YOUR CART
        </Heading>
      </Box>
      <Divider></Divider>
      <Box mt={"15px"} mb="15px">
        <Box display={"flex"} gap="20px" alignItems={"center"}>
          <Image
            w="50%"
            src={
              "http://res.cloudinary.com/dyv0uxpi2/image/upload/v1675203940/s8zxfrioousgkow4wbci.jpg"
            }
          />
          <Box textAlign={"left"}>
            <Text>Price: ₹29,999.00</Text>
            <Text>Quantity: 02</Text>
          </Box>
        </Box>
      </Box>
      <Divider></Divider>
      <Box display={"grid"} gap="20px"  mt={"15px"} mb="15px">
        <Box display={"flex"} justifyContent="space-between">
          <Text>Shipping Charges</Text>
          <Text>₹500.00</Text>
        </Box>
        <Box display={"flex"} justifyContent="space-between">
          <Text>Taxes Charges</Text>
          <Text>₹500.00</Text>
        </Box>
      </Box>
      <Divider></Divider>
      <Box  mt={"15px"} mb="15px">
        <Box display={"flex"} justifyContent="space-between" fontSize={"xl"} fontWeight="600">
          <Text>Total</Text>
          <Text>₹30,499.00</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CartInfo;
