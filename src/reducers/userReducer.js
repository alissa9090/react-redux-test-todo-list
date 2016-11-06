export default function reducer(state={
  users: [],
  fetching: false,
  fetched: false,
  userUpdating: false,
  error: null
}, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return {...state, fetching: true}
    case "FETCH_USERS_REJECTED":
      return {...state, fetching: false, error: action.payload}
    case "FETCH_USERS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload.map(user => {
          return {photoUrl: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png", ...user}
        })
      }
    case "ADD_USER":
      return {
        ...state,
        userUpdating: true
      }
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        userUpdating: false,
        users: [...state.users,
          {photoUrl: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png", ...action.payload}]
      }
    case "ADD_USER_REJECTED":
      return {
        ...state,
        userUpdating: false,
        error: action.payload
      }
    case "UPDATE_USER":
      return {
        ...state,
        userUpdating: true
      }
    case "UPDATE_USER_SUCCESS":
      {
        const {id} = action.payload
        const newUsers = [...state.users]
        const userToUpdate = newUsers.findIndex(user => user.id === id)
        newUsers[userToUpdate] = action.payload

        return {
          ...state,
          userUpdating: false,
          users: newUsers
        }
      }
    case "UPDATE_USER_REJECTED":
      return {
        ...state,
        userUpdating: false,
        error: action.payload
      }
    case "DELETE_USER":
      return {
        ...state,
        userUpdating: true
      }
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        userUpdating: false,
        users: state.users.filter(user=>user.id !== action.payload)
      }
    case "DELETE_USER_REJECTED":
      return {
        ...state,
        userUpdating: false,
        error: action.payload
      }
  }
  return state
}
