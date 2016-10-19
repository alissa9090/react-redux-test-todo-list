import React from 'react';
import FieldGroup from '../utility/FieldGroup'

const UserDetails = ({user}) => {
  const address = user.address || {}
  const company = user.company || {}
  return (
    <div>
      <div className="user-details" key={user.id}>
        <img height="128" src={user.photoUrl}/>
        <form>
          <FieldGroup id="name" label="Name:" value={user.name}/>
          <FieldGroup id="username" label="Username:" value={user.username}/>
          <FieldGroup id="email" label="Email:" value={user.email}/>
          <FieldGroup id="address" label="Address:" value={`${address.street} ${address.suite}, ${address.zipcode} ${address.city}`}/>
          <FieldGroup id="phone" label="Phone:" value={user.phone}/>
          <FieldGroup id="website" label="Website:" value={user.website}/>
          <FieldGroup id="company" label="Company:" value={company.name}/>
        </form>
      </div>
    </div>
  )
}

UserDetails.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default UserDetails
