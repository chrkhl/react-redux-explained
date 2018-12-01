// redux reducer
// (state, action) => { ... }
// - gets state and action
//    - action has always a type property
//    - action may have optional payload properties
// - returns copy of changed state

const initialState = {};

const awesomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'somethingHappens':
      return {
        ...state,
        awesomeProperty: action.value
      }
    case 'otherThingHappens':
      return {
        ...state,
        awesomeProperty: action.newValue;
      }
    default:
      return state;
  }
}

export default awesomeReducer;