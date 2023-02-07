import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/images/SneakYours.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import InputSearch from "./InputSearch";
import "../../styles/navbar.css";

const WebNavbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { 
    isOpen: isOpenReportModal, 
    onOpen: onOpenReportModal, 
    onClose: onCloseReportModal 
} = useDisclosure()
  return (
    <Box className="web_navbar_container">
      <Flex objectFit={"cover"} justify={"space-around"} alignItems="center">
        <Box>
          <Image
            w="150px"
            src={logo}
            onClick={() => navigate("/")}
            cursor="pointer"
          />
        </Box>
        <Box color={"white"} display={"flex"} gap="20px">
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            gap={"20px"}
          >
            <Menu border="none" isOpen={isOpen} size={"xl"}>
              <MenuButton
                background={"transparent"}
                _hover={"transparent"}
                _active={"transparent"}
                // as={Button}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Text
                    fontWeight={"medium"}
                    letterSpacing={"1px"}
                    fontSize={"20px"}
                  >
                    MEN
                  </Text>
                  <IoIosArrowDown />
                </Box>
              </MenuButton>
              <MenuList fontSize={"lg"} color={"black"} minW="x">
                <MenuItem>JORDAN High {">"}</MenuItem>
                <MenuItem>JORDAN Low {">"}</MenuItem>
                <MenuItem>DUNK {">"}</MenuItem>
                <MenuItem>APPAREL {">"}</MenuItem>
              </MenuList>
            </Menu>
            <Menu border="none" isOpen={isOpenReportModal} size={"xl"}>
              <MenuButton
                background={"transparent"}
                _hover={"transparent"}
                _active={"transparent"}
                // as={Button}
                onMouseEnter={onOpenReportModal}
                onMouseLeave={onCloseReportModal}
              >
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Text
                    fontWeight={"medium"}
                    letterSpacing={"1px"}
                    fontSize={"20px"}
                  >
                    WOMEN
                  </Text>
                  <IoIosArrowDown />
                </Box>
              </MenuButton>
              <MenuList fontSize={"lg"} color={"black"} minW="x">
                <MenuItem>JORDAN High {">"}</MenuItem>
                <MenuItem>JORDAN Low {">"}</MenuItem>
                <MenuItem>DUNK {">"}</MenuItem>
                <MenuItem>APPAREL {">"}</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box display={"flex"} gap="20px">
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
      </Flex>
    </Box>
  );
};

export default WebNavbar;
