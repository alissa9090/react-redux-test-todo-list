import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import reducers from "./reducers"
import * as userActions from "./actions/userActions"
import * as todoActions from "./actions/todoActions"
import App from './components/App'

const middleware = applyMiddleware(thunk, logger())
const store = createStore(reducers, middleware)

ReactDOM.render(<App store={store}/>, document.getElementById('app'))

store.dispatch(userActions.fetchUsers())
store.dispatch(todoActions.fetchTodos())
