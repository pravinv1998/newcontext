import { CREATE_TODO, DELETE_TODO } from "../context/actions";

export const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {};
    default:
      return state;
  }
};

export default reducer;
