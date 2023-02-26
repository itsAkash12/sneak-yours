import { Box, Button, Container, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import OrderCard from './OrderCard';
import Loading from "../../components/Loading"

const Orders = () => {
  const [ordersData, setOrdersData]= useState([]);
  const { token } = useSelector((store) => store.auth);
  const [ordersCount, setOrdersCount]= useState(0);
  const [page, setPage]= useState(1);
  const [loading, setLoading]= useState(false);
  const getOrdersAdmin = async(page)=> {
    setLoading(true);
    try {
      let res = await fetch(`${process.env.REACT_APP_BASEURL}orders?page=${page}`,{
        headers:{
          authorization:token
        }
      });
      let result = await res.json();
      setOrdersData(result.order);
      setOrdersCount(result.orderCount)
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error.message)
      setLoading(false);
    } 
  }
  useEffect(() => {
    getOrdersAdmin(page)
  }, [page])
  if(loading){
    return <Loading></Loading>
  }
  return (
    <Container maxW="container.lg" mt="6">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {ordersData && ordersData.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </SimpleGrid>
      <Box m={"20px 0px"} display="flex" justifyContent={"center"} alignItems="center" gap={"20px"} >
      <Button isDisabled={page==1} colorScheme={"teal"} onClick={()=> setPage(page-1)}>-</Button>
      <Text>{page}</Text>
      <Button isDisabled={ordersCount < 12} colorScheme={"teal"} onClick={()=> setPage(page+1)}>+</Button>
      </Box>
    </Container>
  )
}

export default Orders