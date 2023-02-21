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
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/SneakYours.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import InputSearch from "./InputSearch";
import "../../styles/navbar.css";
import Cookies from 'universal-cookie';
import { useSelector } from "react-redux";
const cookies = new Cookies();

const WebNavbar = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const {cartCount} = useSelector((store) => store.cart);
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
  const name = cookies.get("name");
  const role = cookies.get("role");
  const handleLogout = ()=> {
    cookies.remove("jwtoken")
    cookies.remove("name")
    cookies.remove("role")
    toast({
      title: 'Success',
      description: "Logged out Successfull",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:"top"
    })
    window.location.reload(false);
  }
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
         {name ? (
            <Popover>
              <PopoverTrigger>
                  <Text fontSize="20px" color={"white"} >
                    {(name).toUpperCase()}
                  </Text>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Hello {name} !</PopoverHeader>
                <PopoverBody display={"grid"} gap="10px">
                  {
                    role === "Admin" ? <Button bg={"#6104FA"} _hover={""}
                    color={"white"}
                    size={"sm"}
                    letterSpacing="1px"
                    onClick={()=> navigate("/admin")} >Admin Panel</Button> : <Box></Box>
                  }
                  <Button
                    size={"sm"}
                    color={"white"}
                    bg={"red"} _hover={""}
                    letterSpacing="1px"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Box>
                  <Text fontSize="20px" color={"white"}>
                    LOGIN
                  </Text>
                </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Hello Guest!</PopoverHeader>
                <PopoverBody>
                  <Button
                    size={"sm"}
                    colorScheme="green"
                    color={"white"}
                    letterSpacing="1px"
                    bg="#6104FA"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )} 
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
                {cartCount}
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
