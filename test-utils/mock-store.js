const createStore = () => {
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
  
  return {
    dispatch,
    getActions,
    mockReset
  }
}

export default createStore;