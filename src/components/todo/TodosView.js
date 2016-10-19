import React from 'react';
import UserTodoList from '../../containers/UserTodoList';

const TodosView = () => (
  <div className="todo-list">

    <UserTodoList/>
  </div>
)

TodosView.propTypes = {
  todos: React.PropTypes.object.isRequired,
  handleTodoCreate: React.PropTypes.func.isRequired
}

export default TodosView
