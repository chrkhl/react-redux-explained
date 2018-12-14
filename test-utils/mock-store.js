const createStore = state => {
  let dispatchedActions = [];
  
  const registerAction = action => {
    dispatchedActions.push(action);
  }
  
  const dispatch = action => {
    if (typeof action === 'function') {
      return action(registerAction);
    }
    registerAction(action);
  } 
  
  const getActions = () => dispatchedActions;
  
  const mockReset = () => {
    dispatchedActions = [];
  }

  const getState = () => state;
  
  const subscribe = () => {};
  
  return {
    dispatch,
    getActions,
    mockReset,
    getState,
    subscribe
  }
}

export default createStore;