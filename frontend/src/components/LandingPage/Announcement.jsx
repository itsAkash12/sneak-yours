import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "../../styles/homepage.css";
import Marquee from "react-fast-marquee";

const Announcement = () => {
  return (
    <Box className="anouncement_container" bg={"black"} p="5px">
      <Marquee gradient={false} speed="60" >
        <Box className="marquee_container" color={"white"} display={"flex"} justifyContent="space-between" alignItems={"center"}>
          <Box>
            <Text fontSize={"x-large"}>SNEAKYOURS</Text>
          </Box>
          <Box>
            <Text fontSize={"x-large"}>SNEAKYOURS</Text>
          </Box>
          <Box>
            <Text fontSize={"x-large"}>SNEAKYOURS</Text>
          </Box>
          <Box>
            <Text fontSize={"x-large"}>SNEAKYOURS</Text>
          </Box>
          <Box>
            <Text fontSize={"x-large"}>SNEAKYOURS</Text>
          </Box>
          <Box>
            <Text fontSize={"x-large"}>SNEAKYOURS</Text>
          </Box>
        </Box>
      </Marquee>
    </Box>
  );
};

export default Announcement;
