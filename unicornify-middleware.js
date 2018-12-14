import { increaseUnicornCounter } from './app/actions';

const unicornWords = [
  'unicorn',
  'rainbow',
  'glitter',
  'fabulous'
];

const searchTermIsUnicornRelated = searchTerm => unicornWords.includes(searchTerm);

export default store => next => action => {
  if (action.type === 'changeSearchTerm' && searchTermIsUnicornRelated(action.searchTerm)) {
    store.dispatch(increaseUnicornCounter());
  }
  
  next(action);
}