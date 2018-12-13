export default store => next => action => {
  console.log(`LOGGER-MIDDLEWARE: Action ${action.type} dispatched!`, action);
  next(action);
}