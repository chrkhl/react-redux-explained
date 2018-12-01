import React from 'react';

import List from './List';
import SearchBar from './SearchBar';
import { changeSearchTerm } from '../actions';

import { connect } from '../../lib/react-redux';

class FilterableList extends React.Component {
  handleSearchTermChange = searchTerm => {
    this.props.changeSearchTerm(searchTerm);
  }

  render () {
    return (
      <React.Fragment>
        <SearchBar
          searchTerm={ this.props.searchTerm }
          onSearchTermChange={ this.handleSearchTermChange }
        />
        <p className='result-count'>
          Treffer: { this.props.filteredList.length } / { this.props.total }
        </p>
        <List list={ this.props.filteredList } />
      </React.Fragment>
    );

  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  filteredList: state.data.filter(listItem => listItem.name.toLowerCase().includes(state.searchTerm.toLowerCase())),
  total: state.data.length
});

const actions = { changeSearchTerm };

const connectedFilterableList = connect(mapStateToProps, actions)(FilterableList);
export default connectedFilterableList;