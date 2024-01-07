import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = ({ img, username, avatar }) => {
  return (
    <>
      <PostHeader avatar={avatar} username={username} />
      <Box my={2} borderRadius={5} overflow={"hidden"}>
        <Image
          src={img}
          alt={{ username }}
          username={username}
          avatar={avatar}
        />
      </Box>
      <PostFooter username={username} />
    </>
  );
};
export default FeedPost;
