import {combineReducers} from "redux"
import users from "./userReducer"
import todos from "./todoReducer"
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  users,
  todos,
  form: formReducer
})
