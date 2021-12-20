import {combineReducers} from 'redux'
import auth  from './auth'
import dark from './darkMode'
export default combineReducers({auth, dark})