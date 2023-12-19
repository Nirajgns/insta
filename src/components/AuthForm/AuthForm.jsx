import {
  Box,
  Image,
  Input,
  VStack,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} p={5} borderRadius={5}>
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            h={24}
            cursor={"pointer"}
            alt="Instagram logo"
          />
          <Input placeholder="Email" type="email" fontSize={14} />
          <Input placeholder="Password" type="password" fontSize={14} />

          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              type="password"
              fontSize={14}
            />
          ) : null}

          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Log In" : "Sign Up"}
          </Button>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}>
            {/* -----OR---- */}
            <Box borderBottom={"2px solid gray"} w={"full"} />
            <Box mx={1} color={"white"}>
              OR
            </Box>
            <Box borderBottom={"2px solid gray"} w={"full"} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}>
            <Image
              src="/google.png"
              w={5}
              cursor={"pointer"}
              alt="Google logo"
            />
            <Text mx={2} color={"blue.500"}>
              Continue with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};
export default AuthForm;
