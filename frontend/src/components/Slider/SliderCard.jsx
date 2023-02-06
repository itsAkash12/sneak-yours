import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/slider.css";

function SliderCard({ img, title, subTitle, price, link }) {
  return (
    <Box className="slider_card_container">
      <Link to={link}>
        <Box className="slider_card_parent">
          <Box>
            <Image src={img} alt="shoes" />
          </Box>
          <Box className="textContainer">
            <Text>{subTitle}</Text>
            <Heading fontSize={"xl"}>{title}</Heading>
          </Box>
          <Box>
            <Text>
              <span>₹</span>
              {price}</Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default SliderCard;
