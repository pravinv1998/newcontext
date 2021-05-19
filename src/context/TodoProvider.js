import React, { useReducer } from "react";
import { todoContext } from "./context";
import reducer, { initialState } from "./reducer";
import { CREATE_TODO, DELETE_TODO } from "./actions";

const TodoProvider = ({ children }) => {
  // useReducer get return value of reducer with initialState and extrat it into state
  // state use as variable to access return value from reducer
  // dispatch trigger payload( todo(state) with action type )
  const [state, dispatch] = useReducer(reducer, initialState);

  // create todo
  const createTodo = (todo) => {
    dispatch({
      type: CREATE_TODO,
      payload: todo,
    });
  };

  // delete Todo
  const deleteTodo = (todoID) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };

  return (
    <todoContext.Provider
      value={{ todos: state.todos, createTodo, deleteTodo }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
