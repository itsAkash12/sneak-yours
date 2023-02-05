import { Box, Image } from "@chakra-ui/react";
import React from "react";
import "../../styles/homepage.css";

const CategoryChoice = () => {
  return (
    <Box>
      <Box className="category_container">
        <Box>
          <Image src="https://superkicks.in/wp-content/uploads/2022/04/MAN-F.jpg" />
        </Box>
        <Box>
          <Image src="https://superkicks.in/wp-content/uploads/2022/04/WOMEN.jpg" />
        </Box>
        <Box>
          <Image src="https://superkicks.in/wp-content/uploads/2022/04/APPAREL-F.jpg" />
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryChoice;
