import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { addToCart, clearErrors, clearErrorsCart, getCart } from "../../redux/cart/cart.actions";

const DetailsBox = ({ element }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const state = useSelector((store) => store.cart);
  // console.log(isSuccess)
  const cookies = new Cookies();
  const [flag, setFlag] = useState(false);
  const [size, setSize] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonGroup = [6, 7, 8, 9, 10, 11];
  const buttonInput = (event) => {
    setSize(event.target.value);
    setFlag(true);
  };
  const clearSizeHandler = () => {
    setFlag(false);
    setSize(0);
  };
  const strikePrice = (element.price * element.discount) / 100;

  const handleAddtoCart = async (prodId) => {
    const token = cookies.get("jwtoken") || null;
    if (!token) {
      toast({
        title: "Error",
        description: "You are not authorized for this action, please Login",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      if (
        size == "6" ||
        size == "7" ||
        size == "8" ||
        size == "9" ||
        size == "10" ||
        size == "11"
      ) {
        await dispatch(addToCart(prodId, token));
        dispatch(getCart());
      } else {
        toast({
          title: "Preference",
          description: "Please Select your prefered size",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    }
  };
  useEffect(() => {
    if (state.isError) {
      toast({
        title: "Error",
        description: state.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
    if (state.isSuccess) {
      toast({
        title: "Success",
        description: state.message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
    dispatch(clearErrors());
  }, [state.isSuccess, state.isError, state.message]);
  return (
    <Box className="details_container">
      <Box w="95%" m="auto">
        <Text
          textAlign={"left"}
          fontSize={{ base: "lg", md: "xl", lg: "2xl", xl: "2xl" }}
          color="gray.600"
        >
          {element.subtitle}
        </Text>
        <Box
          m="10px auto 15px auto"
          display={"flex"}
          flexDirection="column"
          gap="10px"
          textAlign={"left"}
        >
          <Heading className="type_text">{element.product_title}</Heading>
          <Box display={"flex"} gap="20px">
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl", xl: "2xl" }}
              fontWeight="bold"
            >
              ₹{parseFloat(element.price).toLocaleString()}.00
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl", xl: "2xl" }}
              color={"#F51C28"}
            >{`${element.discount}% off`}</Text>
            <del
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.2rem",
              }}
            >{`₹ ${parseFloat(
              element.price + strikePrice
            ).toLocaleString()}.00`}</del>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection="column"
          gap="20px"
          color={"gray.700"}
        >
          <Text textDecoration={"underline"} textAlign="left" fontSize={"md"}>
            Shipping calculated at checkout.
          </Text>
          <Text textAlign="left" fontSize={"lg"}>
            Condition: Brand New
          </Text>
          <Text textAlign="left" fontSize={"lg"}>
            100% Authentic
          </Text>
        </Box>
        <Box m="25px auto 15px auto">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _hover={"white"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    display={"flex"}
                    justifyContent="space-between"
                  >
                    <Text
                      fontSize={{ base: "lg", md: "xl", lg: "xl", xl: "xl" }}
                    >
                      {element.product_title}...
                    </Text>
                    <Text
                      fontSize={{ base: "lg", md: "xl", lg: "xl", xl: "xl" }}
                    >
                      Read More
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{element.description}</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box mt={"20px"}>
          <Text mb={"10px"} textAlign="left" fontSize={"lg"} fontWeight="bold">
            Shoe Size (UK)
          </Text>
          <Box display={"flex"} gap="10px">
            <ButtonGroup
              className={"button_group"}
              colorScheme={"messenger"}
              onClick={buttonInput}
            >
              {buttonGroup.map((el) => (
                <Button value={el} border="0.5px solid" p="5px 10px">
                  {el}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
          <Box mt={"5px"} fontSize={"small"}>
            {flag ? (
              <Box display={"flex"} gap="20px">
                <Text>You Have selected size {size}</Text>
                <Text textDecoration={"underline"} onClick={clearSizeHandler}>
                  Clear
                </Text>
              </Box>
            ) : (
              <Text textAlign={"left"}>Please Select Prefered Size</Text>
            )}
          </Box>
          <Box textAlign={"right"} mt="20px">
            <Button rounded={"20px"} w={"100%"} bg={"white"} onClick={onOpen}>
              Products Details
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign={"center"}>PRODUCT DETAILS</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack>
                    <Divider></Divider>
                    <Box
                      color={"gray.600"}
                      fontSize={"20px"}
                      display={"flex"}
                      gap="10px"
                    >
                      <Text letterSpacing={"1px"} fontWeight={"600"}>
                        Manufacturer :
                      </Text>
                      <Text>HOCHIMINH CITY , VIETNAM</Text>
                    </Box>
                    <Divider></Divider>
                    <Box
                      color={"gray.600"}
                      fontSize={"20px"}
                      display={"flex"}
                      gap="10px"
                    >
                      <Text letterSpacing={"1px"} fontWeight={"600"}>
                        Country Origin :
                      </Text>
                      <Text>VIETNAM</Text>
                    </Box>
                    <Divider></Divider>
                    <Box
                      color={"gray.600"}
                      fontSize={"20px"}
                      display={"flex"}
                      gap="10px"
                    >
                      <Text letterSpacing={"1px"} fontWeight={"600"}>
                        Imported By :
                      </Text>
                      <Text>{`${element.seller_name}, ${element.seller_address}`}</Text>
                    </Box>
                    <Divider></Divider>
                    <Box
                      color={"gray.600"}
                      fontSize={"20px"}
                      display={"flex"}
                      gap="10px"
                    >
                      <Text letterSpacing={"1px"} fontWeight={"600"}>
                        Item Weight :
                      </Text>
                      <Text>0.95 Kg</Text>
                    </Box>
                    <Divider></Divider>
                    <Box
                      color={"gray.600"}
                      fontSize={"20px"}
                      display={"flex"}
                      gap="10px"
                    >
                      <Text letterSpacing={"1px"} fontWeight={"600"}>
                        Generic Name :
                      </Text>
                      <Text>{element.subtitle}</Text>
                    </Box>
                    <Divider></Divider>
                    <Box
                      color={"gray.600"}
                      fontSize={"20px"}
                      display={"flex"}
                      gap="10px"
                    >
                      <Text letterSpacing={"1px"} fontWeight={"600"}>
                        Unit of Measurement :
                      </Text>
                      <Text>1 pair </Text>
                    </Box>
                    <Divider></Divider>
                    <Box
                      color={"gray.600"}
                      fontSize={"20px"}
                      display={"flex"}
                      gap="10px"
                    >
                      <Text letterSpacing={"1px"} fontWeight={"600"}>
                        Marketed By :
                      </Text>
                      <Text>Sneakyours India pvt Ltd.</Text>
                    </Box>
                    <Divider></Divider>
                    <Box
                      color={"gray.600"}
                      fontSize={"20px"}
                      display={"flex"}
                      gap="10px"
                    >
                      <Text letterSpacing={"1px"} fontWeight={"600"}>
                        Article Code :
                      </Text>
                      <Text>{element._id.toUpperCase()}</Text>
                    </Box>
                    <Divider></Divider>
                  </Stack>
                  <ModalFooter></ModalFooter>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
          <Box>
            <Button
              rounded={"20px"}
              w={"100%"}
              mt={"20px"}
              // size={"lg"}
              py={"7"}
              background={`linear-gradient(
                140deg,
                rgba(98, 4, 250, 1) 14%,
                rgba(253, 29, 29, 1) 62%,
                rgba(252, 176, 69, 1) 99%
              )`}
              color={useColorModeValue("white", "gray.900")}
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
                letterSpacing: "7px",
              }}
              _active={{
                transform: "scale(0.95)",
                backgroundColor: "gray.900",
                color: "white",
              }}
              onClick={() => handleAddtoCart(element._id)}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
              mt="10px"
            >
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsBox;
