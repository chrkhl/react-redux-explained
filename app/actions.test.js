import createStore from '../test-utils/mock-store';
import * as actions from './actions';
import fetchMock from 'fetch-mock';

describe('actions', () => {
  
  describe('changeSearchTerm', () => {
    afterEach(() => {
      fetchMock.reset();
    })
    
    it('returns expected object', () => {
      const expected = { type: 'changeSearchTerm', searchTerm: 'foo' };
      
      const actual = actions.changeSearchTerm('foo');
      
      expect(actual).toEqual(expected);
    })
  });

  describe('receiveData', () => {
    it('returns expected object', done => {
      const store = createStore();
      const mockResponseData = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }];
      const expectedActions = [{ type: 'receiveData', data: mockResponseData }];
      
      fetchMock.getOnce('data.json', mockResponseData);
      
      expect.assertions(1);
      
      store.dispatch(actions.receiveData()).
        then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          
          done();
        });
    })
  });
});