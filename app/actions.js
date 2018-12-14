
export const receiveData = () => dispatch => {
  return fetch('data.json')
    .then(response => response.json())
    .then(data => {  
      dispatch({
        type: 'receiveData',
        data
      });
    });
};

export const changeSearchTerm = searchTerm => ({
  type: 'changeSearchTerm',
  searchTerm
});

export const increaseUnicornCounter = () => ({
  type: 'increaseUnicornCounter'
});