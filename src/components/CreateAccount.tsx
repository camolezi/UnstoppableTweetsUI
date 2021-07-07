import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BasicForm from "./Form/BasicForm";

interface CreateAccountProps {
  createAccount: (username: string) => void;
}

function CreateAccount({ createAccount }: CreateAccountProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  return (
    <>
      <Button onClick={onOpen}>Create Account</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isCreatingAccount ? (
              <Center mt={5}>
                <Spinner />
              </Center>
            ) : (
              <BasicForm
                onSubmit={(state) => {
                  createAccount(state.username.value);
                  setIsCreatingAccount(true);
                }}
                definition={[
                  {
                    id: "username",
                    label: "Username",
                    helperText: "This name is diplayed on your tweets",
                    validation: (value) => {
                      if (value.length < 5) return "Your name is too short";
                      if (value.length >= 50) return "Your name is too long";

                      return null;
                    },
                  },
                ]}
              />
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateAccount;
