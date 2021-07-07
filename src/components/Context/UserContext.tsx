import React, { useContext, useState } from "react";

export type UserDetails = {
  hasAccount: boolean;
  accountName: string;
};

export type UserContextType = {
  value: UserDetails;
  setUserValue: (user: UserDetails) => void;
};

const UserDetailsInitialValue: UserDetails = {
  hasAccount: false,
  accountName: "",
};

const UserContext = React.createContext<UserContextType>({} as any);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userValuesContext, setUserValuesContext] = useState(
    UserDetailsInitialValue
  );

  const contextObj: UserContextType = {
    value: userValuesContext,
    setUserValue: (user) => setUserValuesContext(user),
  };

  return (
    <UserContext.Provider value={contextObj}>{children}</UserContext.Provider>
  );
}

export function UseUserContext() {
  return useContext(UserContext);
}
