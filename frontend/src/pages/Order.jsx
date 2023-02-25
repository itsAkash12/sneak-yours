import { Accordion, Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar/Navbar";
import {getOrderHistory} from "../redux/order/order.actions"
import OrderHistoryCard from "../components/OrderHistory/OrderHistoryCard";
import image from "../assets/images/undraw_selection_re_ycpo.png"
import EmptyPage from "../components/NoDataFound"

const Orders = () => {
  const { ordersHistory, isLoading } = useSelector((store) => store.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderHistory());
  }, []);

  console.log(ordersHistory);
  return (
    <>
      <Navbar />
      <Box width={{ base: "90%", lg: "80%" }} margin={"auto"}>
        <Box width={"100%"} margin={"auto"} marginTop={{ base: 7, md: 10 }}>
          {isLoading ? (
            <Box width={"100%"} height={"60vh"} margin={"auto"} mt={"50px"}>
              <Loading />
            </Box>
          ) : (
            <Box mt={"50px"} mb="50px">
              {ordersHistory.length == 0 ? (
                <EmptyPage width={"45%"} url={image} title={"Your Carts Don't have any Products Yet"} sub_title={"Add Products"}></EmptyPage>
              ) : (
                <>
                  <Box
                    display={"flex"}
                    gap={3}
                    marginBottom={{ base: 2, md: 5 }}
                  >
                    <Text
                      fontSize={23}
                      fontWeight={500}
                      paddingRight={4}
                      borderRight={"3px solid black"}
                    >
                      My Orders
                    </Text>

                    <Text fontSize={23} color={"blackAlpha.700"}>
                      {ordersHistory.length} Items
                    </Text>
                  </Box>

                  <Accordion
                    allowMultiple
                    display={"flex"}
                    flexDirection={"column"}
                    gap={5}
                    marginBottom={20}
                  >
                    {ordersHistory &&
                      ordersHistory.map((el) => (
                        <OrderHistoryCard key={el._id} {...el} />
                      ))}
                  </Accordion>
                </>
              )}
            </Box>
          )}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Orders;