import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import WebNavbar from './WebNavbar'
import "../../styles/navbar.css"
import { useState } from 'react'
import { useEffect } from 'react'

const Navbar = () => {
  const [toggle, setToggle]= useState(false);

  const toggleUp=()=>{
    if(window.scrollY >= 100 && window.location.pathname==="/"){
      setToggle(true);
    }else if(window.scrollY < 100 && window.location.pathname==="/"){
      setToggle(false);
    }else if(window.location.pathname!="/"){
      setToggle(true);
    }
  }
  useEffect(() => {
    toggleUp()
  }, [])
  window.addEventListener("scroll", toggleUp);
  
  
  return (
    <Box position="sticky" top="0" left="0" zIndex={"100"} width="100%" margin={"auto"} className={toggle ? "navbar-container_active":"navbar-container"}>
      <WebNavbar />
    </Box>
  )
}

export default Navbar
