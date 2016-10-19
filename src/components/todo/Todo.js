import React from 'react';
import { Checkbox } from 'react-bootstrap';

const Todo = ({todo, handleTodoRemove, handleTodoToogle}) => (
  <div className="todo">
    <Checkbox
      checked={todo.completed}
      onChange={handleTodoToogle}
      className="todo-check-box">
      {todo.title}
    </Checkbox>
    <span title="Delete" className="glyphicon glyphicon-trash remove-todo" onClick={handleTodoRemove}></span>
  </div>
)

Todo.propTypes = {
  todo: React.PropTypes.object.isRequired,
  handleTodoRemove: React.PropTypes.func.isRequired,
  handleTodoToogle: React.PropTypes.func.isRequired
}

export default Todo
