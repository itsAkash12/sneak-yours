import { Box, Button, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../../components/Loading"


const Products = () => {
  const [productsData, setProductsData]= useState([]);
  const [productsCount, setProductsCount]= useState(0);
  const [page, setPage]= useState(1);
  const [loading, setLoading]= useState(false);
  const getProductsAdmin= async(page)=> {
    setLoading(true);
    try {
      let res = await fetch(`${process.env.REACT_APP_BASEURL}products?page=${page}`);
      let result = await res.json();
      console.log(result);
      setProductsData(result.product);
      setProductsCount(result.productCount);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductsAdmin(page);
  }, [page])
  if(loading){
    return <Loading></Loading>
  }
  
  return (
    <Container maxW="container.lg" mt="6">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {productsData && productsData.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </SimpleGrid>
      <Box m={"20px 0px"} display="flex" justifyContent={"center"} alignItems="center" gap={"20px"} >
      <Button isDisabled={page==1} colorScheme={"teal"} onClick={()=> setPage(page-1)}>-</Button>
      <Text>{page}</Text>
      <Button isDisabled={productsCount < 12} colorScheme={"teal"} onClick={()=> setPage(page+1)}>+</Button>
      </Box>
    </Container>
  );
};

export default Products;
