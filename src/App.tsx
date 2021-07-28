import React, { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import TweetList from "./components/TweetList";
import { Container, StackDivider, VStack } from "@chakra-ui/react";
import { TweetInfo } from "./types/TweetTypes";
import {
  CreateContract,
  CreateContractWithSigner,
} from "./components/Contract/CreateContract";
import CreateTweet from "./components/CreateTweet";
import AccountManager from "./components/AccountManager";
import { UserContextProvider } from "./components/Context/UserContext";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

const netWorkAdress =
  "https://ropsten.infura.io/v3/98d55f8a224f4f60b8b7eadad2059c08";
const HARDHAT_NETWORK_ID = "31337";

async function CreateNewPostMetamask(text: string) {
  const tweetContract = await CreateContractWithSigner();
  if (tweetContract) await tweetContract.createNewTweet(text);
}

function App() {
  const [tweets, setTweets] = useState<TweetInfo[]>([]);

  useEffect(() => {
    const provider = ethers.providers.getDefaultProvider(netWorkAdress);
    const tweetContract = CreateContract(provider);

    tweetContract.getAllTweets().then((allTweets) => {
      const allTweetsWithUserNames = allTweets.map(async (tweet) => {
        return {
          ...tweet,
          username: await tweetContract.userNames(tweet.user),
        };
      });

      Promise.all(allTweetsWithUserNames).then((result) => setTweets(result));
    });
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <UserContextProvider>
        <AccountManager></AccountManager>
        <Container maxW="container.md" centerContent mt={5}>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={7}
            align="stretch"
            w="100%"
          >
            <CreateTweet
              createTweet={(tweetText) => CreateNewPostMetamask(tweetText)}
            ></CreateTweet>

            <TweetList tweets={tweets}></TweetList>
          </VStack>
        </Container>
      </UserContextProvider>
    </ErrorBoundary>
  );
}

export default App;
