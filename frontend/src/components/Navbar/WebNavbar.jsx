import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/images/SneakYours.png";
import { IoIosArrowDown } from "react-icons/io";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { BsFillCartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import InputSearch from "./InputSearch";

const WebNavbar = () => {
  const navigate = useNavigate();
  return (
    <Box className="parentContainer">
      <Flex objectFit={"cover"} justify={"space-around"} alignItems="center">
        <Box>
          <Image
            w="150px"
            src={logo}
            onClick={() => navigate("/")}
            cursor="pointer"
          />
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
          <Link to={"/cart"}>
            <Box position={"relative"} >
              <BsFillCartFill fontSize={"28px"}  color="white" />
              <Text position={"absolute"} top="1" right="2.5" fontSize={"12px"} fontWeight="bolder">{2}</Text>
            </Box>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default WebNavbar;
