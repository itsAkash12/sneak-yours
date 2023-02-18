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
import React, { useEffect, useState } from "react";
import "../styles/login.css";
import logo from "../assets/images/SneakYours.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loginAuth } from "../redux/auth/auth.actions";
import { useToast } from '@chakra-ui/react'
import { CLEAR_ERROR } from "../redux/auth/auth.actionTypes";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast()
  const [open, setOpen] = useState(false);
  const {isLoading,isAuth,token,message,isError} = useSelector((store)=> store.auth);
  useEffect(()=> {
    if(token){
      navigate("/")
    }
    if(isError){
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:"top"
      })
      dispatch(clearErrors());
    }
    if(isAuth){
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position:"top"
      })
    }
  },[isAuth, isError])
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const toggle = () => {
    setOpen(!open);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginHandler =(e)=> {
    e.preventDefault();
    if(input.email =="" || input.password == ""){
      return toast({
        title: 'Empty Credentials',
        description: "Please fill all the necessary Fields",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:"top"
      })
    }
    dispatch(loginAuth(input))
    setInput({
      email: "",
      password: "",
    })
  }

  return (
    <Box
      className="login_container"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      paddingBottom={{ base: "120px", sm: "100px", md: "50px", lg: "50px" }}
    >
      <Box
        width={{ base: "80%", sm: "50%", md: "50%", lg: "35%" }}
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
          <Text fontSize={"xl"} color={"white"}>
            WELCOME !!
          </Text>
          <Text color={"white"}>TO THE WORLD OF SNEAKERS</Text>
          <form action="">
            <Stack color="white" p={"0px 25px"} mt="20px">
              <Input
                paddingLeft={"10px"}
                variant="flushed"
                type="email"
                placeholder="Enter Email"
                _placeholder={{ color: "inherit" }}
                name="email"
                value={input.email}
                onChange={inputHandler}
                required
              />
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
                  required
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
              <Button
                bg={"black"}
                w="50%"
                color="white"
                _hover={{ bg: "white", color: "black" }}
                type="submit"
                onClick={loginHandler}
              >
                SIGN IN
              </Button>
            </Box>
          </form>

          <Box
            mt={"20px"}
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
            gap={"10px"}
          >
            <Button
              bg="white"
              border={"1px solid lightgrey"}
              _hover={{ bg: "#e2e6eb", color: "black" }}
              leftIcon={<FcGoogle fontSize={"20px"} />}
              textColor={"black"}
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
              w="80%"
            >
              Sign Up with Google
            </Button>
            <Button
              bg="white"
              border={"1px solid lightgrey"}
              _hover={{ bg: "#e2e6eb" }}
              leftIcon={<FaGithub fontSize={"20px"} />}
              textColor={"#black"}
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
              w="80%"
            >
              Sign Up with GitHub
            </Button>
          </Box>
          <Box
            mt={"20px"}
            display="flex"
            justifyContent={"center"}
            gap={"10px"}
          >
            <Text fontSize={"md"} color={"neon"}>
              Don't Have an Account ?
            </Text>
            <Link to="/signup">
              <Text
                textDecoration={"underline"}
                fontSize={"lg"}
                color={"Black"}
              >
                SIGN UP
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
