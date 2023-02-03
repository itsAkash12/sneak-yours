import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../styles/signup.css";
import logo from "../assets/images/SneakYours.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {Link} from "react-router-dom"
// import svg from "../assets/images/bbblurry.svg"

const Signup = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Box
      className="signup_container"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Box
        width="35%"
        bg="blackAlpha.500"
        backdropFilter="blur(20px)"
        border={"1px solid white"}
        borderRadius="20px"
        padding="10px"
      >
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Box
            backgroundImage={logo}
            mt={"20px"}
            w={"120px"}
            height="120px"
            bg={"black"}
            borderRadius="50%"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Image src={logo}></Image>
          </Box>
        </Box>
        <Box>
          <Text color={"white"}>Create Your Account</Text>
          <Stack color="white" p={"0px 25px"} mt="20px">
            <Input
              paddingLeft={"10px"}
              variant="flushed"
              type="text"
              placeholder="First Name"
              _placeholder={{ color: "inherit" }}
            />
            <Input
              paddingLeft={"10px"}
              variant="flushed"
              type="text"
              placeholder="Last Name"
              _placeholder={{ color: "inherit" }}
            />
            <Input
              paddingLeft={"10px"}
              variant="flushed"
              type="email"
              placeholder="Enter Email"
              _placeholder={{ color: "inherit" }}
            />
            <Input
              paddingLeft={"10px"}
              variant="flushed"
              type="tel"
              placeholder="Phone Number"
              _placeholder={{ color: "inherit" }}
            />
            <Select
              colorScheme={"blackAlpha"}
              color="black"
              variant="filled"
              placeholder="Gender"
              ml={"10px"}
            >
              <option value="male">MALE</option>
              <option value="female">FEMALE</option>
            </Select>
            <InputGroup>
              <Input
                type={open === false ? "password" : "text"}
                paddingLeft={"10px"}
                variant="flushed"
                placeholder="Password"
                _placeholder={{ color: "inherit" }}
              />
              <InputRightElement>
                <Box>
                  {open === false ? (
                    <AiOutlineEyeInvisible onClick={toggle} />
                  ) : (
                    <AiOutlineEye onClick={toggle} />
                  )}
                </Box>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Box mt={"20px"}>
            <Button bg={"black"} color="white" _hover={{ bg: "white", color: "black" }}>JOIN US</Button>
          </Box>
          <Box mt={"20px"} display="flex" gap={"10px"}>
            <Button
              bg="white"
              border={"1px solid lightgrey"}
              _hover={{ bg: "#e2e6eb", color: "black" }}
              leftIcon={<FcGoogle fontSize={"20px"} />}
              textColor={"black"}
              fontSize={"14px"}
              w="50%"
            >
              Sign Up with Google
            </Button>
            <Button
              bg="white"
              border={"1px solid lightgrey"}
              _hover={{ bg: "#e2e6eb" }}
              leftIcon={<FaGithub fontSize={"20px"} />}
              textColor={"#black"}
              fontSize={"14px"}
              w="50%"
            >
              Sign Up with GitHub
            </Button>
          </Box>
          <Box mt={"20px"} display="flex" justifyContent={"center"} gap={"10px"} >
            <Text color={"neon"}>Already Have an Account ?</Text>
            <Link to="/login">
              <Text color={"Black"}>LogIn</Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
