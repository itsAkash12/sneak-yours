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
import { Link } from "react-router-dom";
import "../../styles/products.css";
import DrawerFilter from "./DrawerFilter";

const ProductList = () => {
  const sneakersData = [
    {
      id: 1,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b1d3cf2e-0dca-4f6d-97ff-21006c346e8e/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
      title: "Air Jordan 1 Retro High OG",
      subTitle: "Men's Shoes",
      price: "32995.00",
    },
    {
      id: 2,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a44e41a-f17a-4036-b06b-b17e641d073f/air-jordan-legacy-312-shoes-8j5LzH.png",
      title: "Air Jordan Legacy 312",
      subTitle: "Men's Shoes",
      price: "59995.92",
    },
    {
      id: 3,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd0c8f03-b02d-413c-ab9f-758bd19775df/air-jordan-1-mid-se-craft-shoes-skP03z.png",
      title: "Air Jordan 1 Mid SE Craft",
      subTitle: "Men's Shoes",
      price: "11959.00",
    },
    {
      id: 4,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e9e43c6-ee56-482d-a847-4648e468d4f0/air-jordan-1-retro-high-og-shoes-G8hcQx.png",
      title: "Air Jordan 1 Retro High",
      subTitle: "Men's Shoes",
      price: "32995.00",
    },
    {
      id: 5,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ee4388f5-e22b-4f4c-bcf8-2e1ce9e2f51c/jordan-max-aura-4-shoes-cKMcXJ.png",
      title: "Jordan Max Aura 4",
      subTitle: "Men's Shoes",
      price: "32995.00",
    },
    {
      id: 6,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fa954ce-2703-45fe-aafb-9a06b8426ed6/air-jordan-6-retro-shoes-4m3b9d.png",
      title: "Air Jordan 6 Retro",
      subTitle: "Men's Shoes",
      price: "66995.00",
    },
    {
      id: 7,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b0b378a9-3aaf-4a64-aa79-13d074e73832/air-jordan-1-zoom-cmft-shoes-mDxHSk.png",
      title: "Air Jordan 1 Zoom CMFT",
      subTitle: "Men's Shoes",
      price: "34995.00",
    },
    {
      id: 8,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc9efa13-9572-490e-afa9-4c5b8e25187a/air-jordan-1-mid-se-shoes-pZbfP8.png",
      title: "Air Jordan 1 Mid SE",
      subTitle: "Men's Shoes",
      price: "33995.00",
    },

    {
      id: 9,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/30b29f29-321d-4360-a03a-611188bc0cfc/air-jordan-1-zoom-cmft-shoes-mDxHSk.png",
      title: "Air Jordan 1 Zoom CMFT",
      subTitle: "Men's Shoes",
      price: "18000.00",
    },
    {
      id: 10,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d01cb6e6-5d25-46e6-8851-2bf514d9066c/air-jordan-1-low-g-golf-shoes-8bKbqs.png",
      title: "Air Jordan 1 Low G",
      subTitle: "Men's Shoes",
      price: "13995.00",
    },
    {
      id: 11,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1799bdd9-01f2-4faa-9e29-5eb5f0a15225/jordan-1-ko-shoes-RLJcHC.png",
      title: "Jordan 1 KO",
      subTitle: "Men's Shoes",
      price: "18995.00",
    },
    {
      id: 12,
      imgUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2fc7378c-8b90-445b-a2ba-e94de9e7f58d/ajko-1-low-union-shoes.png",
      title: "AJKO 1 Low x UNION",
      subTitle: "Men's Shoes",
      price: "13995.00",
    },
  ];
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
          {sneakersData &&
            sneakersData.map((el) => (
              <GridItem key={el.id}>
                <Link to="/single">
                  <Image src={el.imgUrl}></Image>
                  <Text>{el.title}</Text>
                </Link>
              </GridItem>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductList;
