import { Box, Divider, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { useSelector } from "react-redux";

const CartInfo = () => {
  const { carts } = useSelector((store) => store.cart);
  const [tax, setTax]= useState(500);
  // const total = carts.reduce(
  //   (acc, item) => acc + item.prodId.price * item.quantity,
  //   tax
  // )
  const total = localStorage.getItem("total");
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
      {carts &&
        carts.map((el) => (
          <Box key={el._id}>
            <Box mt={"15px"} mb="15px">
              <Box display={"flex"} gap="20px" alignItems={"center"}>
                <Image
                  w="50%"
                  src={el.prodId.images[1].url}
                />
                <Box textAlign={"left"}>
                  <Text>{`Price: ₹${parseFloat(el.prodId.price).toLocaleString()}.00`}</Text>
                  <Text>Quantity: {el.quantity}</Text>
                </Box>
              </Box>
            </Box>
            <Divider></Divider>
          </Box>
        ))}
      <Box display={"grid"} gap="20px" mt={"15px"} mb="15px">
        <Box display={"flex"} justifyContent="space-between">
          <Text>Shipping Charges</Text>
          <Text>{`₹ ${parseFloat(
              tax/2
            ).toLocaleString()}.00`}</Text>
        </Box>
        <Box display={"flex"} justifyContent="space-between">
          <Text>Taxes Charges</Text>
          <Text>{`₹ ${parseFloat(
              tax/2
            ).toLocaleString()}.00`}</Text>
        </Box>
      </Box>
      <Divider></Divider>
      <Box mt={"15px"} mb="15px">
        <Box
          display={"flex"}
          justifyContent="space-between"
          fontSize={"xl"}
          fontWeight="600"
        >
          <Text>Total</Text>
          <Text>{`₹${parseFloat(total).toLocaleString()}.00`}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CartInfo;
