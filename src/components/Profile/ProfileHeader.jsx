import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}>
      <AvatarGroup
        size={{ base: "xl", sm: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}>
        <Avatar
          name="Niraj Ganesh"
          src="/profilepic.png"
          alt="as Niraj Ganesh"></Avatar>
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}>
          <Text fontSize={{ base: "sm", md: "lg" }}>Niraj.gns</Text>

          <Flex alignItems={"center"} justifyContent={"center"} gap={4}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}>
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ base: 2, sm: 4 }}
          fontSize={{ base: "xs", md: "sm" }}>
          <Text size={{ base: "xs", md: "sm" }}>
            <Text
              fontWeight={"bold"}
              mr={1}
              as="span"
              size={{ base: "xs", md: "sm" }}>
              4
            </Text>
            Posts
          </Text>
          <Text size={{ base: "xs", md: "sm" }}>
            <Text
              fontWeight={"bold"}
              mr={1}
              as="span"
              size={{ base: "xs", md: "sm" }}>
              49k
            </Text>
            Followers
          </Text>
          <Text size={{ base: "xs", md: "sm" }}>
            <Text
              fontWeight={"bold"}
              mr={1}
              as="span"
              size={{ base: "xs", md: "sm" }}>
              134
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} gap={4}>
          <Text
            fontSize={"sm"}
            fontWeight={"bold"}
            size={{ base: "xs", md: "sm" }}>
            Niraj Ganesh
          </Text>
        </Flex>
        <Text fontSize={"sm"} size={{ base: "xs", md: "sm" }}>
          {" "}
          Lorem ipsum dolor sit amet.
        </Text>
      </VStack>
    </Flex>
  );
};
export default ProfileHeader;
