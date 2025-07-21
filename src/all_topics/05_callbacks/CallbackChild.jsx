const CallbackChild = (props) => {
  const handleBtn = () => {
    props.getData("Hello");
  };

  return (
    <div>
      <h1>Callback Child</h1>

      <button onClick={handleBtn}>send data</button>
      <button onClick={() => props.getData("Javascript")}>click</button>
    </div>
  );
};
export default CallbackChild;
