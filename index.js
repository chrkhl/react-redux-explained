import React from 'react';
import ReactDOM from 'react-dom';

import AwesomeList from './app/containers/AwesomeList';

ReactDOM.render(
  <div className='content'>
    <div className='container'>
      <h1>Awesome List</h1>
      <AwesomeList />
    </div>
  </div>,
  document.getElementById('app')
);