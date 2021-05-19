import React, { useContext, useState } from "react";
import { todoContext } from "../context/context";
import "./Todo.css";

const Todo = () => {
  const [todo, setTodo] = useState();

  // access context values anf function using useContext( paste here create context variable )
  const { createTodo, todos } = useContext(todoContext);

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id: Math.random(),
      text: todo,
      complete: false,
    };

    createTodo(newData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={onChangeHandler} />
        <button> ADD </button>
      </form>

      <p>
        {/* access all todos from useContext hook */}
        {todos.map((todo) => (
          <h3 key={todo.id}> {todo.text} </h3>
        ))}{" "}
      </p>
    </div>
  );
};

export default Todo;
