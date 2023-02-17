import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import FilterList from "../components/Products/FilterList";
import ProductList from "../components/Products/ProductList";
import { getProducts, setLoading } from "../redux/product/product.actions";
import { GET_PRODUCTS, LOADING_PRODUCTS } from "../redux/product/product.types";
import Loader from "./Loader";

const Productspage = () => {
  const dispatch = useDispatch();
  const { products,loading } = useSelector((store) => store.product);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Box>
      <Navbar />
      <Box>
        <Flex justify={"space-between"}>
          <FilterList></FilterList>
          {
            loading ? <Loader /> : <ProductList products={products}></ProductList>
          }
        </Flex>
      </Box>
    </Box>
  );
};

export default Productspage;
