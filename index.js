import React from 'react';
import ReactDOM from 'react-dom';

import routeConfig from './app/routeConfig';
import AwesomeRouter from './app/AwesomeRouter';

import { applyMiddleware, createStore } from './lib/redux';
import reducer from './app/awesomeReducer';
import { Provider } from './lib/react-redux';
import loggerMiddleware from './app/middlewares/logger-middleware';
import unicornifyMiddleware from './app/middlewares/unicornify-middleware';
import reduxThunk from './lib/redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  reduxThunk,
  loggerMiddleware,
  unicornifyMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={ store }>
    <div className='content'>
      <div className='container'>
        <AwesomeRouter config={ routeConfig } />
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);