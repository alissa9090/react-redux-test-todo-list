import fetch from "isomorphic-fetch"
import RestClient from "../api/RestClient"
import UserApi from "../api/UserApi"

let restClient = new RestClient("https://jsonplaceholder.typicode.com")
let userApi = new UserApi(restClient)

export function fetchUsers(callbackSuccess, callbackError){
  return function(dispatch) {
    dispatch({type: "FETCH_USERS"})
    userApi.fetchUsers()
    .then((response) => {
      dispatch({type: "FETCH_USERS_FULFILLED", payload: response})
      if(callbackSuccess){
        callbackSuccess(responce)
      }
    })
    .catch((err) => {
      dispatch({type: "FETCH_USERS_REJECTED", payload: err})
      if(callbackError){
        callbackError(err)
      }
    })
  }
}

export function addUser(user, callbackSuccess, callbackError) {
  return function(dispatch, getState) {
    dispatch({type: "ADD_USER", payload: user})
    const state = getState()
    const newId = getNewUserId(state.users.users)
    user.id = newId
    userApi.saveUser(user)
    .then((responce) => {

      dispatch({type: "ADD_USER_SUCCESS", payload: responce})
      if(callbackSuccess){
        callbackSuccess(responce)
      }
    })
    .catch((err) => {
      dispatch({type: "ADD_USER_REJECTED", payload: {err, user}})
      if(callbackError){
        callbackError(err)
      }
    })
  }
}

export function updateUser(user, callbackSuccess, callbackError) {
  return function(dispatch) {
    dispatch({type: "UPDATE_USER", payload: user})
    userApi.saveUser(user)
    .then((responce) => {
      dispatch({type: "UPDATE_USER_SUCCESS", payload: responce})
      if(callbackSuccess){
        callbackSuccess(responce)
      }
    })
    .catch((err) => {
      dispatch({type: "UPDATE_USER_REJECTED", payload: {err, user}})
      if(callbackError){
        callbackError(err)
      }
    })
  }
}

export function deleteUser(id, callbackSuccess, callbackError) {
  return function(dispatch) {
    dispatch({type: "DELETE_USER", payload: id})
    userApi.deleteUser(id)
    .then((responce) => {
      dispatch({type: "DELETE_USER_SUCCESS", payload: responce})
      if(callbackSuccess){
        callbackSuccess(responce)
      }
    })
    .catch((err) => {
      dispatch({type: "DELETE_USER_REJECTED", payload: err})
      if(callbackError){
        callbackError(err)
      }
    })
  }
}

function getNewUserId(users){
  const userMaxId = Math.max.apply(Math,users.map(function(user){return user.id}))
  return userMaxId + 1
}
