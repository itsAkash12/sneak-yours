import { Box, Image, Badge, Text, Flex, Button } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box
      w="full"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Image src={product.images[0].url} alt={product.title} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme={product.quantity === 0 ? "red":"teal"}>
            {
              product.quantity === 0 ? "Out of Stock" : "Available"
            }
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {product.quantity} available
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {product.product_title}
        </Box>

        <Box>
          <Text mt="1" color="gray.500" fontSize="sm">
          {`₹${parseFloat(product.price).toLocaleString()}.00`}
          </Text>
        </Box>

        <Flex mt="2" justify="space-between">
          <Button colorScheme="teal" variant="outline" size="sm">
            Edit
          </Button>
          <Button colorScheme="red" variant="outline" size="sm">
            Delete
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
