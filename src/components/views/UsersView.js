import React from 'react';
import NewUserButton from '../user/NewUserButton';
import AllUsersTable from '../../containers/AllUsersTable';

const UsersView = () => (
  <div>
    <div className="page-header">
      <h1>Users</h1>
    </div>
    <NewUserButton/>
      <div className="main user-list">
        <AllUsersTable/>
      </div>
  </div>    
)

export default UsersView
