import { combineReducers } from "redux";
import auth from "./auth";
import dark from "./darkMode";
import todosReducer from "./todos";

export default combineReducers({ auth, dark, todos: todosReducer });
