import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import reducer from "./reducers"
import * as userActions from "./actions/userActions"
import * as todoActions from "./actions/todoActions"
import App from './components/App'
import '../css/bootstrap.min.css'
import '../css/bootstrap.yeti.min.css'
import '../css/style.css'

const middleware = applyMiddleware(thunk, logger())
const store = createStore(reducer, middleware)

ReactDOM.render(<App store={store}/>, document.getElementById('app'))

store.dispatch(userActions.fetchUsers())
store.dispatch(todoActions.fetchTodos())
