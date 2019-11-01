import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userDetails } from './actions/userAction'
import { firebaseConfig } from './firebaseConfig'
import firebase from 'firebase'

class App extends Component {
    constructor(props) {
      super(props)
      this.app = firebase.initializeApp(firebaseConfig);
      this.database = this.app.database().ref('name')
    }
    componentDidMount(){
      this.database.on('value', snap => {
        console.log('snap', snap.val())
      })
      console.log('data')
    }
    
    render() {
      console.log('data', this.database)
      return (
        <div>
          welcome
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userDetailUpdate: (info) => { dispatch(userDetails(info))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)