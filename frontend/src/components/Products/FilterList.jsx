import {
  Box,
  Heading,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import "../../styles/products.css";

const FilterList = ({
  setGender,
  setCategory,
  setBrand,
  setColor,
  setMinVal,
  setMaxVal,
}) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(95000);
  const colorArray = [
    "white",
    "black",
    "red",
    "blue",
    "pink",
    "yellow",
    "green",
    "brown",
  ];
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      const getData = setTimeout(() => {
        setMinVal(min);
        setMaxVal(max);
      }, 2000);
      return () => clearTimeout(getData);
    }
  }, [min, max]);

  return (
    <Box
      borderRight="2px solid "
      position={"sticky"}
      top="45px"
      className="filter_list"
    >
      <Box
        padding={"30px 0px"}
        borderBottom="2px solid"
        position={"sticky"}
        zIndex={"100"}
        top="61px"
        backdropFilter={"blur(10px)"}
        backgroundImage={
          "url('https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
        }
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        backgroundPosition="center center"
      >
        <Heading
          textShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
          color={"white"}
        >
          FILTERING
        </Heading>
      </Box>
      <Box
        className="filter_section"
        position={"sticky"}
        top="160px"
        height={"70vh"}
        overflowY="scroll"
        scrollBehavior={"smooth"}
      >
        <Box
          // w="25%"
          margin="auto"
          mt="20px"
          display={"flex"}
          flexDirection="column"
          gap={"15px"}
        >
          <Box>
            <Heading
              fontSize={{ base: "sm", sm: "md", md: "md", lg: "md", xl: "lg" }}
            >
              Filter By Gender
            </Heading>
            <Box textAlign={"left"} w="50%" margin={"auto"} mt="10px">
              <ul>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  gap={"10px"}
                  onClick={(e) => setGender(e.target.value)}
                >
                  <li>
                    <button value={""}>All Gender</button>
                  </li>
                  <li>
                    <button value="men">Male</button>
                  </li>
                  <li>
                    <button value="women">Female</button>
                  </li>
                </Box>
              </ul>
            </Box>
          </Box>
          <Box>
            <Heading
              fontSize={{ base: "sm", sm: "md", md: "md", lg: "md", xl: "lg" }}
            >
              Filter By Category
            </Heading>
            <Box textAlign={"left"} w="50%" margin={"auto"} mt="10px">
              <ul>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  gap={"10px"}
                  onClick={(e) => setCategory(e.target.value)}
                >
                  <li>
                    <button value={"jordan"}>All JORDAN</button>
                  </li>
                  <li>
                    <button value={"jordan_low"}>Jordan Low</button>
                  </li>
                  <li>
                    <button value={"jordan_high"}>Jordan High</button>
                  </li>
                  <li>
                    <button value={"jordan_4"}>Jordan 4</button>
                  </li>
                  <li>
                    <button value={"dunks"}>DUNKS</button>
                  </li>
                  <li>
                    <button value={"yeezys"}>YEEZYS</button>
                  </li>
                  <li>
                    <button value={"apparels"}>APPARELS</button>
                  </li>
                </Box>
              </ul>
            </Box>
          </Box>
          <Box>
            <Heading
              fontSize={{ base: "sm", sm: "md", md: "md", lg: "md", xl: "lg" }}
            >
              Filter By Category
            </Heading>
            <Box textAlign={"left"} w="70%" margin={"auto"} mt="10px">
              <Select onChange={(e) => setBrand(e.target.value)}>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
                <option value="puma">Puma</option>
                <option value="asics">Asics</option>
              </Select>
            </Box>
          </Box>
          <Box>
            <Heading
              fontSize={{ base: "sm", sm: "md", md: "md", lg: "md", xl: "lg" }}
            >
              Filter By Colors
            </Heading>
            <Box textAlign={"left"} w="70%" margin={"auto"} mt="10px">
              <Select
                textTransform={"capitalize"}
                onChange={(e) => setColor(e.target.value)}
              >
                {colorArray.map((el) => (
                  <option value={el}>{el}</option>
                ))}
              </Select>
            </Box>
          </Box>
          <Box>
            <Heading
              fontSize={{ base: "sm", sm: "md", md: "md", lg: "md", xl: "lg" }}
            >
              Filter By Price
            </Heading>

            <Box w="70%" margin={"auto"} mt="10px">
              <Box gap={"10px"} display={"flex"}>
                <Input
                  border={"1px solid"}
                  type="number"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                />
                <Input
                  border={"1px solid"}
                  type="number"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
              </Box>
              <Box>
                <RangeSlider
                  onChange={(val) => (setMin(val[0]), setMax(val[1]))}
                  aria-label={["min", "max"]}
                  defaultValue={[min, max]}
                  max="95000"
                >
                  <RangeSliderTrack bg="red.400">
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb bg={"red"} index={0} />
                  <RangeSliderThumb bg={"red"} index={1} />
                </RangeSlider>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterList;
