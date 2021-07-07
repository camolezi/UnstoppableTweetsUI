import { Skeleton, Stack, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { TweetInfo } from "../types/TweetTypes";
import Tweet from "./Tweet";

export interface TweetListProps {
  tweets: TweetInfo[];
}

function TweetList({ tweets }: TweetListProps): JSX.Element {
  return (
    <>
      {tweets.length === 0 ? (
        <Stack spacing={3}>
          <Skeleton height="70px" />
          <Skeleton height="70px" />
          <Skeleton height="70px" />
        </Stack>
      ) : (
        <VStack spacing={3} align="stretch">
          {tweets
            .map((tweet) => (
              <Tweet key={tweet.text + tweet.user} tweet={tweet}></Tweet>
            ))
            .reverse()}
        </VStack>
      )}
    </>
  );
}

export default TweetList;
