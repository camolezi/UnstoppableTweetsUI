import React from "react";
import { TweetInfo } from "../types/TweetTypes";

import { Box, Center } from "@chakra-ui/react";

function Tweet({
  tweet: { text, user, username },
}: {
  tweet: TweetInfo;
}): JSX.Element {
  return (
    <Center w="100%">
      <Box w="100%" borderWidth="1px" borderRadius="lg">
        <Box pt="3" pb="4" px="6">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            textAlign="center"
            mb="3"
          >
            {username + "  | " + user}
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {text}
          </Box>
        </Box>
      </Box>
    </Center>
  );
}

export default Tweet;
