import { useState } from "react";

const StatesInFBC = () => {
  let [state, setState] = useState("Hello World"); // ["Hello" , func]

  const handleState = () => {
    setState("Byee World")
  }

  return (
    <div>
      <h1>Learn States in FBC {state}</h1>

      <button onClick={handleState}>update state</button>
    </div>
  );
};
export default StatesInFBC;
