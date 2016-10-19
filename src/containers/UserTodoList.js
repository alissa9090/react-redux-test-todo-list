import { connect } from 'react-redux'
import { deleteTodo, updateTodo } from "../actions/todoActions"
import TodoList from '../components/todo/TodoList'

const getUserTodos = (todos, userId) => {
  return todos.todos.filter(t => t.userId === userId)
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getUserTodos(state.todos, ownProps.userId)
  }
}

const mapDispatchToProps =  ({
  handleTodoRemove: deleteTodo,
  handleTodoToogle: (todo)=>{
    return updateTodo({...todo, completed: !todo.completed})
  }
})

const UserTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default UserTodoList
