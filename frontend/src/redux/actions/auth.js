import axios from "axios";
export const LOADING = "LOADING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const FETCH_USER_DATA = "FETCH_USER_DATA";

export const registerUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/register", data);
      const result = res.data;
      console.log(result);
      if (result.success) {
        dispatch({
          type: REGISTER_SUCCESS,
        });
        return true;
      } else {
        dispatch({
          type: REGISTER_FAIL,
        });
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/login", data);

      const result = res.data;
      console.log({ result, res });

      if (result.success) {
        await dispatch({
          type: LOGIN_SUCCESS,
          payload: result.token,
        });
        await dispatch(fetchUser());
        return true;
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: result,
        });
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("/api/my-details", {
        headers: {
          "x-auth-token": token,
        },
      });
      const result = res.data;
      console.log(result);

      if (result.success) {
        dispatch({
          type: FETCH_USER_DATA,
          payload: { data: result.data, token },
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: result,
        });
      }
      dispatch({ type: LOADING, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: LOADING, payload: false });
    }
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
  };
};
