import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/slider.css";

function SliderCard({ img, title, subTitle, price, link }) {
  return (
    <Box className="slider_card_container">
      <Link to={link}>
        <Box className="slider_card_parent">
          <Box>
            <Image src={img} alt="iphone" />
          </Box>
          <Box>
            <Text>{title}</Text>
          </Box>
          <Box>
            <Text>{subTitle}</Text>
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
