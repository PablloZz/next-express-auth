import { UserDetails } from "@/packages/auth";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type AuthContext = {
  user: UserDetails;
  handleSetUserDetails: (user: UserDetails) => void;
};

const DEFAULT_AUTH_CONTEXT: AuthContext = {
  user: { type: "", email: "", username: "", id: 0 },
  handleSetUserDetails: () => {},
};

const AuthContext = createContext<AuthContext>(DEFAULT_AUTH_CONTEXT);

type Properties = {
  children: React.ReactNode;
};

function useAuthContext(): AuthContext {
  return useContext(AuthContext);
}

function AuthContextProvider({ children }: Properties) {
  const [userDetails, setUserDetails] = useState<UserDetails>(DEFAULT_AUTH_CONTEXT.user);

  const handleSetUserDetails = useCallback(
    (userDetails: UserDetails) => {
      setUserDetails(userDetails);
    },
    [setUserDetails],
  );

  const context = useMemo((): AuthContext => {
    return { user: userDetails, handleSetUserDetails };
  }, [userDetails, handleSetUserDetails]);

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}

export { useAuthContext, AuthContextProvider };
