import { Badge, Box, Button, Flex, Image } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const UserCard = ({ user,setFlag,flag }) => {
  const { token } = useSelector((store) => store.auth);

  const handleChangeRole = async(e,id)=> {
    const input = {
      role:e.target.value
    }
    try {
      let res = await fetch(`${process.env.REACT_APP_BASEURL}users/update/${id}`, {
        method:"PATCH",
        headers:{
          authorization:token,
          "Content-Type":"application/json"
        },
        body:JSON.stringify(input)
      })
      let result = await res.json();
      setFlag(!flag);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
  const handleDeleteUser = async(id)=> {
    try {
      let res = await fetch(`${process.env.REACT_APP_BASEURL}users/delete/${id}`, {
        method:"DELETE",
        headers:{
          authorization:token,
        }
      })
      let result = await res.json();
      setFlag(!flag);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Box
      w="full"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      display={"flex"}
      flexDirection="column"
      p={4}
    >
      <Box display="flex" justifyContent={"center"} borderRadius="50%">
        <Image w={"50%"} src={user.avatar} alt={user._id} />
      </Box>

      <Box>
        <Box d="flex" alignItems="baseline">
          <Badge
            borderRadius="full"
            px="2"
            colorScheme={user.role === "Admin" ? "green" : "blue"}
          >
            {user.role}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="lg"
            textTransform="uppercase"
            ml="2"
          >
            {user.firstname} {user.lastname}
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {user.email}
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {user.number}
        </Box>

        <Flex mt="2" justify="space-between">
          {user.role === "Admin" ? (
            <Button
              colorScheme="teal"
              value={"Explorer"}
              variant="outline"
              size="sm"
              onClick={(e)=>handleChangeRole(e,user._id)}
            >
              Make Explorer
            </Button>
          ) : (
            <Button
              colorScheme="teal"
              value={"Admin"}
              variant="outline"
              size="sm"
              onClick={(e)=>handleChangeRole(e,user._id)}
            >
              Make Admin
            </Button>
          )}
          <Button colorScheme="red" variant="outline" size="sm" onClick={()=> handleDeleteUser(user._id)}>
            Delete User
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default UserCard;
