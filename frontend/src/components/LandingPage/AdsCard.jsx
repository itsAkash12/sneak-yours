import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { adsData } from "../../assets/data/Data";
import "../../styles/homepage.css";

const AdsCard = () => {
  return (
    <Box
      data-aos="fade-up"
      w={"90%"}
      m="80px auto 80px auto"
      className="ads_container"
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap={"10px"}
      >
        {adsData &&
          adsData.map((el) => (
            <Box key={el.img} className="ads_card">
              <Image src={el.img} alt={el.img} className="ads_image"></Image>
              <Box className="ads_middle">
                <BsInstagram
                  cursor={"pointer"}
                  className="insta_logo"
                  color="white"
                  fontSize={"40px"}
                />
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default AdsCard;
