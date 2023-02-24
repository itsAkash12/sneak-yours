import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import FilterList from "../components/Products/FilterList";
import ProductList from "../components/Products/ProductList";
import { getProducts, setLoading } from "../redux/product/product.actions";
import { CLEAR_SEARCH, GET_PRODUCTS, LOADING_PRODUCTS } from "../redux/product/product.types";
import Loader from "./Loader";

const Productspage = () => {
  const dispatch = useDispatch();
  const [totalProducts, setTotalProducts] = useState(12);
  const {searchByValue }= useSelector((store)=> store.product)
  const [sorting,setSorting]= useState("");
  const [gender, setGender]= useState("");
  const [category, setCategory]= useState("");
  const [brand, setBrand]= useState("");
  const [color, setColor]= useState("");
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(0);
  const { products,loading,page } = useSelector((store) => store.product);
  const {id} = useParams();
  
  
  useEffect(()=> {
    dispatch({type:CLEAR_SEARCH});
  },[sorting,gender,category,brand,color,minVal,maxVal])
  useEffect(() => {
    dispatch(getProducts(page,sorting,gender,category,brand,color,minVal,maxVal,searchByValue,id));
  }, [page,sorting,gender,category,brand,color,minVal,maxVal,searchByValue,id]);
  return (
    <Box>
      <Navbar />
      <Box>
        <Flex justify={"space-between"}>
          <FilterList setGender={setGender} setCategory={setCategory} setBrand={setBrand} setColor={setColor} setMinVal={setMinVal} setMaxVal={setMaxVal}></FilterList>
          {
            loading ? <Loader /> : <ProductList products={products} setSorting={setSorting} page={page} ></ProductList>
          }
        </Flex>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Productspage;
