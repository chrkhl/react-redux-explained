
export const receiveData = data => dispatch => {
  dispatch({
    type: 'receiveData',
    data
  });
};

export const changeSearchTerm = searchTerm => ({
  type: 'changeSearchTerm',
  searchTerm
});