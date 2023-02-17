import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { sneakersData } from "../../assets/data/Data";
import "../../styles/singleproduct.css";
import ReactImageMagnify from "react-image-magnify";

const SlidingBox = ({images}) => {
  console.log(images)
  const [img, setImg] = useState(images[0].url);
  useEffect(() => {
    setImg(images[0].url)
  }, [images[0].url])
  
  const refs = useRef([]);
  const hoverHandler = (el, i) => {
    setImg(el.url);
    refs.current[i].classList.add("active");
    for (var j = 0; j < sneakersData.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  return (
    <Box>
      <Box display={"grid"} gridTemplateColumns="repeat(1,1fr)" gap={"30px"}>
        <Box
          borderWidth={"thin"}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
            <Image className="hiding_container1" src={img}></Image>
          <ReactImageMagnify className="hiding_container2"
            {...{
              smallImage: {
                alt: "Jordan",
                isFluidWidth: true,
                src: img,
              },
              largeImage: {
                src: img,
                width: 650,
                height: 800,
              },
              enlargedImageContainerDimensions: {
                width: "110%",
                height: "110%",
              },
            }}
          />
        </Box>
        <Box display={"grid"} gridTemplateColumns="repeat(5,1fr)" gap={"5px"}>
          {images &&
            images.map((el, i) => (
              <Box
                onMouseOver={() => hoverHandler(el, i)}
                className={i == 0 ? "target_box active" : "target_box"}
                ref={addRefs}
                key={el.id}
              >
                <Image className="target_image" src={el.url}></Image>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SlidingBox;
