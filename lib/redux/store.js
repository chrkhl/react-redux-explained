// redux store
// 1. holds the whole application state tree
// 2. only way to change state is to dispatch an action on it
//    -> actions only decribe what happened
// 3. state is changed only by reducers (reducing functions)
//    -> reducers describe how state is changed in response to actions
// 4. listeners can subscribe to state changes

const createStore = reducer => {
  let state = reducer(undefined, {});
  let listeners = [];
  
  const dispatch = action => {
    state = reducer(state, action);
    
    listeners.forEach(listener => listener());
  } 
  
  const subscribe = listener => {
    listeners.push(listener);
    
    const unsubscribeThisListener = () => {
      listeners = listeners.filter(l => l !== listener);
    }
    
    return unsubscribeThisListener;
  }
  
  const getState = () => state;
  
  return {
    dispatch,
    subscribe,
    getState
  }
}

export default createStore;
