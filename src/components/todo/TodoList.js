import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, handleTodoRemove, handleTodoToogle}) => (
  <div className="todo-list">
    {todos.map(todo => <Todo
      handleTodoRemove={()=>handleTodoRemove(todo.id)}
      handleTodoToogle={()=>handleTodoToogle(todo)}
      key={todo.id}
      todo={todo} /> )}
  </div>
)

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  handleTodoRemove: React.PropTypes.func.isRequired,
  handleTodoToogle: React.PropTypes.func.isRequired,
}

export default TodoList
