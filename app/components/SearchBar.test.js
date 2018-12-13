import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchBar from './SearchBar';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('SearchBar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SearchBar />);
  });
  
  it('renders search term passed via props', () => {
    const searchTerm = 'wisdom';
    const wrapper = shallow(<SearchBar searchTerm={ searchTerm } />);
    
    const input = wrapper.find('input[type="text"]');
    
    // access attribute via props().myProp
    expect(input.props().value).toBe(searchTerm);
    // or .props('myProp')
    expect(input.prop('value')).toBe(searchTerm);
  })
});
