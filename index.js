import React from 'react';
import ReactDOM from 'react-dom';

import routeConfig from './app/routeConfig';
import AwesomeRouter from './app/AwesomeRouter';

ReactDOM.render(
  <div className='content'>
    <div className='container'>
      <AwesomeRouter config={ routeConfig } />
    </div>
  </div>,
  document.getElementById('app')
);