// what is a middleware?
// store => next => action
// 
// Redux middleware is designed by creating functions
// that can be composed together
// before the main dispatch method is invoked

// applyMiddleware ... to store!

const applyMiddleware = (...middlewares) => createStore => (reducer, initialState) => {
  // create the store
  const store = createStore(reducer, initialState);
  // hold the original dispatch
  const origDispatch = store.dispatch;
}

export default applyMiddleware;
