import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Input,
  Heading,
  Divider,
  MenuDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const DrawerJSX = () => {
  const navigate = useNavigate()
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const cookies = new Cookies();
  const token = cookies.get("jwtoken")
  const role = cookies.get("role")
  const name = cookies.get("name")
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
    <Box>
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <button ref={btnRef} onClick={onOpen}>
          <FaBars fontSize={"26px"} color="white" />
        </button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        colorScheme={"black"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent colorScheme={"black"}>
          <DrawerCloseButton />
          <DrawerHeader>Welcome to Sneakyours</DrawerHeader>

          <DrawerBody>
            <Box display={"flex"}>
              <Input placeholder="Type here..." />
              <Button color={"white"} colorScheme="purple">
                SEARCH
              </Button>
            </Box>
            {
              token ? <Box
              display={"flex"}
              justifyContent="space-around"
              padding={"20px 0px"}
              textAlign={"center"}
            >
              <Text fontSize={"xl"}>Hello {name}!</Text>
              <button style={{ color: "red" }}>My Account {">"}</button>
            </Box>:<Box
            display={"flex"}
            justifyContent="space-around"
              padding={"20px 0px"}
              textAlign={"center"}
            >
              <Text fontSize={"xl"}>Hello Guest !</Text>
              <button style={{ color: "red" }} onClick={()=> navigate("/login")}>LOGIN</button>
            </Box>
            }
            <Box>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontSize={"xl"} fontWeight={"bold"}>MEN</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box display={"flex"} flexDirection="column" gap={"10px"}>
                      <Link to={"/products"}>
                        <Text fontWeight={"bold"}>- JORDAN High</Text>
                      </Link>
                      <Link to={"/products"}>
                        <Text fontWeight={"bold"}>- JORDAN Low</Text>
                      </Link>
                      <Link to={"/products"}>
                        <Text fontWeight={"bold"}>- DUNK</Text>
                      </Link>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Text fontSize={"xl"} fontWeight={"bold"}>WOMEN</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  <Box display={"flex"} flexDirection="column" gap={"10px"}>
                      <Link to={"/products"}>
                        <Text fontWeight={"bold"}>- JORDAN High</Text>
                      </Link>
                      <Link to={"/products"}>
                        <Text fontWeight={"bold"}>- JORDAN Low</Text>
                      </Link>
                      <Link to={"/products"}>
                        <Text fontWeight={"bold"}>- DUNK</Text>
                      </Link>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Link to="/apparels">
                        <Text fontSize={"xl"} fontWeight={"bold"}>APPARELS</Text>
                        </Link>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Link to="/wishlist">
                        <Text fontSize={"xl"} fontWeight={"bold"}>WISHLIST</Text>
                        </Link>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Link to="/cart">
                        <Text fontSize={"xl"} fontWeight={"bold"}>CART</Text>
                        </Link>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                {
                  role == "Admin" && <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Link to="/cart">
                        <Text fontSize={"xl"} fontWeight={"bold"}>CART</Text>
                        </Link>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                }
              </Accordion>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            {
              token && <Button variant="outline" mr={3} onClick={handleLogout}>
              Logout
            </Button>
            }
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default DrawerJSX;
