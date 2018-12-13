import compose from './compose';

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

  const middlewareAPI = {
    getState: store.getState,
    dispatch: action => origDispatch(action)
  };

  // build the middleware chain
  // -> inject a "store" (getState and original dispatch) into each middleware
  const chain = middlewares.
    map(middleware => middleware(middlewareAPI));

  const dispatchWithMiddlewares = compose(...chain, origDispatch);

  // return store-like object with the new middlewared dispatch
  return {
   ...store,
   dispatch: dispatchWithMiddlewares
  };
}

export default applyMiddleware;
