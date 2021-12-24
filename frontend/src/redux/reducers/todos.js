
import { CREATE_TODO, GET_TODOS, DELETE_TODO, UPDATE_TODO, SET_CURRENT, CLEAR_CURRENT } from "../actions/todos";

const initialState = {
  todos: [],
  currentTodo: null,
};

const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload
      }

    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== payload)
      }

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => todo._id === payload._id ? payload : todo)
      }

    case SET_CURRENT:
      return {
        ...state,
        currentTodo: payload
      }

    case CLEAR_CURRENT:
      return {
        ...state,
        currentTodo: null
      }
    default:
      return state;
  }
};

export default todosReducer;
