import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const FieldGroup = ({ id, label, value }) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl.Static>
      {value}
    </FormControl.Static>
  </FormGroup>
)

FieldGroup.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string
}

export default FieldGroup
