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
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/SneakYours.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import InputSearch from "./InputSearch";
import "../../styles/navbar.css";

const WebNavbar = () => {
  const navigate = useNavigate();
  const [scrollTop, setScrollTop] = useState(0);
  const [height, setHeight] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenReportModal,
    onOpen: onOpenReportModal,
    onClose: onCloseReportModal,
  } = useDisclosure();

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
      
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
    setHeight(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
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
              <MenuList
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                fontSize={"lg"}
                color={"black"}
                minW="x"
              >
                <Link to="/products/id">
                  <MenuItem>JORDAN High {">"}</MenuItem>
                </Link>
                <Link to={"/products/id"}>
                  <MenuItem>JORDAN Low {">"}</MenuItem>
                </Link>
                <Link to={"/products/id"}>
                  <MenuItem>DUNK {">"}</MenuItem>
                </Link>
                <Link to={"/products/id"}>
                  <MenuItem>APPAREL {">"}</MenuItem>
                </Link>
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
              <MenuList onMouseEnter={onOpenReportModal}
                onMouseLeave={onCloseReportModal} fontSize={"lg"} color={"black"} minW="x">
              <Link to="/products/id">
                  <MenuItem>JORDAN High {">"}</MenuItem>
                </Link>
                <Link to={"/products/id"}>
                  <MenuItem>JORDAN Low {">"}</MenuItem>
                </Link>
                <Link to={"/products/id"}>
                  <MenuItem>DUNK {">"}</MenuItem>
                </Link>
                <Link to={"/products/id"}>
                  <MenuItem>APPAREL {">"}</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Box display={"flex"} gap="20px">
            <Box display={"flex"} justifyContent="center" alignItems="center">
              <Link to={"/products"}><Text fontSize={"20px"}>JORDAN</Text></Link>
            </Box>
            <Box display={"flex"} justifyContent="center" alignItems="center">
              <Link to={"/wishlist"}><Text fontSize={"20px"}>WISHLIST</Text></Link>
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
      <Box className="div_five_container">
        <Box h={height > 10 ? "4px":"0px"} className="div_five_container_progress">
          <Box w={height > 10 ? `${scrollTop}%`: "0"} className="div_five_container_style"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WebNavbar;
