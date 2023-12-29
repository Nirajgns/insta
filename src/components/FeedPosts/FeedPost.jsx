import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = () => {
  return (
    <>
      <PostHeader />
      <Box my={2} borderRadius={5} overflow={"hidden"}>
        <Image src="/img1.png" alt="post image" />
      </Box>
      <PostFooter />
    </>
  );
};
export default FeedPost;
