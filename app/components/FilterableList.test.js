import Adapter from 'enzyme-adapter-react-16';
import createStore from '../../test-utils/mock-store';
import { Provider } from '../../lib/react-redux';
import React from 'react';
import FilterableList from './FilterableList.js';
import { configure, mount } from 'enzyme';
import { receiveData, changeSearchTerm } from '../actions';

configure({ adapter: new Adapter() });

jest.mock('../actions', () => ({
  receiveData: jest.fn(),
  changeSearchTerm: jest.fn()
}));

describe('FilterableList', () => {
  afterEach(() => {
    receiveData.mockReset();
    changeSearchTerm.mockReset();
  });
  
  it('calls receiveData action on mounting when no data in app state', () => {
    const state = { searchTerm: '', data: [] };
    const store = createStore(state);
    
    mount(
      <Provider store={ store }>
        <FilterableList />
      </Provider>
    );
    
    expect(receiveData).toHaveBeenCalled();
  });
  
  it('does not call receiveData action on mounting when data already in app state', () => {
    const state = { searchTerm: '', data: [{ id: 1, name: 'fizzbuzz' }] };
    const store = createStore(state);
    
    mount(
      <Provider store={ store }>
        <FilterableList />
      </Provider>
    );
    
    expect(receiveData).not.toHaveBeenCalled();
  });
  
  it('renders SearchBar with search term from app state', () => {
    const state = { searchTerm: 'foobar', data: [] };
    const store = createStore(state);
    
    const wrapper = mount(
      <Provider store={ store }>
        <FilterableList />
      </Provider>
    )
    
    const searchBar = wrapper.find('SearchBar');
    expect(searchBar.prop('searchTerm')).toEqual(state.searchTerm);
  })
  
  it('renders List with data filtered by search term', () => {
    const state = { searchTerm: 'b', data: [ { id: 1, name: 'foo' }, { id: 2, name: 'bar' },  { id: 3, name: 'fizz' }, { id: 4, name: 'buzz' }] };
    const store = createStore(state);
    const expectedFilteredList = [ { id: 2, name: 'bar' },  { id: 4, name: 'buzz' }]
    
    const wrapper = mount(
      <Provider store={ store }>
        <FilterableList />
      </Provider>
    )
    
    const list = wrapper.find('List');
    expect(list.prop('list')).toEqual(expectedFilteredList);
  })
  
  it('calls changeSearchTerm action when changing search term in SearchBar', () => {
    const state = { searchTerm: 'foobar', data: [] };
    const store = createStore(state);
    
    const wrapper = mount(
      <Provider store={ store }>
        <FilterableList />
      </Provider>
    )
    
    wrapper.
      find('SearchBar').
      find('input[type="text"]').
      simulate('change', { target: { value: 'fizzbuzz' }} );
      
    expect(changeSearchTerm).toHaveBeenCalledWith('fizzbuzz');
  });
});