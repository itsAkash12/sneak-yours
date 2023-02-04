import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import HeroContainer from "../components/LandingPage/HeroContainer";

const Homepage = () => {
  return (
    <Box>
      <HeroContainer></HeroContainer>
      <Box width="100%" m={"auto"}  mt="-246px">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,96L48,133.3C96,171,192,245,288,250.7C384,256,480,192,576,186.7C672,181,768,235,864,240C960,245,1056,203,1152,202.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </Box>
      <Box>
        akash
      </Box>
    </Box>
  )
}

export default Homepage
