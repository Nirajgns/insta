import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested Users
        </Text>
        <Text
          fontSize={12}
          style={{ textDecoration: "none" }}
          fontWeight={"bold"}
          color={"blue.500"}
          cursor={"pointer"}
          _hover={{ color: "gray.400" }}>
          See all
        </Text>
      </Flex>

      <SuggestedUser
        name="Some user1"
        followers={1000}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Some user2"
        followers={999}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Some user 3"
        followers={555}
        avatar="https://bit.ly/code-beast"
      />

      <Box fontSize={12} color={"gray.500"} mt={5}>
        © 2024 Instagram built by NirajGns
        <Link
          href="https://github.com/NirajGns"
          target="_blank"
          color={"blue.500"}
          fontSize={12}>
          {" "}
          NirajGns
        </Link>
      </Box>
    </VStack>
  );
};
export default SuggestedUsers;
