import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userDetails } from './actions/userAction'
import dataBase from './firebaseConfig'
import AddUserForm from './addUserForm';
import { userSearch } from './actions/userSearchAction'

class App extends Component {
  componentDidMount() {
    dataBase.on('value', snap => {
      const users = snap.val()
      const details = [];
      for (let user in users) {
        details.push({
          name: users[user].name,
          phone: users[user].phone,
          userName: users[user].user_name,
          password: users[user].password,
          userType: users[user].user_type
        })
      }
      this.props.userInputUpdate(details)
    })
  }
  handleSearch = e => {
    const { userInfo: { details } } = this.props
    this.props.searchUser(details, e.target.value)
  }
  render() {
    const { userInfo: { details } } = this.props;
    const { filteredUsers } = this.props;
    const displayUsers = filteredUsers.length > 0 ? filteredUsers : details
    const List = displayUsers.length ? (
      displayUsers.map(user => {
        return (
          <div className='container' key={user.userName} style={{ padding: '10px' }}>
            <div className='card' style={{ padding: '10px' }}>
              <div className='card-header'>
                <h5>User Detail</h5>
              </div>
              <div style={{ padding: '1em' }}>
                <h6>Name      : {user.name}</h6>
                <h6>Phone  No : {user.phone}</h6>
                <h6>User name : {user.userName}</h6>
                <h6>Password  : {user.password}</h6>
                <h6>User Type : {user.userType}</h6>
              </div>
            </div>
          </div>
        )
      })
    ) : (
        <div>
          <span>Loading...</span>
        </div>
      )
    return (
      <div className='container'>
        <h1 className='text-center'>Welcome </h1>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <AddUserForm />
          </div>
          <form className='form-group col-md-6' style={{ marginTop: '2em' }}>
            <label htmlFor='search-user'>Search user</label>
            <input
              type='text'
              className='form-control'
              id="search-user"
              placeholder='Search user'
              onChange={this.handleSearch}
            />
            <div>
              {List}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    filteredUsers: state.filteredUsers
  }
}
const mapDispatchToProps = dispatch => {
  return {
    userInputUpdate: (info) => { dispatch(userDetails(info)) },
    searchUser: (allUser, searchText) => { dispatch(userSearch(allUser, searchText)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)