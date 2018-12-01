import React from 'react';

import FilterableList from '../components/FilterableList';

class AwesomeList extends React.Component {
  render () {
    const data = this.props.store.getState().data;
    
    return (
      <>
        <h1>Awesome List</h1>
        <FilterableList list={ data } store={ this.props.store } />
      </>
    );
  }
}

export default AwesomeList;