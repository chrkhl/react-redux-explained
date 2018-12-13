import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SearchBar from './SearchBar';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('SearchBar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SearchBar />);
  });
});
