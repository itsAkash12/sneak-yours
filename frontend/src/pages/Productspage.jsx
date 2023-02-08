<<<<<<< HEAD
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FilterList from "../components/Products/FilterList";
import ProductList from "../components/Products/ProductList";

const Productspage = () => {
  return (
    <Box >
      <Navbar />
      <Box>
        <Flex justify={"space-between"}>
          <FilterList></FilterList>
          <ProductList></ProductList>
        </Flex>
      </Box>
    </Box>
  );
};

export default Productspage;
=======
import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Productspage = () => {
  return (
    <Box>
      <Navbar />
    </Box>
  )
}

export default Productspage
>>>>>>> main
