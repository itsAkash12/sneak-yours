import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import "../../styles/homepage.css";
import shoes from "../../assets/images/jordan.png";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const HeroContainer = () => {
  return (
    <Box className="hero_parent">
      <Box className="hero_container">
        <Box>
          <Heading>SUPERSTIKER</Heading>
          <Heading>SUPERSTIKER</Heading>
          <Heading>SUPERSTIKER</Heading>
        </Box>
        <Box w={"30"} >
          <Image w={"40%"} src={shoes} alt={shoes} />
        </Box>
        <Box>
          <Box>
            <BsTwitter />
          </Box>
          <Box>
            <BsFacebook />
          </Box>
          <Box>
            <BsInstagram />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroContainer;
