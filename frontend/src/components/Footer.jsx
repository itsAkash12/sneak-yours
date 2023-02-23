import { Box, Flex, Image, Link, IconButton, Divider, Text } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import image from "../assets/images/SneakYours.png"

function Footer() {
  return (
    <Box bg="gray.800" color="white" py={8}>
      <Flex direction={["column", "row"]} justify="space-between" align={["center", "flex-start"]} maxW="container.lg" mx="auto">
        <Image src={image} alt="Your Logo" maxW={["90%", "150px"]} mb={[6, 0]} />
        <Flex justify="center" align="center">
          <IconButton aria-label="Facebook" icon={<FaFacebookF />} variant="ghost" colorScheme="whiteAlpha" mr={4} />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} variant="ghost" colorScheme="whiteAlpha" mr={4} />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} variant="ghost" colorScheme="whiteAlpha" mr={4} />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} variant="ghost" colorScheme="whiteAlpha" />
        </Flex>
      </Flex>
      <Flex direction={["column", "row"]} justify="space-between" align="center" maxW="container.lg" mx="auto" mt={8}>
        <Link href="#">About Us</Link>
        <Link href="#">Contact Us</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Service</Link>
        <Link href="#">Blogs</Link>
        <Link href="#">Testimonials</Link>
      </Flex>
      <Divider my={8} borderColor="gray.700" />
      <Text textAlign="center" fontSize="sm" color="gray.400">&copy; 2023 Your Company. All Rights Reserved.</Text>
    </Box>
  );
}

export default Footer;
