const PropChild2 = (x) => {
    console.log(x);// {propdata: {data:"Hello",obj:{},arr:[]}}

    let {data,obj:{id,ename},arr} = x.propdata
    
  return (
    <div>
      <h1>I am Prop Child 2</h1>
      <h1>{data} {ename} your salary is {arr[2]} LPA.</h1>
    </div>
  );
};
export default PropChild2;
