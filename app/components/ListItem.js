import React from 'react';
import { navigateToRoute } from '../AwesomeRouter';

const ListItem = ({ id, text }) => (
  <li>
    <div className='list-item-content'>
      { text }
      <button onClick={() => navigateToRoute('details', id)}>Details anzeigen</button>
    </div>
  </li>
);

export default ListItem;