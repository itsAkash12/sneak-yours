import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../styles/signup.css";
import logo from "../assets/images/SneakYours.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, signupAuth } from "../redux/auth/auth.actions";
import { useToast } from "@chakra-ui/react";

const Signup = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    gender: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { isLoading, isAuth, token, message, isError } = useSelector(
    (store) => store.auth
  );
  useEffect(() => {
    if (token) {
      navigate("/");
    }
    if (isError) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      dispatch(clearErrors());
    }
    if(isAuth){
      toast({
        title: "Registration Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      dispatch(clearErrors());
    }
  }, [isAuth, isError]);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const toggle = () => {
    setOpen(!open);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(input));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(signupAuth(input));
      setInput({
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        gender: "",
        password: "",
      });
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i;
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.number) {
      errors.number = "Number is required";
    } else if (values.number.length < 10) {
      errors.password = "Number must be of 10 Digits";
    } else if (values.number.length > 10) {
      errors.password = "Number must not be more than 10 Digits";
    }
    if (!values.gender) {
      errors.gender = "Gender is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password should cosist at least one uppercase and lowercase letter, one number and No special Character";
    }
    return errors;
  };

  return (
    <Box
      className="signup_container"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
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
          <Text color={"white"}>Create Your Account</Text>
          <form>
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
                required
              />
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
                {formErrors.firstname}
              </Text>
              <Input
                paddingLeft={"10px"}
                variant="flushed"
                type="text"
                placeholder="Last Name"
                _placeholder={{ color: "inherit" }}
                name="lastname"
                value={input.lastname}
                onChange={inputHandler}
                required
              />
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
                {formErrors.lastname}
              </Text>
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
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
                {formErrors.email}
              </Text>
              <Input
                paddingLeft={"10px"}
                variant="flushed"
                type="number"
                placeholder="Phone Number"
                _placeholder={{ color: "inherit" }}
                name="number"
                value={input.number}
                onChange={inputHandler}
                required
              />
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
                {formErrors.number}
              </Text>
              <Select
                colorScheme={"blackAlpha"}
                color="black"
                variant="filled"
                placeholder="Gender"
                ml={"10px"}
                fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                name="gender"
                value={input.gender}
                onChange={inputHandler}
                required
              >
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
              </Select>
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
                {formErrors.gender}
              </Text>
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
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
                {formErrors.password}
              </Text>
            </Stack>
            <Box mt={"20px"}>
              <Button
                w="50%"
                bg={"black"}
                color="white"
                _hover={{ bg: "white", color: "black" }}
                onClick={submitHandler}
                type="submit"
              >
                JOIN US
              </Button>
            </Box>
          </form>
          <Box
            mt={"20px"}
            display="flex"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
            gap={"10px"}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              bg="white"
              border={"1px solid lightgrey"}
              _hover={{ bg: "#e2e6eb", color: "black" }}
              leftIcon={<FcGoogle fontSize={"20px"} />}
              textColor={"black"}
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
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
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
              w="50%"
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
              Already Have an Account ?
            </Text>
            <Link to="/login">
              <Text
                textDecoration={"underline"}
                fontSize={"lg"}
                color={"Black"}
              >
                Log In
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
