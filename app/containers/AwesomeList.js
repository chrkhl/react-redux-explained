import React from 'react';

import FilterableList from '../components/FilterableList';

class AwesomeList extends React.Component {
  state = {
    data: [{
      "id": "4711",
      "name": "Max Mustermann"
    },{
      "id": "4712",
      "name": "Sabine Mustermann"
    },{
      "id": "4713",
      "name": "John Doe"
    },{
      "id": "4714",
      "name": "Jane Doe"
    }]
  };

  render () {
    return <FilterableList list={ this.state.data } />;
  }
}

export default AwesomeList;