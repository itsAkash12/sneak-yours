import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import "../../styles/homepage.css"
import shoes from "../../assets/images/jordan.png"

const HeroContainer = () => {
  return (
    <Box className='hero_parent'>
        <Box className='hero_container'>
            <Image w={"50%"} src={shoes}  alt={shoes} />
        </Box>
    </Box>
  )
}

export default HeroContainer