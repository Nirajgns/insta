import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
const PostHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}>
      <Flex gap={2} alignItems={"center"}>
        <Avatar src="/img1.png" alt="profile image" size={"sm"} />
        <Flex gap={2} fontSize={12} fontWeight={"bold"} cursor={"pointer"}>
          Swosti.Thapa256
          <Box color={"gray.500"}>• 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"all 0.2s ease-in-out"}>
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};
export default PostHeader;
