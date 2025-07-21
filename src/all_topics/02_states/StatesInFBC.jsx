import { useState } from "react";

const StatesInFBC = () => {
  let [state, setState] = useState("Hello"); // [ud,func]

  const stateHandle = () => {
    setState("Byyeee");
  };

  return (
    <div>
      <h1>States In FBC {state}</h1>
      <button onClick={stateHandle}>click</button>
    </div>
  );
};

export default StatesInFBC;
