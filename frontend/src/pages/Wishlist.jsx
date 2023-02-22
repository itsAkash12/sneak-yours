import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWishlist,
  getWishlist,
} from "../redux/wishlist/wishlist.actions";
import Navbar from "../components/Navbar/Navbar";
import { Box, Button, Heading, Image, Text, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosHeart, IoIosHeartDislike } from "react-icons/io";
import { useState } from "react";
import { clearErrors } from "../redux/wishlist/wishlist.actions";
import Loading from "../components/Loading";

const Wishlist = () => {
  const toast = useToast()
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const { wishlists, isLoading,isSuccess,isError,message } = useSelector((store) => store.wishlist);
  useEffect(() => {
    dispatch(getWishlist());
  }, [flag]);
  console.log(wishlists);
  const wishlistDeleteHandler = async (id) => {
    await dispatch(deleteWishlist(id));
    setFlag(!flag);
    dispatch(clearErrors());
  };
  useEffect(() => {
    if (isError) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
    if (isSuccess) {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
    dispatch(clearErrors());
  }, [isSuccess,isError, message]);
  
  return (
    <Box>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <Box mt={"30px"}>
          {wishlists == undefined ? (
            <Box>
              <Text>No data to show</Text>
            </Box>
          ) : (
            <Box>
              <Heading letterSpacing={"2px"}>My Wishlist</Heading>
              <Box
                w={"90%"}
                m="auto"
                mt={"50px"}
                display={"grid"}
                gridTemplateColumns="repeat(3,1fr)"
                gap="20px"
              >
                {wishlists &&
                  wishlists.map((el) => (
                    <Box key={el._id} position="relative">
                      <div className="card">
                        <div className="card2">
                          <Link to={`/single/${el.prodId._id}`}>
                            <Image src={el.prodId.images[0].url}></Image>
                            <Box mt={"3px"}>
                              <Text color={"gray.600"}>{el.prodId.brand}</Text>
                              <Text fontWeight={"bold"}>
                                {el.prodId.product_title.toUpperCase()}
                              </Text>
                              <Text>
                                ₹{parseFloat(el.prodId.price).toLocaleString()}
                                .00
                              </Text>
                            </Box>
                          </Link>
                          <Box
                            w="90%"
                            m={"auto"}
                            mt={"10px"}
                            position={"absolute"}
                            top="0"
                            right="-130"
                          >
                            <Button
                              bg={"white"}
                              _hover={{
                                backgroundColor: "white",
                                color: "white",
                              }}
                              onClick={() => wishlistDeleteHandler(el._id)}
                            >
                              <Box
                                letterSpacing={"2px"}
                                display={"flex"}
                                gap="5px"
                                alignItems="center"
                                color={"red"}
                                _hover={{ color: "black" }}
                              >
                                <IoIosHeartDislike fontSize={"35px"} />
                              </Box>
                            </Button>
                          </Box>
                        </div>
                      </div>
                    </Box>
                  ))}
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Wishlist;
