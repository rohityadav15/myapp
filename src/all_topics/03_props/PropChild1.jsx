import React from "react";

const PropChild1 = (x) => {
  console.log(x);
  // {prop1:"Hello" , prop2:{} , prop3:[10,20,30]}

  return (
    <div>
      <h1>PropChild1 {x.prop1}</h1>
      <h1>{x.prop2.ename}</h1>
      <h1>{x.prop3[2]}</h1>
    </div>
  );
};

export default PropChild1;
