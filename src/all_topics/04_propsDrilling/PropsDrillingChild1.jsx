import PropsDrillingChild2 from "./PropsDrillingChild2";

const PropsDrillingChild1 = (props) => {
  console.log(props); // {str:"Hello React" , arr:[], obj:{}}
  return (
    <div>
      <h1>I am Child 1</h1>

      <PropsDrillingChild2 str={props.str} arr={props.arr} obj={props.obj} />
    </div>
  );
};
export default PropsDrillingChild1;
