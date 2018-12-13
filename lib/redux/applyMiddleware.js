// what is a middleware?
// store => next => action
// 
// Redux middleware is designed by creating functions
// that can be composed together
// before the main dispatch method is invoked

// applyMiddleware ... to store!

const applyMiddleware = (...middlewares) => createStore => (reducer, initialState) => {
  // ...
}

export default applyMiddleware;
