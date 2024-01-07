import { Avatar, Link, Text, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="My_username" size={"lg"} src="/profilepic.png" />
        <Text fontSize={"12"} fontWeight={"bold"}>
          My_username
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        color={"blue.500"}
        fontWeight={"medium"}
        cursor={"pointer"}
        style={{ textDecoration: "none" }}>
        Logout
      </Link>
    </Flex>
  );
};
export default SuggestedHeader;
