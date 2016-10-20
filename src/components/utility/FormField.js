import React from 'react'
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import { Field } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched && error && <span className="validation-error">{error}</span>}
    </div>
)

const renderReadonlyField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input {...input} readOnly="readonly" placeholder={label} type={type} className="form-control readonly"/>
      {touched && error && <span className="validation-error">{error}</span>}
    </div>
)

const FormField = ({mode, fieldName, type, label}) => (
  <FormGroup controlId={fieldName}>
    <Col componentClass={ControlLabel} sm={2}>
      {label}:
    </Col>
    <Col sm={10}>
      <Field
        type={type}
        name={fieldName}
        component={mode === 'view' ? renderReadonlyField : renderField} />
    </Col>
  </FormGroup>
)

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
