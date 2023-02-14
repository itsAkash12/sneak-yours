import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { sneakersData } from "../../assets/data/Data";
import "../../styles/singleproduct.css"

const SlidingBox = () => {
    const [img, setImg] = useState(sneakersData[0].imgUrl)
    const hoverHandler = (el, i)=> {
        setImg(el.imgUrl)
    }
  return (
    <Box >
      <Box display={"grid"} gridTemplateColumns="repeat(1,1fr)" gap={"10px"}>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Image w={"70%"} src={img}></Image>
        </Box>
        <Box display={"grid"} gridTemplateColumns="repeat(5,1fr)" gap={"5px"}>
          {sneakersData &&
            sneakersData.slice(0, 5).map((el, i) => (
              <Box className="target_box" key={el.id}>
                <Image className="target_image" src={el.imgUrl} onMouseOver={()=> hoverHandler(el, i)}></Image>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SlidingBox;
