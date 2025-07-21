import PropChild1 from "./PropChild1";
import PropChild2 from "./PropChild2";

const PropParent1 = () => {
  let data = "hello";

  let obj = {
    id: 1,
    ename: "Raj",
  };

  let arr = [10,20,30]

  return (
    <div>
      <h1>PropParent1</h1>

    {/* Sending Multiple Props */}
      <PropChild1 prop1={data} prop2={obj}  prop3={arr}/>

    {/* Sending Single Prop with Mutiple Values */}
      <PropChild2 propdata = {{data,obj,arr}}/>

    </div>
  );
};

export default PropParent1;
