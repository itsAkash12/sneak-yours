import { Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "../../styles/homepage.css";
import {Link} from "react-router-dom"


const CategoryChoice = () => {
  
  return (
    <Box >
      <Box  className="category_container">
        <Box data-aos="fade-up">
          <Link to="/products/men"><Image src="https://user-images.githubusercontent.com/107500115/222728055-57ce8b32-ed6f-4043-b944-169fc82f77ed.png" /></Link>
        </Box>
        <Box data-aos="fade-down">
          <Link to="/products/women"><Image src="https://user-images.githubusercontent.com/107500115/222728275-1e37e219-fa75-4f84-9539-48cd084f51c0.png" /></Link>
        </Box>
        <Box data-aos="fade-up">
          <Link to="#"><Image src="https://user-images.githubusercontent.com/107500115/222726852-ebb2c420-4067-4df6-ae1f-e2f0f14b3aa9.png" /></Link>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryChoice;
