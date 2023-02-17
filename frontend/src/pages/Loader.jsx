import { Box } from '@chakra-ui/react'
import React from 'react'
import "../styles/loader.css"

const Loader = () => {
  return (
    <Box h="100vh" className='loader_container'>
      <Box className="loader"></Box>
    </Box>
  )
}

export default Loader
