const initState = {};

export const userSearchReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_SEARCH':
      const { searchText, allUsers } = action.payload
      const filteredResult = allUsers.filter(user => {
        const name = user.name.toLowerCase();
        const phone = user.phone
        const filter = searchText.toLowerCase();
        return name.includes(filter) || phone.includes(filter);
      })
      return filteredResult
    default:
      return state;
  }
}