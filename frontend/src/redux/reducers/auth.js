import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_USER_DATA,
  LOGOUT,
} from "../actions/auth";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
      };
    case REGISTER_FAIL:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    case FETCH_USER_DATA:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default auth;
