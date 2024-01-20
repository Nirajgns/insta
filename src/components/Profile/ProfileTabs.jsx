import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsHeart } from "react-icons/bs";

const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}>
      <Flex
        borderTop={"1px solid white"}
        p={3}
        alignItems={"center"}
        gap={1}
        cursor={"pointer"}>
        <Box>
          <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{ sm: "none", md: "block" }}>
          Posts
        </Text>
      </Flex>

      <Flex p={3} alignItems={"center"} gap={1} cursor={"pointer"}>
        <Box>
          <BsBookmark />
        </Box>
        <Text fontSize={12} display={{ sm: "none", md: "block" }}>
          Saved
        </Text>
      </Flex>

      <Flex p={3} alignItems={"center"} gap={1} cursor={"pointer"}>
        <Box>
          <BsHeart />
        </Box>
        <Text
          fontSize={12}
          display={{
            sm: "none",
            md: "block",
          }}>
          Liked
        </Text>
      </Flex>
    </Flex>
  );
};
export default ProfileTabs;
