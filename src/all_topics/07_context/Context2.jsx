import React from "react";
import { createContext } from "react";
export const GlobalContext = createContext();

const Context2 = (props) => {
  return (
    <GlobalContext.Provider value={"hii"}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Context2;
