import React from "react";

const CreateTodo = (props) => {
    let {todo, handleTodo, handleSubmit}=props

  return (
    <div>
      <h1>Todo app</h1>
      <form onSubmit={handleSubmit}>
        <input type="tex" value={todo} onChange={handleTodo}/>
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default CreateTodo;
