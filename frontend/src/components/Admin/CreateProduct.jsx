import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const CreateProduct = () => {
  const initialState = {
    product_title: "",
    images: [],
    subtitle: "",
    price: 0,
    colors: "",
    quantity: 0,
    description: "",
    seller_name: "",
    seller_address: "",
    discount: "",
    category: "",
    brand: "",
    deliverytime: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [productImages, setProductImages] = useState([]);

  const handleSetFormData = (e)=> {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]:value});
  }

  const handleProductImagesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setProductImages(selectedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your backend
    setFormData((prev) => ({ ...prev, images: productImages }));
    console.log(formData);
  };

  return (
    <Box w={"80%"} mx="auto" mt="8" mb="8">
      <form onSubmit={handleSubmit}>
        <VStack spacing="4" display={"grid"} gridTemplateColumns="repeat(2,1fr)" gap="20px">
          <FormControl isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input
              placeholder="Enter product name"
              name="product_title"
              value={formData.product_title}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Product Description</FormLabel>
            <Textarea
              placeholder="Enter product description"
              name="description"
              value={formData.description}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Price</FormLabel>
            <Input
              placeholder="Enter product price"
              type={Number}
              name="price"
              value={formData.price}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Quantity</FormLabel>
            <Input
              placeholder="Enter product quantity"
              name="quantity"
              type={Number}
              value={formData.quantity}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Sub-Title</FormLabel>
            <Input
              placeholder="Enter product Sub-title(gender)"
              name="subtitle"
              value={formData.subtitle}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Color</FormLabel>
            <Input
              placeholder="Enter product Color"
              name="colors"
              value={formData.colors}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Seller-Name</FormLabel>
            <Input
              placeholder="Enter Seller Name"
              name="seller_name"
              value={formData.seller_name}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Seller-Address</FormLabel>
            <Input
              placeholder="Enter seller address"
              name="seller_address"
              value={formData.seller_address}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Discount</FormLabel>
            <Input
              placeholder="Enter product discount"
              name="discount"
              value={formData.discount}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Category</FormLabel>
            <Input
              placeholder="Enter product Category"
              name="category"
              value={formData.category}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Brand</FormLabel>
            <Input
              placeholder="Enter product brand"
              name="brand"
              value={formData.brand}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Delivery Time</FormLabel>
            <Input
              placeholder="Enter product Expected Delivery Time"
              name="deliverytime"
              value={formData.deliverytime}
              onChange={(e) => handleSetFormData(e)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Product Images</FormLabel>
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleProductImagesChange}
            />
          </FormControl>

          <Button colorScheme="blue" type="submit">
            Create Product
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateProduct;
