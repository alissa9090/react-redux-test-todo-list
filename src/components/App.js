import React from 'react'
import Site from './Site'
import {Router, Route, IndexRoute, hashHistory} from "react-router"
import UsersView from './views/UsersView'
import UserTodosView from './views/UserTodosView'
import UserFormView from './views/UserFormView'
import { Provider } from 'react-redux'

const App = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Site}>
        <IndexRoute component={UsersView}/>
        <Route path="userTodos/:userId" component={UserTodosView} />
        <Route path="userForm/:mode(/:userId)" component={UserFormView} />
      </Route>
    </Router>
  </Provider>
)

App.propTypes = {
  store: React.PropTypes.object.isRequired,
}

export default App
