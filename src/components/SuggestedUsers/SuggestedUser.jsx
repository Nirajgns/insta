import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex gap={2} alignItems={"center"}>
        <Avatar name={name} size={"md"} src={avatar} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={12}
        bg={"transparent"}
        p={0}
        height={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "gray.400" }}
        onClick={() => setIsFollowed(!isFollowed)}>
        {!isFollowed ? "Follow" : "Unfollow"}
      </Button>
    </Flex>
  );
};
export default SuggestedUser;
