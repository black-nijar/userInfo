const initState = {
  details: {}
}

export const userInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_DETAILS':
      return {
        ...state,
        details: action.info
      }
    default:
      return state;
  }
}