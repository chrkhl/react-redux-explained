import React from 'react';
import ReactDOM from 'react-dom';

import routeConfig from './app/routeConfig';
import AwesomeRouter from './app/AwesomeRouter';

const data = [{
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
  }];

ReactDOM.render(
  <div className='content'>
    <div className='container'>
      <AwesomeRouter config={ routeConfig } data={ data } />
    </div>
  </div>,
  document.getElementById('app')
);