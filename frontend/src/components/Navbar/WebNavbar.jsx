import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/images/SneakYours.png";
import { IoIosArrowDown } from "react-icons/io";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";

const WebNavbar = () => {
  return (
    <Box className="parentContainer">
      <Flex objectFit={"cover"} justify={"space-around"} alignItems="center">
        <Box>
          <Image w="150px" src={logo} />
        </Box>
        <Box color={"white"} display={"flex"} gap="30px">
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            gap={"5px"}
          >
            <Text fontSize={"20px"}>MENS</Text>
            <IoIosArrowDown />
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            gap={"5px"}
          >
            <Text fontSize={"20px"}>WOMENS</Text>
            <IoIosArrowDown />
          </Box>
          <Box display={"flex"} justifyContent="center" alignItems="center">
            <Text fontSize={"20px"}>JORDAN</Text>
          </Box>
          <Box display={"flex"} justifyContent="center" alignItems="center">
            <Text fontSize={"20px"}>WISHLIST</Text>
          </Box>
          <Box w={"180px"}>
            <InputSearch></InputSearch>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems="center"
          gap={"30px"}
        >
          <Link to={"/login"}>
            <Text fontSize={"20px"} color="white">
              LOGIN
            </Text>
          </Link>
          <Link to={"/login"}>
            <RiShoppingCart2Fill fontSize={"30px"} color="white" />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default WebNavbar;
