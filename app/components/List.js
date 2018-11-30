import React from 'react';

import ListItem from './ListItem';

const List = ({ list }) => (
  <ul>
    {
      list.map(listItem => <ListItem key={ listItem.id } id={ listItem.id } text={ listItem.name } />)
    }
  </ul>
);
export default List;