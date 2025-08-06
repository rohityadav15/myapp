import React, { useState } from "react";
import CreateTodo from "./CreateTodo ";
import DisplayTodo from "./DisplayTodo";
import style from "./TodoWrapper.module.css";

const TodoWraper = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      text: todo,
    };
    setAllTodos([...allTodos, newTodo]);
    setTodo("");
  };
  const handleDelete = (todo) => {
    console.log("Delete...", todo);
    let filteredTodo = allTodos.filter((ele) => {
      return ele.id !== todo.id;
    });
    setAllTodos(filteredTodo);
  };
  const handleUpdate = (todo) => {
    let todoBeUpdate= allTodos.find((ele)=>{
      return ele.id === todo.id
    })
    setTodo(todoBeUpdate.text)
    handleDelete(todo)
  };

  return (
    <div id={style.TodoWraper}>
      <CreateTodo
        todo={todo}
        handleTodo={handleTodo}
        handleSubmit={handleSubmit}
      />

      <DisplayTodo allTodos={allTodos} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  );
};

export default TodoWraper;
