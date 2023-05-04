import { createContext, useState, useContext } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [bearerToken, setBearerToken] = useState("");

  return (
    <StateContext.Provider
      value={{
        bearerToken,
        setBearerToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
