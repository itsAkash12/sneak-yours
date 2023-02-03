import { Box } from '@chakra-ui/react'
import React from 'react'
import "../styles/signup.css"
// import svg from "../assets/images/bbblurry.svg"

const Signup = () => {
  return (
    <Box className='signup_container' display={"flex"} justifyContent="center" alignItems={"center"}>
      <Box w={"50%"} h={"300px"} bg="whiteAlpha.400" backdropFilter="blur(20px)" border={"1px solid white"} >
      </Box>
    </Box>
  )
}

export default Signup
