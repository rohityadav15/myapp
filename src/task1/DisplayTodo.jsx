import React from "react";

const DisplayTodo = (props) => {
  let { allTodos, handleDelete, handleUpdate } = props;

  return (
    <div>
      {allTodos.lenght === 0 ? (
        <h1>Todo not Available</h1>
      ) : (
        allTodos.map((todo) => {
          return (
            <div key={todo.id}>
              <h3>{todo.text}</h3>
              <button onClick={()=> handleUpdate(todo)}>Update</button>
              <button onClick={() => handleDelete(todo)}>Delete</button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayTodo;

// in place update, id change nii ho in todo List , H.W.
