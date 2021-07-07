import { Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { UseUserContext } from "./Context/UserContext";
import BasicForm from "./Form/BasicForm";

interface CreateTweetProps {
  createTweet: (username: string) => void;
}

function CreateTweet({ createTweet }: CreateTweetProps): JSX.Element {
  const [createdTweet, setCreatedTweet] = useState(false);
  const userContext = UseUserContext();

  if (!userContext.value.hasAccount)
    return <Heading size="md">Create a account before posting</Heading>;
  if (createdTweet) return <Heading>Sending Tweet :)</Heading>;

  return (
    <BasicForm
      onSubmit={(state) => {
        createTweet(state.tweetText.value);
        setCreatedTweet(true);
      }}
      submitText={"Create Tweet"}
      definition={[
        {
          id: "tweetText",
          label: "Create Tweet",
          helperText: "You should have a account to post tweets",
          type: "textArea",
          validation: (value) => {
            if (value.length >= 150) return "Your tweet is too long";
            return null;
          },
        },
      ]}
    />
  );
}

export default CreateTweet;
