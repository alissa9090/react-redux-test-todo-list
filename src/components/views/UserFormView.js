import React from 'react'
import UserForm from '../../containers/UserForm'

class UserFormView extends React.Component {
  render(){
    const {mode} = this.props.params
    const userId = parseInt(this.props.params.userId)
    return(
      <div className="update-user">
        <div className="page-header">
          <h1>User form</h1>
        </div>
        <UserForm userId={userId} mode={mode}/>
      </div>
    )
  }
}

export default UserFormView
