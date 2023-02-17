import {
  Box,
  Button,
  ButtonGroup,
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
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../pages/Loader";
import { setNextPage, setPrevPage } from "../../redux/product/product.actions";
import "../../styles/products.css";
import DrawerFilter from "./DrawerFilter";

const ProductList = ({ products }) => {
  const { loading, page } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  console.log(products.length)
  const prevPageHandler=()=> {
    dispatch(setPrevPage(1))
  }
  const nextPageHandler = ()=> {
    dispatch(setNextPage(1))
  }
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
                <Link to={`/single/${el._id}`}>
                  <div className="card">
                    <div className="card2">
                      <Image src={el.images[1].url}></Image>
                      <Box mt={"3px"}>
                        <Text color={"gray.600"}>{el.brand}</Text>
                        <Text fontWeight={"bold"}>{(el.product_title).toUpperCase()}</Text>
                        <Text>₹{parseFloat(el.price).toLocaleString()}.00</Text>
                      </Box>
                    </div>
                  </div>
                </Link>
              </GridItem>
            ))}
        </Grid>
      </Box>
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <ButtonGroup>
          <Button isDisabled={page==1} onClick={prevPageHandler}><IoIosArrowBack fontSize={"25px"}></IoIosArrowBack></Button>
          <Text fontSize={"lg"} fontWeight="bold" mt={"5px"}>{page}</Text>
          <Button isDisabled={page==6} onClick={nextPageHandler}><IoIosArrowForward fontSize={"25px"}></IoIosArrowForward></Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default ProductList;
