import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const DetailsBox = () => {
  const [flag, setFlag] = useState(false);
  const [size, setSize] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonGroup = [6, 7, 8, 9, 10, 11];
  const buttonInput = (event) => {
    setSize(event.target.innerText);
    setFlag(true);
  };
  const clearSizeHandler = () => {
    setFlag(false);
    setSize(0);
  };
  return (
    <Box>
      <Box w="95%" m="auto">
        <Text
          textAlign={"center"}
          fontSize={{ base: "lg", md: "xl", lg: "2xl", xl: "2xl" }}
          color="gray.600"
        >
          Men's Shoes
        </Text>
        <Box
          m="10px auto 5px auto"
          display={"flex"}
          flexDirection="column"
          gap="10px"
        >
          <Heading className="type_text">Air Jordan 4 "Red Thunder"</Heading>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl", xl: "2xl" }}
            fontWeight="bold"
          >
            Rs. 29,995.00
          </Text>
        </Box>
        <Box display={"flex"} flexDirection="column" gap="20px" color={"gray.700"}>
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
                      {"The Air Jordan 4 'Red Thunder'"}...
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
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
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
                <Button border="0.5px solid" p="5px 10px">
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
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam saepe voluptatibus necessitatibus, officia sint in
                  repellendus voluptate expedita! Ipsa voluptatem vel minus ex
                  veritatis repudiandae aliquid necessitatibus iusto similique
                  ab, quia eaque consectetur sint. Odio possimus dolor nostrum
                  consequatur aperiam ipsum fuga nihil laborum laudantium
                  voluptate reiciendis pariatur cupiditate blanditiis numquam
                  eaque dicta eius ipsam provident magni, ullam laboriosam! Sit
                  dignissimos alias ipsum! Nostrum adipisci esse quidem debitis
                  dolores beatae, ipsa voluptas nihil repudiandae. Eaque, fugiat
                  illum. Vero sapiente assumenda facilis natus!
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
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
                background:`linear-gradient(
                  140deg,
                  rgba(98, 4, 250, 1) 14%,
                  rgba(253, 29, 29, 1) 62%,
                  rgba(252, 176, 69, 1) 99%
                )`,
                color:'white',
                boxShadow: "lg",
                letterSpacing:"7px"
              }}
              _active={{
                transform: "scale(0.95)",
                backgroundColor:"gray.900",
                color:'white'
              }}
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
