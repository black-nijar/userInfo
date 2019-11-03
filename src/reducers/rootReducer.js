import { combineReducers } from 'redux';
import { userInfoReducer } from './userInfoReducer';
import { userSearchReducer } from './userSearchReducer'

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  filteredUsers: userSearchReducer
})

export default rootReducer;