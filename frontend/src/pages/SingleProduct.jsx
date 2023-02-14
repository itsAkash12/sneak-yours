import React from 'react'
import {Box} from "@chakra-ui/react"
import Navbar from '../components/Navbar/Navbar'
import SlidingBox from '../components/SinglePage/SlidingBox'
import DetailsBox from '../components/SinglePage/DetailsBox'

const SingleProduct = () => {
  return (
    <Box>
      <Navbar />
      <Box w="90%" margin="auto" display={"grid"} gridTemplateColumns="repeat(2,1fr)" mt={"50px"}> 
        <SlidingBox></SlidingBox>
        <DetailsBox></DetailsBox>
      </Box>
    </Box>
  )
}

export default SingleProduct
