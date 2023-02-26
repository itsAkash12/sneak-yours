import { Badge, Box, Button, Flex, Image } from "@chakra-ui/react";
import {MdDelete} from "react-icons/md"

const UserCard = ({ user }) => {
  console.log(user);
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

      <Box >
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme={ user.role === "Admin" ? "green":"blue"}>
            {
              user.role
            }
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
          <Button colorScheme="teal" variant="outline" size="sm">
            Make Admin
          </Button>
          <Button colorScheme="red" variant="outline" size="sm">
            Delete User
          </Button>
        </Flex>
      </Box>
    </Box>
    );
  };

  export default UserCard;