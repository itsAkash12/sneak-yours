import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Stack,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiMenu,
  FiMoon,
  FiPackage,
  FiShoppingCart,
  FiStar,
  FiSun,
  FiUsers,
  FiX,
  FiEdit
} from "react-icons/fi";
import image from "../assets/images/SneakYours.png";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Admin/Dashboard";
import Products from "../components/Admin/Products";
import Orders from "../components/Admin/Orders";
import Reviews from "../components/Admin/Reviews";
import Users from "../components/Admin/Users";
import Cookies from "universal-cookie";
import CreateProduct from "../components/Admin/CreateProduct";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { toggleColorMode } = useColorMode();
  const cookies = new Cookies();
  const role = cookies.get("role") || false;
  const colorModeIcon = useColorModeValue(<FiSun />, <FiMoon />);
  useEffect(() => {
    if(!role){
      navigate("/")
    }else{
      if(role == "Explorer"){
        navigate("/")
      }
    }
  }, [])

  const links = [
    {
      name: "Dashboard",
      icon: <FiHome />,
      component: <Dashboard useColorModeValue={useColorModeValue} />,
    },
    { name: "Products", icon: <FiPackage />, component: <Products /> },
    { name: "Users", icon: <FiUsers />, component: <Users /> },
    { name: "Orders", icon: <FiShoppingCart />, component: <Orders /> },
    { name: "Reviews", icon: <FiStar />, component: <Reviews /> },
    { name: "Create-Products", icon: <FiEdit />, component: <CreateProduct /> },
  ];

  const [selectedLink, setSelectedLink] = useState(links[0]);  

  return (
    <Box>
      <Flex
        p={4}
        alignItems="center"
        bg={useColorModeValue("gray.400", "gray.700")}
      >
        <IconButton
          aria-label="Open menu"
          icon={isOpen ? <FiX /> : <FiMenu />}
          onClick={() => setIsOpen(!isOpen)}
          mr={4}
        />
        <Spacer />
        <Image
          cursor={"pointer"}
          onClick={() => navigate("/")}
          w={{ base: "25%", sm: "25%", md: "15%", lg: "15%", xl: "10%" }}
          src={image}
        ></Image>
        <Spacer></Spacer>
        <Button onClick={toggleColorMode} leftIcon={colorModeIcon}></Button>
      </Flex>

      <Flex direction="row">
        <Box
          as="nav"
          h="100vh"
          bg={useColorModeValue("gray.300", "gray.700")}
          borderRightWidth="1px"
          borderRightColor={useColorModeValue("gray.200", "gray.700")}
          w={isOpen ? "200px" : "100px"}
          py={4}
          px={2}
          display={{ base: isOpen ? "block" : "none", md: "block" }}
        >
          {isOpen ? (
            <Stack spacing={4} textAlign="left">
              {links.map((link) => (
                <Button
                  key={link.name}
                  variant={
                    link.component === selectedLink.component
                      ? "solid"
                      : "ghost"
                  }
                  colorScheme="teal"
                  onClick={() => setSelectedLink(link)}
                  display="flex"
                  letterSpacing={"1px"}
                  textTransform="uppercase"
                >
                  {link.name}
                </Button>
              ))}
            </Stack>
          ) : (
            <Stack spacing={4} textAlign="left">
              {links.map((link) => (
                <Button
                  key={link.name}
                  variant={
                    link.component == selectedLink.component
                      ? "solid"
                      : "ghost"
                  }
                  colorScheme="teal"
                  onClick={() => setSelectedLink(link)}
                  display="flex"
                  letterSpacing={"1px"}
                  fontSize="22px"
                >
                  {link.icon}
                </Button>
              ))}
            </Stack>
          )}
        </Box>

        <Box flex="1">{selectedLink.component}</Box>
      </Flex>
    </Box>
  );
};

export default AdminPanel;
