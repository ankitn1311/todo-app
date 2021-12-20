import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/action-types';

const initialState = {
    isAuthenticated: false,
    user: null
}

const auth = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state
            }

        case REGISTER_FAIL:
            return {
                ...state
            }

        case LOGIN_SUCCESS:
            return {
                ...state
            }

        case LOGIN_FAIL:
            return {
                ...state
            }

        default:
            return state;
    }
}

export default auth;