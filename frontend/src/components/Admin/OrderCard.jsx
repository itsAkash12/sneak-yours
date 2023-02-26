import { Badge, Box, Button, Flex, Image, Select, SelectField, Text } from '@chakra-ui/react'
import React from 'react'

const OrderCard = ({order}) => {
  return (
    <Box
      w="full"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Box display={"flex"}>
      <Image w="50%" src={order.prodId.images[1].url} alt={order.prodId.images[0].url} />
      <Image w="50%" src={order.prodId.images[2].url} alt={order.prodId.images[0].url} />
      </Box>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme={order.orderStatus === "Delivered" ? "green":"red"}>
            {
              order.orderStatus
            }
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="md"
            textTransform="uppercase"
            ml="2"
          >
            {order.firstname +" "+ order.lastname +", "+order.userId}
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {order.house +", "+order.city}
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {order.address+", "+order.postalcode}
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {order.number}
        </Box>

        <Box textTransform="uppercase">
          <Text mt="1" color="blue.500" fontSize="md" fontWeight={"bold"}>
          Order Count {order.orderCount}
          </Text>
          <Text mt="1" color="blue.500" fontSize="md" fontWeight={"bold"}>
          {order.prodId._id}
          </Text>
        </Box>
        <Box>
          <Select>
            <option value="">Choose Status</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancel">Cancel</option>
          </Select>
        </Box>
      </Box>
    </Box>
  )
}

export default OrderCard