import React from 'react'
import {Box} from "@chakra-ui/react"
import Navbar from '../components/Navbar/Navbar'
import SlidingBox from '../components/SinglePage/SlidingBox'
import DetailsBox from '../components/SinglePage/DetailsBox'

const SingleProduct = () => {
  return (
    <Box>
      <Navbar />
      <Box w="95%" margin="auto" display={"grid"} gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
        }} mt={"50px"} gap="40px"> 
        <SlidingBox></SlidingBox>
        <DetailsBox></DetailsBox>
      </Box>
    </Box>
  )
}

export default SingleProduct
