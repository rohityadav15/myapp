import React, { useState } from "react";
import LifeCycleCBC from "./LifeCycleCBC";
import LifeCycleInFBC from "./LifeCycleInFBC";

const LifeCyclePerent = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Click</button>
      {/* {toggle ? <LifeCycleCBC /> : <h4>No Component</h4>} */}
      {toggle ? <LifeCycleInFBC /> : <h4>No Component</h4>}
    </div>
  );
};

export default LifeCyclePerent;
