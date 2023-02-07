import React from "react";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../../styles/slider.css";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { Box, Heading, Text } from "@chakra-ui/react";

function SliderCarousel({data}) {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box >
      <Box className="iPhone_slider_heading">
        <Heading  fontSize={{ base: 'lg',sm:'xl', md: '2xl', lg: '3xl' }}>Best Selling</Heading>
        <Heading fontSize={{ base: 'lg',sm:'xl', md: '2xl', lg: '3xl' }}>JORDANS</Heading>
      </Box>
      <Box data-aos="fade-right" className="carousel_container">
        <Slider {...settings}>
          {data && data.map((el, index) => (
            <Box key={index}>
              <SliderCard
                img={el.imgUrl}
                title={el.title}
                rate={el.rate}
                price={el.price}
                subTitle={el.subTitle}
                link={"/iphoneproductpage"}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default SliderCarousel;
