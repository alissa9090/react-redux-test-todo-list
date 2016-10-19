import React from 'react';

const SubmitButton = ({visible, title}) => (
  <button
    type="submit"
    className={`btn btn-primary ${visible? "" : "hidden"}`}>
    {title}
  </button>
)

SubmitButton.propTypes = {
  title: React.PropTypes.string,
  visible: React.PropTypes.bool
}

SubmitButton.defaultProps = {
  title: 'Save',
  visible: true
}

export default SubmitButton
