import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import CartDetails from "../components/Cart/CartDetails";
import CartItems from "../components/Cart/CartItems";
import "../styles/cartpage.css";
import { getCart } from "../redux/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import Loading from "../components/Loading";
import { useState } from "react";
import { LOADING_CART } from "../redux/cart/cart.types";
import EmptyPage from "../components/NoDataFound"
import image from "../assets/images/undraw_empty_cart_co35.png"
import Footer from "../components/Footer";

const Cartpage = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get("jwtoken") || null;
  const { carts, isLoading } = useSelector((store) => store.cart);
  const [flag, setFlag] = useState(false);
  const toggle = ()=> {
    setFlag(!flag);
  }
  useEffect(() => {
    dispatch(getCart(token));
  }, [token, flag]);

  return (
    <Box>
      <Navbar></Navbar>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <Box margin="auto" mt={"50px"} mb="30px">
          {carts == undefined ? (
            <EmptyPage width={"33%"} url={image} title={"Your Carts Don't have any Products Yet"} sub_title={"Add Products"}></EmptyPage>
          ) : (
            <Box w={"95%"} className="cart_container" margin={"auto"} gap="10px">
              <CartItems toggle={toggle}></CartItems>
              <CartDetails></CartDetails>
            </Box>
          )}
        </Box>
      )}
      <Footer></Footer>
    </Box>
  );
};

export default Cartpage;
