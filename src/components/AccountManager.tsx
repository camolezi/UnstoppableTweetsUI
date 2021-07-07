import React, { useEffect, useState } from "react";
import CreateAccount from "./CreateAccount";

import { CreateContractWithSigner } from "../components/Contract/CreateContract";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { UseUserContext } from "./Context/UserContext";

type UserDetails = {
  hasAccount: boolean;
  accountName: string;
};

async function CheckUserHasAccount(): Promise<UserDetails> {
  const tweetContract = CreateContractWithSigner();
  if (tweetContract) {
    const address = await tweetContract.signer.getAddress();

    const hasAccount = await tweetContract.hasUserName(address);
    const accountName = await tweetContract.userNames(address);

    return { hasAccount, accountName };
  }
  return { hasAccount: false, accountName: "" };
}

async function CreateNewUserUsingMetamask(username: string) {
  const tweetContract = CreateContractWithSigner();
  if (tweetContract) await tweetContract.createNewUserName(username);
}

function AccountManager(): JSX.Element {
  const userContext = UseUserContext();
  const userDetails = userContext.value;

  useEffect(() => {
    CheckUserHasAccount().then((result) => userContext.setUserValue(result));
  }, []);

  return (
    <>
      <Flex px="10" py="3">
        <Box>
          <Heading size="xl">Unstoppable Tweets</Heading>
        </Box>
        <Spacer />
        <Box pr="10">
          {userDetails.hasAccount ? (
            <Heading size="md">{userDetails.accountName}</Heading>
          ) : (
            <CreateAccount
              createAccount={(username) => CreateNewUserUsingMetamask(username)}
            ></CreateAccount>
          )}
        </Box>
      </Flex>
    </>
  );
}

export default AccountManager;
