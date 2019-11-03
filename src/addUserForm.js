import React, { Component } from 'react'
import dataBase from './firebaseConfig'

class addUserForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.name.value;
    const phone = this.phone.value;
    const user_name = this.userName.value;
    const password = this.password.value;
    const user_type = this.userType.value;
    const details = {
      name,
      phone,
      user_name,
      password,
      user_type
    }
    dataBase.push().set(details)
    this.name.value = '';
    this.phone.value = '';
    this.password.value = '';
    this.userName.value = '';
    this.userType.value = '';
    alert(`Added "${name}" details`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add user</h4>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            className='form-control'
            type='text'
            placeholder='Name'
            ref={input => this.name = input}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input
            className='form-control'
            type='number'
            placeholder='Phone'
            ref={input => this.phone = input}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='user-name'>User name</label>
          <input
            className='form-control'
            type='text'
            placeholder='User name'
            ref={input => this.userName = input}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            className='form-control'
            type='password'
            placeholder='Password'
            ref={input => this.password = input}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='user-type'>User type</label>
          <input
            className='form-control'
            type='text'
            placeholder='User type'
            ref={input => this.userType = input}
            required
          />
        </div>
        <div>
          <button type='submit' className="btn btn-info">Add</button>
        </div>
      </form>
    )
  }
}

export default addUserForm
