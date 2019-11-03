export const userSearch = (allUsers, searchText) => dispatch => {
  dispatch({
    type: 'USER_SEARCH',
    payload: {
      allUsers: allUsers,
      searchText: searchText
    }
  })
}