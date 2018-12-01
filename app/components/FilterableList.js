import React from 'react';

import List from './List';
import SearchBar from './SearchBar';
import { changeSearchTerm } from '../actions';

import { connect } from '../../lib/react-redux';

class FilterableList extends React.Component {
  handleSearchTermChange = searchTerm => {
    this.props.store.dispatch(changeSearchTerm(searchTerm));
  }

  render () {
    const filteredList = this.props.appState.data.filter(listItem => listItem.name.toLowerCase().includes(this.props.appState.searchTerm.toLowerCase()));

    return (
      <React.Fragment>
        <SearchBar
          searchTerm={ this.props.appState.searchTerm }
          onSearchTermChange={ this.handleSearchTermChange }
        />
        <p className='result-count'>
          Treffer: { filteredList.length } / { this.props.appState.data.length }
        </p>
        <List list={ filteredList } />
      </React.Fragment>
    );

  }
}

const connectedFilterableList = connect(FilterableList);
export default connectedFilterableList;