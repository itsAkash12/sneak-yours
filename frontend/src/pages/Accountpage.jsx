import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Navbar from "../components/Navbar/Navbar";

const data = [
  { name: "January", totalOrders: 65 },
  { name: "February", totalOrders: 59 },
  { name: "March", totalOrders: 80 },
  { name: "April", totalOrders: 81 },
  { name: "May", totalOrders: 56 },
  { name: "June", totalOrders: 55 },
  { name: "July", totalOrders: 40 },
];

const Account = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("Akash");
  const [avatarUrl, setAvatarUrl] = useState("user.avatarUrl");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatarUrl(event.target.value);
  };

  const handleSave = () => {
    // call API to update user details
    // close the drawer
    onClose();
  };

  return (
    <Box>
        <Navbar></Navbar>
      <Flex direction="column" alignItems="center">
        <Avatar size="xl" name={name} />
        <Box mt="4">
          <Heading size="lg">{"Akash Singh"}</Heading>
          <Text fontSize="md">{"akash@gmail.com"}</Text>
          <Text fontSize="md">{"7985152748"}</Text>
          <Button mt="4" onClick={onOpen}>
            Edit
          </Button>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerHeader>Edit User Details</DrawerHeader>
                <DrawerBody>
                  <Input value={name} onChange={handleNameChange} />
                  <Input
                    mt="4"
                    value={avatarUrl}
                    onChange={handleAvatarChange}
                  />
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue" onClick={handleSave}>
                    Save
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>
        <Box mt="8">
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalOrders" fill="#8884d8" />
          </BarChart>
        </Box>
      </Flex>
    </Box>
  );
};

export default Account;
