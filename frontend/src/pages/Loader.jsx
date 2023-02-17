import { Box } from '@chakra-ui/react'
import React from 'react'
import "../styles/loader.css"

const Loader = () => {
  return (
    <Box w={"50%"} h="100vh" display={"flex"} alignItems="center">
      <Box className="loader"></Box>
    </Box>
  )
}

export default Loader
