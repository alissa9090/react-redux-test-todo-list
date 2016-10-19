import React from 'react'
import { reduxForm } from 'redux-form';
import { Form } from 'react-bootstrap'
import FormField from '../utility/FormField';
import SubmitButton from '../utility/SubmitButton'
import GoBackButton from '../utility/GoBackButton'
import {withRouter} from 'react-router';
import validationRules from '../../data/userValidationRules';

class UserForm extends React.Component {
  titles = {
    create: "Create User",
    edit: "User Details",
    view: "User Details"
  }
  constructor(){
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(user){
    this.props.onSubmit(user, this.props.router.goBack)
  }
  render(){
    const { handleSubmit, pristine, reset, submitting, user, mode } = this.props
    return (
      <div>
        <Form
          horizontal
          className="user-form main"
          onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <legend>{this.titles[mode]}</legend>
            <FormField fieldName="name" mode={mode} label="Name"/>
            <FormField fieldName="username" mode={mode} label="Username"/>
            <FormField fieldName="email" type="email" mode={mode} label="Email"/>
            <FormField fieldName="phone" mode={mode} label="Phone"/>
            <FormField fieldName="website" mode={mode} label="Website"/>
            <FormField fieldName="photoUrl" mode={mode} label="Photo URL"/>
            <fieldset>
              <legend>Address</legend>
              <FormField fieldName="address.street" mode={mode} label="Street"/>
              <FormField fieldName="address.suite" mode={mode} label="Suite"/>
              <FormField fieldName="address.city" mode={mode} label="City"/>
              <FormField fieldName="address.zipcode" mode={mode} label="Zipcode"/>
            </fieldset>
            <fieldset>
              <legend>Company</legend>
              <FormField fieldName="company.name" mode={mode} label="Name"/>
            </fieldset>
          </fieldset>
          <SubmitButton visible={mode !== "view"} disabled={submitting}/>
          <GoBackButton title={mode === "view" ? "Go Back" : "Cancel"} disabled={pristine || submitting}/>
        </Form>
      </div>
    )
  }
}

UserForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

UserForm = reduxForm({
  form: 'user',
  validate: validationRules,
  enableReinitialize: true,
  persistentSubmitErrors: false,
  onSubmitFail: (err) => {console.log(err)}
})(UserForm);

export default withRouter(UserForm)
