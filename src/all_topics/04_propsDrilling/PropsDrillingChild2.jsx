const PropsDrillingChild2 = (props) => {
  console.log(props); // {str:"Hello React" , arr:[], obj:{}}

  return (
    <div>
      <h1>I am Child 2 {props.str} {props.arr[1]} {props.obj.ename}</h1>
    </div>
  );
};
export default PropsDrillingChild2;
