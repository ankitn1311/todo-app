import axios from "axios";
export const GET_TODOS = "GET_TODOS";
export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_CURRENT = "SET_CURRENT";
export const CLEAR_CURRENT = "CLEAR_CURRENT";

export const getTodos = (page) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`/api/todos?page=${page}`, {
        headers: {
          "x-auth-token": token,
        },
      });
      console.log(res);
      const todos = res.data.data;
      dispatch({
        type: GET_TODOS,
        payload: todos,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createTodo = (data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post("/api/todos", data, {
        headers: {
          "x-auth-token": token,
        },
      });
      console.log(res);
      const todo = res.data.data;
      dispatch({
        type: CREATE_TODO,
        payload: todo,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTodo = (data) => {
  return async (dispatch) => {
    console.log("Deleting todo");
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`/api/todos/${data}`, {
        headers: {
          "x-auth-token": token,
        },
      });
      dispatch({
        type: DELETE_TODO,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTodo = (data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.patch(
        `/api/todos/${data._id}`,
        { title: data.title, description: data.description },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      const updatedTodo = res.data.data;
      dispatch({
        type: UPDATE_TODO,
        payload: updatedTodo,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCurrentTodo = (data) => {
  return {
    type: SET_CURRENT,
    payload: data,
  };
};

export const clearCurrentTodo = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
