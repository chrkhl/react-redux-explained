// It can simply be thought of as a function waiting to be called upon to do its work.
// The term thunk originated as a jocular derivative of "think"

const thunkMiddleware = store => next => action => {
  // delaying actions of type function enables support for async actions!
  typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action);
};

export default thunkMiddleware