import React, { useState } from "react";
import { firebaseAuth } from "firebaseConfig";
import { signOut } from "firebase/auth";

const AuthUserContext = React.createContext({
  authUser: "null",
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthUserContextProvider = (props) => {
  const [authUser, setAuthUser] = useState("null");
  const childrenDOMs = props.children;

  const loginHandler = (firebaseUserState) => {
    setAuthUser(firebaseUserState);
  };

  const logoutHandler = async () => {
    await signOut(firebaseAuth);
    setAuthUser("null");
  };

  return (
    <AuthUserContext.Provider
      value={{
        authUser: authUser,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {childrenDOMs}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContext;
