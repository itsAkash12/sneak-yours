import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import SlidingBox from "../components/SinglePage/SlidingBox";
import DetailsBox from "../components/SinglePage/DetailsBox";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/product/product.actions";
import Loading from "../components/Loading";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, loading } = useSelector((store) => store.product);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  console.log(singleProduct);

  return (
    <Box>
      <Navbar />
      {loading && <Loading/>}
      {singleProduct &&
        singleProduct.map((el) => (
          <Box
            key={el._id}
            w="95%"
            margin="auto"
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
              xl: "repeat(2,1fr)",
            }}
            mt={"50px"}
            gap="40px"
          >
            <SlidingBox images={el.images} main={el.images[0].url}></SlidingBox>
            <DetailsBox element={el}></DetailsBox>
          </Box>
        ))}
    </Box>
  );
};

export default SingleProduct;
