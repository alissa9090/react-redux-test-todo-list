import React from 'react';
import UserRow from './UserRow';

const UsersTable = ({users, handleUserRemove}) => (
  <table className="table table-hover">
    <tbody>
    {users.users.map(user => <UserRow
      key={user.id}
      userId={user.id}
      userPhotoUrl={user.photoUrl}
      userName={user.name}
      handleUserRemove={handleUserRemove}/>
    )}
    </tbody>
  </table>
)

UsersTable.propTypes = {
  users: React.PropTypes.object.isRequired
}

export default UsersTable
