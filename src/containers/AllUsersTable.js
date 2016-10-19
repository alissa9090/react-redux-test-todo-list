import { connect } from 'react-redux'
import { fetchUsers, deleteUser } from "../actions/userActions"
import UsersTable from '../components/user/UsersTable'

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps =  ({
  handleUserRemove: deleteUser
})

const AllUsersTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersTable)

export default AllUsersTable
