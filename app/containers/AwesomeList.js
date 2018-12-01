import React from 'react';

import FilterableList from '../components/FilterableList';

class AwesomeList extends React.Component {
  render () {    
    return (
      <>
        <h1>Awesome List</h1>
        <FilterableList store={ this.props.store } />
      </>
    );
  }
}

export default AwesomeList;