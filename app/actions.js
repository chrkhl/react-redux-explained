export const receiveData = data => ({
  type: 'receiveData',
  data
});

export const changeSearchTerm = searchTerm => ({
  type: 'changeSearchTerm',
  searchTerm
});