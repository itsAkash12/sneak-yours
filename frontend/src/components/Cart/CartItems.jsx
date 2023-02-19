import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import CartCard from './CartCard'
import "../../styles/cartpage.css"

const CartItems = () => {
  return (
    <Box >
        <Heading fontSize={"xx-large"}>Your Cart Items(3)</Heading>
        <Box padding="20px 0px" display={"grid"} gridTemplateColumns="repeat(1,1fr)" gap={"20px"}>
        <CartCard></CartCard>
        <CartCard></CartCard>
        <CartCard></CartCard>
        </Box>
    </Box>
  )
}

export default CartItems
