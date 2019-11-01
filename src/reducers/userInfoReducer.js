const initState = {};

export const userInfoReducer =(state= initState, action) => {
  switch(action.type) {
    case 'USER_DETAILS':
      return action.info
    default:
      return state;
  }
}