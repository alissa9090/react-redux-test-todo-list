import React from 'react'
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import { Field } from 'redux-form';

const FormField = ({mode, fieldName, type, label}) => {
  const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <input {...input} placeholder={label} type={type} className="form-control"/>
        {touched && error && <span>{error}</span>}
      </div>
  )
  let formControl = ""
  if(mode === 'view'){
    formControl = <FormControl.Static>
                    value
                  </FormControl.Static>
  } else {
    formControl = <Field
      name={fieldName}
      component={renderField} />
  }
  return (
    <FormGroup controlId={fieldName}>
      <Col componentClass={ControlLabel} sm={2}>
        {label}:
      </Col>
      <Col sm={10}>
        {formControl}
      </Col>
    </FormGroup>
  )
}

FormField.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  mode: React.PropTypes.oneOf(['create', 'edit', 'view']).isRequired
}

FormField.defaultProps = {
  type: 'text'
}

export default FormField
