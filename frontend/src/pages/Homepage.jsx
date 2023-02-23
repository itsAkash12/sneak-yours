import { Box, Heading, Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Announcement from "../components/LandingPage/Announcement";
import HeroContainer from "../components/LandingPage/HeroContainer";
import CategoryChoice from "../components/LandingPage/CategoryChoice";
import SliderCarousel from "../components/Slider/SliderCarousel";
import Navbar from "../components/Navbar/Navbar";
import AdsCard from "../components/LandingPage/AdsCard";
import { sneakersData } from "../assets/data/Data";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/cart/cart.actions";
import { getProducts } from "../redux/product/product.actions";
import Loading from "../components/Loading";
import Footer from "../components/Footer"

const Homepage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);
  useEffect(() => {
    dispatch(getCart());
    dispatch(getProducts());
  }, []);

  return (
    <Box>
      <Navbar />
      <HeroContainer />
      <Announcement />
      <CategoryChoice />
      {loading ? (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : (
        <SliderCarousel data={products} />
      )}
      <AdsCard />
      <Footer></Footer>
    </Box>
  );
};

export default Homepage;
