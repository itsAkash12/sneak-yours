import { Box, Image, Text, useColorModeValue, useBreakpointValue, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Error404({url,title,sub_title, width}) {
  const imageSrc = useColorModeValue("/404-light.gif", "/404-dark.gif");
  const textBgColor = useColorModeValue("white", "gray.800");
  const fontSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      // minHeight="100vh"
      // bg={useColorModeValue("gray.50", "gray.800")}
      px={{ base: "4", md: "8" }}
    >
      <Box
        p={{ base: "4", md: "8" }}
        bg={textBgColor}
        borderRadius="md"
        boxShadow="md"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Image w={width} src={url} alt="404 error page not found" mb={{ base: "4", md: "8" }} />
        <Text fontSize={fontSize} fontWeight="bold" mb={{ base: "2", md: "4" }}>
          {title}
        </Text>
        <Link to="/products"><Button w={"container.sm"} colorScheme="purple" textTransform="uppercase">{sub_title}</Button></Link>
      </Box>
    </Box>
  );
}

export default Error404;