import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Announcement from "../components/LandingPage/Announcement";
import HeroContainer from "../components/LandingPage/HeroContainer";
import CategoryChoice from "../components/LandingPage/CategoryChoice";
import SliderCarousel from "../components/Slider/SliderCarousel";
import Navbar from "../components/Navbar/Navbar";
import AdsCard from "../components/LandingPage/AdsCard";
import {sneakersData} from "../assets/data/Data"
import { useDispatch } from "react-redux";
import { getCart } from "../redux/cart/cart.actions";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart())
  }, [])
  
  
  return (
    <Box>
      <Navbar />
      <HeroContainer />
      <Announcement />
      <CategoryChoice />
      <SliderCarousel data={sneakersData} />
      <AdsCard />
    </Box>
  );
};

export default Homepage;
