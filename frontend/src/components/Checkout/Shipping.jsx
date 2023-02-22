import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    address: "",
    house: "",
    city: "",
    country: "india",
    number: "",
    postalcode: "",
  });
  const inputValueHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const checkoutHandler = () => {
    console.log(input);
  };
  return (
    <Box borderWidth="thin" borderRadius={"10px"} p="30px 40px">
      <Box display={"flex"} alignItems="center" gap="20px">
        <Heading fontSize={"2xl"} textAlign="left">
          {" "}
          <FaAddressBook></FaAddressBook>{" "}
        </Heading>
        <Heading fontSize={"xl"} textAlign="left">
          SHIPPING DETAILS
        </Heading>
      </Box>
      <Box mt={"15px"} w={"100%"}>
        <FormControl isRequired>
          <Box display={"grid"} gridTemplateColumns="repeat(2,1fr)" gap="10px">
            <Box>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="First name"
                name="firstname"
                value={input.firstname}
                onChange={inputValueHandler}
              />
            </Box>
            <Box>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                name="lastname"
                value={input.lastname}
                onChange={inputValueHandler}
              />
            </Box>
          </Box>
          <Box
            mt={"15px"}
            display={"grid"}
            gridTemplateColumns="3fr 1.5fr"
            gap="10px"
          >
            <Box>
              <FormLabel>Address</FormLabel>
              <Input
                placeholder="Address"
                name="address"
                value={input.address}
                onChange={inputValueHandler}
              />
            </Box>
            <Box>
              <FormLabel>House No.</FormLabel>
              <Input
                placeholder="Apt, Suite"
                name="house"
                value={input.house}
                onChange={inputValueHandler}
              />
            </Box>
          </Box>
          <Box
            mt={"15px"}
            display={"grid"}
            gridTemplateColumns="repeat(2,1fr)"
            gap="10px"
          >
            <Box>
              <FormLabel>City</FormLabel>
              <Input
                placeholder="City"
                name="city"
                value={input.city}
                onChange={inputValueHandler}
              />
            </Box>
            <Box>
              <FormLabel>Country</FormLabel>
              <Select
                name="country"
                value={input.country}
                onChange={inputValueHandler}
              >
                <option value="India">India</option>
              </Select>
            </Box>
          </Box>
          <Box
            mt={"15px"}
            display={"grid"}
            gridTemplateColumns="repeat(2,1fr)"
            gap="10px"
          >
            <Box>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  placeholder="phone number"
                  name="number"
                  value={input.number}
                  onChange={inputValueHandler}
                />
              </InputGroup>
            </Box>
            <Box>
              <FormLabel>Postal Code</FormLabel>
              <Input
                placeholder="City"
                name="postalcode"
                value={input.postalcode}
                onChange={inputValueHandler}
              />
            </Box>
          </Box>
          <Box mt={"25px"} textAlign={"left"}>
            <RadioGroup display={"flex"} gap="40px">
              <Radio value="1">Home (All Day Delivery)</Radio>
              <Radio value="2">Office (Delivery Between 10Am to 5pm)</Radio>
            </RadioGroup>
          </Box>
        </FormControl>
        <Box mt={"30px"} justifyContent="center" display="flex" gap="40px">
          <Button
            type={"submit"}
            letterSpacing="1px"
            background={`linear-gradient(
            140deg,
            rgba(98, 4, 250, 1) 14%,
            rgba(253, 29, 29, 1) 62%,
            rgba(252, 176, 69, 1) 99%
          )`}
            color="white"
            textTransform={"uppercase"}
            _hover={{
              background: "black",
              color: "white",
              boxShadow: "lg",
            }}
            _active={{
              transform: "scale(0.95)",
            }}
            onClick={checkoutHandler}
          >
            Save And Deliver Here
          </Button>
          <Button letterSpacing="1px" bg={"white"} onClick={onOpen}>
            Cancel
          </Button>
          <AlertDialog
            motionPreset="slideInBottom"
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <AlertDialogOverlay />

            <AlertDialogContent>
              <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                Are you sure you want to discard the Checkout Process.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  No
                </Button>
                <Button
                  colorScheme="red"
                  ml={3}
                  letterSpacing="1px"
                  onClick={() => navigate("/")}
                >
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Box>
      </Box>
    </Box>
  );
};

export default Shipping;
