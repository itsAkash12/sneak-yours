import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";

const Users = () => {
  const { token } = useSelector((store) => store.auth);
  const [usersList, setUsersList] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const getUsersAdmin = async (page) => {
    setIsLoading(true);
    try {
      let res = await fetch(`${process.env.REACT_APP_BASEURL}users?page=${page}`, {
        headers: {
          authorization: token,
        },
      });
      let result = await res.json();
      setUsersList(result.user);
      setUsersCount(result.userCount);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsersAdmin(page);
  }, [page]);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <Box>
      <Grid
        templateColumns={isLargerThan768 ? "repeat(3, 1fr)" : "1fr"}
        gap={4}
        p={4}
      >
        {usersList &&
          usersList.map((user) => <UserCard key={user._id} user={user} />)}
      </Grid>
      <Box
        m={"20px 0px"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        gap={"20px"}
      >
        <Button
          isDisabled={page == 1}
          colorScheme={"teal"}
          onClick={() => setPage(page - 1)}
        >
          -
        </Button>
        <Text>{page}</Text>
        <Button
          isDisabled={usersCount < 12}
          colorScheme={"teal"}
          onClick={() => setPage(page + 1)}
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default Users;
