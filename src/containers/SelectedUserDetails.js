import { connect } from 'react-redux'
import UserDetails from '../components/user/UserDetails'

const getUser = (users, userId) => {
  return users.users.find(u => u.id === userId) || {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: getUser(state.users, ownProps.userId)
  }
}

const SelectedUserDetails = connect(
  mapStateToProps
)(UserDetails)

export default SelectedUserDetails
