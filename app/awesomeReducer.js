// redux reducer
// (state, action) => { ... }
// - gets state and action
//    - action has always a type property
//    - action may have optional payload properties
// - returns copy of changed state

const initialState = {
  data: [],
  searchTerm: ''
};

const awesomeReducer = (state = initialState, action) => {
  console.log('handling action', JSON.stringify(action));
  
  switch (action.type) {
    case 'receiveData':
      return {
        ...state,
        data: action.data
      };
    case 'changeSearchTerm':
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    default:
      return state;
  }
}

export default awesomeReducer;