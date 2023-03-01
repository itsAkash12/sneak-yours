import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CreateProduct = () => {
    const { token } = useSelector((store) => store.auth);
    const toast = useToast();
  const initialState = {
    product_title: "",
    images: [],
    subtitle: "",
    price: "",
    colors: "",
    quantity: "",
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
  const [publish, setPublish] = useState(false);

  const handleSetFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const uploadImg = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", process.env.REACT_APP_upload_preset);
    data.append("cloud_name", process.env.REACT_APP_cloud_name);
    let res = await fetch(`https://api.cloudinary.com/v1_1/dyv0uxpi2/upload`, {
      method: "POST",
      body: data,
    });
    return await res.json();
  };

  const handleProductImagesChange = async (e) => {
    setPublish(true);
    const selectedFiles = e.target.files;
    let arr = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      let data = await uploadImg(selectedFiles[i]);
      arr.push(data.secure_url);
    }
    await setProductImages(arr);
    setPublish(false);
  };

  const addNewProducts=async(formData)=> {
    console.log(formData)
    try {
        let res = await fetch(`${process.env.REACT_APP_BASEURL}products/add`,{
            method:"POST",
            headers: {
                authorization:token
            },
            body:formData
        });
        let result = await res.json()
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let {
      product_title,
      images,
      subtitle,
      price,
      colors,
      quantity,
      description,
      seller_name,
      seller_address,
      discount,
      category,
      brand,
      deliverytime,
    } = formData;
    setFormData((prev) => ({ ...prev, images: productImages }));
    if (
      !product_title ||
      !images ||
      !subtitle ||
      !price ||
      !colors ||
      !quantity ||
      !description ||
      !seller_name ||
      !seller_address ||
      !discount ||
      !category ||
      !brand ||
      !deliverytime
    ) {
        toast({
            title: "Fill all the Credentials",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
    }else {
        addNewProducts(formData);
        toast({
          title: "Product Added Successfully",
          status: "success",
          duration: 1200,
          isClosable: true,
          position: "top",
        });
  
        // setFormData(initState);
      }
  };
  return (
    <Box w={"80%"} mx="auto" mt="8" mb="8">
      <form onSubmit={handleSubmit}>
        <VStack
          spacing="4"
          display={"grid"}
          gridTemplateColumns="repeat(2,1fr)"
          gap="20px"
        >
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

          <Button
            isLoading={publish}
            loadingText={"Uploading Images"}
            colorScheme="blue"
            type="submit"
          >
            Create Product
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateProduct;
