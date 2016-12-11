import fetch from "isomorphic-fetch"
import RestClient from "../api/RestClient"
import TodoApi from "../api/TodoApi"

let restClient = new RestClient("https://jsonplaceholder.typicode.com")
let todoApi = new TodoApi(restClient)

export function fetchTodos(){
  return function(dispatch) {
    dispatch({type: "FETCH_TODOS"})
    todoApi.fetchTodos()
    .then((response) => {
      dispatch({type: "FETCH_TODOS_FULFILLED", payload: response})
    })
    .catch((err) => {
      dispatch({type: "FETCH_TODOS_REJECTED", payload: err})
    })
  }
}

export function addTodoSync(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

export function addTodo(todo) {
  return function(dispatch, getState) {
    const state = getState()
    const newId = getNewTodoId(state.todos.todos)
    todo.id = newId
    dispatch({type: "ADD_TODO", payload: todo})
    todoApi.saveTodo(todo)
    .catch((err) => {
      dispatch({type: "ADD_TODO_REJECTED", payload: {err, user}})
    })
  }
}

export function updateTodo(todo) {
  return function(dispatch) {
    dispatch({type: "UPDATE_TODO", payload: todo})
    todoApi.saveTodo(todo)
    .catch((err) => {
      dispatch({type: "UPDATE_TODO_REJECTED", payload: {err, user}})
    })
  }
}

export function deleteTodo(id) {
  return function(dispatch) {
    dispatch({type: "DELETE_TODO", payload: id})
    todoApi.deleteTodo(id)
    .catch((err) => {
      dispatch({type: "DELETE_TODO_REJECTED", payload: err})
    })
  }
}

function getNewTodoId(todos){
  const todoMaxId = Math.max.apply(Math,todos.map(function(todo){return todo.id}))
  return todoMaxId + 1
}
