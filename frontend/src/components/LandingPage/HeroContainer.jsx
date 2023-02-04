import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "../../styles/homepage.css";
import shoes from "../../assets/images/jordan.png";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const HeroContainer = () => {
  return (
    <Box className="hero_parent">
      <Box className="hero_container">
        <Box
          fontSize={"2em"}
          position={"relative"}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          className="shoesContainer"
        >
          <Text color={"whiteAlpha.800"} textShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" backdropFilter={"blur(10px)"} fontSize={"210px"}>SNEAKYOURS</Text>
          <Image position="absolute" w={"55%"} src={shoes} alt={shoes} />
        </Box>
        <Box display={"flex"} flexDirection="column" gap={"40px"} className="socialContainer">
          <Box border={"2px solid white"} p="10px" borderRadius={"50%"}>
            <BsTwitter color="white" fontSize={"25px"} />
          </Box>
          <Box border={"2px solid white"} p="10px" borderRadius={"50%"}>
            <BsFacebook color="white" fontSize={"25px"} />
          </Box>
          <Box border={"2px solid white"} p="10px" borderRadius={"50%"}>
            <BsInstagram color="white" fontSize={"25px"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroContainer;
