import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/auth'
import { TOGGLE_DARK_MODE } from '../actions/darkMode'
const initialState = {
    darkMode: true
};

const dark = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case TOGGLE_DARK_MODE:
            return {
                darkMode: !state.darkMode
            }
        default:
            return state;
    }
};

export default dark;
