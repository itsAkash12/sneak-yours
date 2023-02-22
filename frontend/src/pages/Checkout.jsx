import React from 'react'
import {Box} from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Shipping from '../components/Checkout/Shipping'
import CartInfo from '../components/Checkout/CartInfo'
import "../styles/checkout.css"

const Checkout = () => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box className='checkout_container'>
        <Shipping></Shipping>
        <CartInfo></CartInfo>
      </Box>
    </Box>
  )
}

export default Checkout
