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
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    // console.log(inputs);
    if (!inputs.email || !inputs.password) {
      alert("Please enter all the fields");
      return;
    }
    navigate("/");
  };

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
          {/* email */}
          <Input
            placeholder="Email"
            type="email"
            fontSize={14}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          {/* password */}
          <Input
            placeholder="Password"
            type="password"
            fontSize={14}
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {/* confirmpassword */}
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              type="password"
              fontSize={14}
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}

          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}>
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

      <Box border={"1px solid gray"} padding={5} borderRadius={4}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box mx={5} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default AuthForm;
