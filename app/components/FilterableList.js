import React from 'react';

import List from './List';
import SearchBar from './SearchBar';

class FilterableList extends React.Component {
  state = {
    searchTerm: ''
  };

  componentDidMount() {
    this.unsubscribeFromStore = this.props.store.subscribe(this.deriveStateFromStore)
    this.deriveStateFromStore();
  }

  componentWillUnmount() {
    this.unsubscribeFromStore();
  }

  deriveStateFromStore = () => {
    const searchTerm = this.props.store.getState().searchTerm;
    this.setState({ searchTerm });
  }

  handleSearchTermChange = searchTerm => {
    this.props.store.dispatch({
      type: 'changeSearchTerm',
      searchTerm
    });
  }

  render () {
    const filteredList = this.state.searchTerm ?
      this.props.list.filter(listItem => listItem.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) :
      this.props.list;

    return (
      <React.Fragment>
        <SearchBar
          searchTerm={ this.state.searchTerm }
          onSearchTermChange={ this.handleSearchTermChange }
        />
        <p className='result-count'>
          Treffer: { filteredList.length } / { this.props.list.length }
        </p>
        <List list={ filteredList } />
      </React.Fragment>
    );

  }
}

export default FilterableList;