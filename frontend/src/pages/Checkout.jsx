import React, { useEffect } from 'react'
import {Box} from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar"
import Shipping from '../components/Checkout/Shipping'
import CartInfo from '../components/Checkout/CartInfo'
import "../styles/checkout.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from "../components/Loading"
import Footer from '../components/Footer'

const Checkout = () => {
  const navigate = useNavigate();
  const {carts,cartCount,isLoading}= useSelector((store)=> store.cart);
  console.log(cartCount)
  useEffect(() => {
    if(cartCount < 1){
      navigate("/cart")
    }
  }, [cartCount])
  
  return (
    <Box>
      <Navbar></Navbar>
      {isLoading ? <Loading/>:<Box className='checkout_container'>
        <Shipping></Shipping>
        <CartInfo></CartInfo>
      </Box>}
      <Footer></Footer>
    </Box>
  )
}

export default Checkout
