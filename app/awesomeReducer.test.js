import reducer from './awesomeReducer';

describe('awesomeReducer', () => {
  it('has the expected initial state', () => {
    const expectedState = { data: [], searchTerm: '', unicornCounter: 0 };

    const actualState = reducer(undefined, {});
    
    expect(actualState).toEqual(expectedState);
  });

  it('handles the receiveData action', () => {
    const initialState = { data: [], searchTerm: '', unicornCounter: 0 };
    const expectedState = {
      data: [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' }
      ],
      searchTerm: '',
      unicornCounter: 0
    };
    const action = {
      type: 'receiveData',
      data: [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' }
      ]
    };
    
    const actualState = reducer(initialState, action);
    
    expect(actualState).toEqual(expectedState);
  });

  it('handles the changeSearchTerm action', () => {
    const initialState = { data: [], searchTerm: '', unicornCounter: 0 };
    const expectedState = {
      data: [],
      searchTerm: 'foo',
      unicornCounter: 0
    };
    const action = {
      type: 'changeSearchTerm',
      searchTerm: 'foo'
    };
    
    const actualState = reducer(initialState, action);
    
    expect(actualState).toEqual(expectedState);
  });
});