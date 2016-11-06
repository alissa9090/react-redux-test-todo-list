import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from "../actions/todoActions"
import { FormControl } from 'react-bootstrap';

class AddTodo extends React.Component {
  constructor(){
    super()
    this.submitForm = this.submitForm.bind(this)
  }
  submitForm(e){
    e.preventDefault()
    if(e.keyCode === 13){
      if (!e.target.value.trim()) {
        return
      }
      const newTodo = {completed: false, title: e.target.value, userId: this.props.userId}
      this.props.dispatch(addTodo(newTodo))
      e.target.value = ''
    }
  }
  render(){
    return (
        <FormControl
          type="text"
          placeholder="What needs to be done?"
          className="create-todo"
          onKeyUp={this.submitForm}/>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
