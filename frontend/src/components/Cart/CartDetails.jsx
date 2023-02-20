import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";

const CartDetails = () => {
  return (
    <Box>
      <Box
        borderWidth="medium"
        borderRadius={"10px"}
        padding="20px"
        textAlign={"left"}
      >
        <Heading fontSize={"x-large"}>Order Summary</Heading>
        <Divider mt={"20px"}></Divider>
        <Box padding={"20px"} display="grid" gap={"15px"}>
          <Box display={"flex"} justifyContent="space-between">
            <Text>Sub-Total</Text>
            <Text>₹29,995</Text>
          </Box>
          <Divider></Divider>
          <Box display={"flex"} justifyContent="space-between">
            <Text>Shipping</Text>
            <Text>₹250</Text>
          </Box>
          <Divider></Divider>
          <Box display={"flex"} justifyContent="space-between">
            <Text>Taxes</Text>
            <Text>₹250</Text>
          </Box>
          <Divider></Divider>
          <Box display={"flex"} justifyContent="space-between">
            <Text>Coupon</Text>
            <Text>₹0</Text>
          </Box>
          <Divider></Divider>
          <Box display={"flex"} justifyContent="space-between">
            <Heading fontSize={"x-large"}>Total</Heading>
            <Heading fontSize={"x-large"}>₹30,495</Heading>
          </Box>
        </Box>
        <Box display={"grid"} gap="10px">
          <Box display={"flex"} justifyContent="center">
            <Button
              w="95%"
              rounded={"20px"}
              background={`linear-gradient(
              140deg,
              rgba(98, 4, 250, 1) 14%,
              rgba(253, 29, 29, 1) 62%,
              rgba(252, 176, 69, 1) 99%
            )`}
              color="white"
              textTransform={"uppercase"}
              letterSpacing="3px"
              _hover={{
                background: `linear-gradient(
                140deg,
                rgba(98, 4, 250, 1) 14%,
                rgba(253, 29, 29, 1) 62%,
                rgba(252, 176, 69, 1) 99%
              )`,
                color: "white",
                boxShadow: "lg",
              }}
              _active={{
                transform: "scale(0.95)",
                backgroundColor: "gray.900",
                color: "white",
              }}
            >
              Proceed To Checkout
            </Button>
          </Box>
          <Box display={"flex"} justifyContent="center">
            <Button
              w="95%"
              rounded={"20px"}
              textTransform={"uppercase"}
              letterSpacing="3px"
            >
              Shop More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartDetails;