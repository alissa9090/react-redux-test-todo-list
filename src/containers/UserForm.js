import { connect } from 'react-redux'
import UserFormComponent from '../components/user/UserForm'
import { addUser, updateUser } from "../actions/userActions"

const getUser = (users, userId) => {
  return users.users.find(u => u.id === userId) || {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    initialValues: getUser(state.users, ownProps.userId)
  }
}

const mapDispatchToProps = {
  onSubmit: (user, callbackSuccess, callbackError) => {
    if(user.id){
      return updateUser(user, callbackSuccess, callbackError)
    } else {
      return addUser(user, callbackSuccess, callbackError)
    }
  }
}

const UserForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFormComponent)

export default UserForm
