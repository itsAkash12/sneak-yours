import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/images/SneakYours.png";
import "../../styles/navbar.css"
import { BsFillCartFill } from "react-icons/bs";
import DrawerJSX from "./DrawerJSX";

const MobNavbar = () => {
  return (
    <Box className="mob_navbar_container" >
      <Box>
        <DrawerJSX />
      </Box>
      <Box display={"flex"}
          justifyContent="center"
          alignItems="center">
        <Image w="28%"src={logo} alt={logo} />
      </Box>
      <Box display={"flex"}
          justifyContent="center"
          alignItems="center">
        <Link to={"/cart"}>
          <Box position={"relative"}>
            <BsFillCartFill fontSize={"28px"} color="white" />
            <Text
              position={"absolute"}
              top="1"
              right="2.5"
              fontSize={"12px"}
              fontWeight="bolder"
            >
              {2}
            </Text>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default MobNavbar;
