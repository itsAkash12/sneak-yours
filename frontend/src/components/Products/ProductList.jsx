import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../pages/Loader";
import "../../styles/products.css";
import DrawerFilter from "./DrawerFilter";

const ProductList = ({products}) => {
  const {loading}= useSelector((store)=> store.product)
  console.log(loading);
  return (
    <Box
      className="product_container"
      w={{ base: "90%", sm: "90%", md: "75%", lg: "75%", xl: "75%" }}
      margin="auto"
    >
      <Box borderBottom={"2px solid "} padding={"30px 0px"}>
        <Flex className="product_flex_container">
          <Box className="filter_drawer">
            <DrawerFilter></DrawerFilter>
          </Box>
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Heading
              fontSize={{
                base: "lg",
                sm: "xl",
                md: "3xl",
                lg: "3xl",
                xl: "4xl",
              }}
            >
              JORDAN SNEAKERS
            </Heading>
          </Box>
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Menu>
              <MenuButton
                bg={"transparent"}
                _hover={"transparent"}
                as={Button}
                rightIcon={<IoIosArrowDown />}
                fontSize={{
                  base: "sm",
                  sm: "md",
                  md: "md",
                  lg: "lg",
                  xl: "lg",
                }}
              >
                SORT BY
              </MenuButton>
              <MenuList>
                <MenuItem>PRICE: Low to High</MenuItem>
                <MenuItem>PRICE: High to Low</MenuItem>
                <MenuItem>POPULARITY</MenuItem>
                <MenuItem>LATEST</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
      <Box w={"90%"} margin="30px auto">
        <Grid
          className="product_grid_container"
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(3,1fr)",
          }}
          gap="30px"
        >
          {products &&
            products.map((el) => (
              <GridItem key={el._id}>
                <Link to="/single">
                  <Image src={el.images[0].url}></Image>
                  <Text>{el.product_title}</Text>
                </Link>
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductList;
