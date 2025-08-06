import React from "react";
import ChildA1 from "./ChildA1";

const ChildrenProps = () => {
  return (
    <div>
      <h1>Learn Children-Props</h1>
        <ChildA1>
            <h2>Send me to child Component</h2>
            <h3>Hello React</h3>
        </ChildA1>
    </div>
  );
};

export default ChildrenProps;
