import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const FilterList = () => {
  const images = [];
  return (
    <Box
      w={"25%"}
      h="100vh"
      borderRight="2px solid rgba(66, 66, 66, 0.5)"
      position={"sticky"}
      top="45px"
    >
      <Box
        padding={"29px 0px"}
        borderBottom="2px solid rgba(66, 66, 66, 0.5)"
        position={"sticky"}
        top="61px"
        backgroundImage={
          "url('https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
        }
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        backgroundPosition="center center"
      >
        <Heading color={"white"}>FILTERING</Heading>
      </Box>
      <Box
        position={"fixed"}
        w="25%"
        margin="auto"
        border={"1px solid red"}
        mt="20px"
      >
        <Box>
          <Heading
            fontSize={{ base: "sm", sm: "md", md: "md", lg: "md", xl: "lg" }}
          >
            Filter By Gender
          </Heading>
          <Box w="50%" margin={"auto"}>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterList;
