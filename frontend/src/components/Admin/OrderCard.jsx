import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Select,
  SelectField,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const OrderCard = ({ order, flag, setFlag }) => {
  const { token } = useSelector((store) => store.auth);

  const handleUpdateStatus = async (e, id) => {
    const input = {
      orderStatus: e.target.value,
    };
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BASEURL}orders/update/${id}`,
        {
          method: "PATCH",
          headers: {
            authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(input),
        }
      );
      let result = await res.json();
      setFlag(!flag);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box
      w="full"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Box display={"flex"}>
        <Image
          w="50%"
          src={order.prodId.images[1].url}
          alt={order.prodId.images[0].url}
        />
        <Image
          w="50%"
          src={order.prodId.images[2].url}
          alt={order.prodId.images[0].url}
        />
      </Box>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge
            borderRadius="full"
            px="2"
            colorScheme={order.orderStatus === "Delivered" ? "green" : "red"}
          >
            {order.orderStatus}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="md"
            textTransform="uppercase"
            ml="2"
          >
            {order.firstname + " " + order.lastname + ", " + order.userId}
          </Box>
        </Box>

        <Box textAlign={"left"}>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {order.house + ", " + order.city}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {order.address + ", " + order.postalcode}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {order.number}
          </Box>
        </Box>

        <Box textTransform="uppercase" textAlign={"left"}>
          <Text mt="1" color="blue.500" fontSize="md" fontWeight={"bold"}>
            Price: {`₹${parseFloat(order.prodId.price).toLocaleString()}.00`}
          </Text>
          <Text mt="1" color="blue.500" fontSize="md" fontWeight={"bold"}>
            Order Count: {order.orderCount}
          </Text>
          <Text mt="1" color="blue.500" fontSize="md" fontWeight={"bold"}>
            {order.prodId._id}
          </Text>
        </Box>
        <Box>
          {order.orderStatus == "Processing" ? (
            <Select onChange={(e) => handleUpdateStatus(e, order._id)}>
              <option value="">Choose Status</option>
              <option value="Shipped">Shipped</option>
            </Select>
          ) : order.orderStatus === "Shipped" ? (
            <Select onChange={(e) => handleUpdateStatus(e, order._id)}>
              <option value="">Choose Status</option>
              <option value="Delivered">Delivered</option>
            </Select>
          ) : (
            <Box></Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default OrderCard;
