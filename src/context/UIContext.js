import React, { useState } from "react";

/* Toggle show auth UI */
export const UIAuthContext = React.createContext({
  authIsShow: false,
  onToggleShowAuth: () => {},
});

export const UIAuthContextProvider = (props) => {
  const [authIsShow, setAuthIsShow] = useState(UIAuthContext.authIsShow);
  const childrenDOMs = props.children;

  const toggleShowAuthHandler = () => {
    setAuthIsShow((prevState) => !prevState);
  };

  return (
    <UIAuthContext.Provider
      value={{
        authIsShow: authIsShow,
        onToggleShowAuth: toggleShowAuthHandler,
      }}
    >
      {childrenDOMs}
    </UIAuthContext.Provider>
  );
};
