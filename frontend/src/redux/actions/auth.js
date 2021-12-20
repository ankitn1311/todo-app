import axios from "axios";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const registerUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:5001/api/register", data);
      const result = res.data;
      console.log(result);
      // dispatch({
      //     type: REGISTER_SUCCESS,
      //     payload:
      // })
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:5001/api/login", data);
      const result = res.data;
      console.log(result);
      // dispatch({
      //     type: REGISTER_SUCCESS,
      //     payload:
      // })
    } catch (error) {
      console.log(error);
    }
  };
};
