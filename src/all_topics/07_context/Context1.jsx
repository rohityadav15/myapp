import { createContext } from "react";
import ParentA from "./ParentA";

export const myContextStore = createContext();

export const Context1 = () => {
  let data = "hiii";
  return (
    <div>
      <myContextStore.Provider value={data}>
        <ParentA/>
        </myContextStore.Provider>
    </div>
  );
};
export default Context1;
