import React from 'react'
import SelectedUserDetails from '../../containers/SelectedUserDetails'
import UserTodoList from '../../containers/UserTodoList'
import GoBackButton from '../utility/GoBackButton'
import AddTodo from '../../containers/AddTodo'
import { Col } from 'react-bootstrap';

const UserTodosView = ({params}) => {
  const userId = parseInt(params.userId)
  return(
    <div className="user-todos">
      <div className="page-header">
        <h1>Todos</h1>
      </div>
      <Col xs={3} md={2}>
        <SelectedUserDetails userId={userId}/>
      </Col>
      <Col xs={12} md={8}>
        <div className="main">
          <AddTodo userId={userId}/>
          <UserTodoList userId={userId}/>
        </div>
        <GoBackButton/>
      </Col>
    </div>
  )
}

export default UserTodosView
