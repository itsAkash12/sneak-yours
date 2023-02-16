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
import { useDispatch } from "react-redux";
import { addUser } from "../redux/Slices/SignupUser";
// import svg from "../assets/images/bbblurry.svg"

const Signup = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    firstname:"",
    lastname:"",
    email:"",
    number:"",
    gender:"",
    password:"",
  })

  const inputHandler= (e)=> {
    const name = e.target.name;
    const value = e.target.value;
    setInput({...input,
      [name]:value
    })
  }
  
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
        width={{ base: '80%',sm:'50%', md: '50%', lg: '35%' }}
        bg="blackAlpha.500"
        backdropFilter="blur(20px)"
        border={"1px solid white"}
        borderRadius="20px"
        padding="10px"
      >
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Box
            mt={"20px"}
            w={"120px"}
            height="120px"
            bg={"black"}
            borderRadius="50%"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Link to="/">
            <Image src={logo}></Image>
            </Link>
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
              name="firstname"
              value={input.firstname}
              onChange={inputHandler}
            />
            <Input
              paddingLeft={"10px"}
              variant="flushed"
              type="text"
              placeholder="Last Name"
              _placeholder={{ color: "inherit" }}
              name="lastname"
              value={input.lastname}
              onChange={inputHandler}
            />
            <Input
              paddingLeft={"10px"}
              variant="flushed"
              type="email"
              placeholder="Enter Email"
              _placeholder={{ color: "inherit" }}
              name="email"
              value={input.email}
              onChange={inputHandler}
            />
            <Input
              paddingLeft={"10px"}
              variant="flushed"
              type="tel"
              placeholder="Phone Number"
              _placeholder={{ color: "inherit" }}
              name="number"
              value={input.number}
              onChange={inputHandler}
            />
            <Select
              colorScheme={"blackAlpha"}
              color="black"
              variant="filled"
              placeholder="Gender"
              ml={"10px"}
              fontSize={{ base: '12px',sm:'12px', md: '14px', lg: '14px' }}
              name="gender"
              value={input.gender}
              onChange={inputHandler}
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
                name="password"
              value={input.password}
              onChange={inputHandler}
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
            <Button w="50%" bg={"black"} color="white" _hover={{ bg: "white", color: "black" }}>JOIN US</Button>
          </Box>
          <Box mt={"20px"} display="flex" flexDirection={{ base: 'column',sm:'column', md: 'row', lg: 'row' }} gap={"10px"} justifyContent="center" alignItems="center">
            <Button
              bg="white"
              border={"1px solid lightgrey"}
              _hover={{ bg: "#e2e6eb", color: "black" }}
              leftIcon={<FcGoogle fontSize={"20px"} />}
              textColor={"black"}
              fontSize={{ base: '12px',sm:'12px', md: '14px', lg: '14px' }}
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
              fontSize={{ base: '12px',sm:'12px', md: '14px', lg: '14px' }}
              w="50%"
            >
              Sign Up with GitHub
            </Button>
          </Box>
          <Box mt={"20px"} display="flex" justifyContent={"center"} gap={"10px"} >
            <Text fontSize={"md"} color={"neon"}>Already Have an Account ?</Text>
            <Link to="/login">
              <Text textDecoration={"underline"} fontSize={"lg"} color={"Black"}>Log In</Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
