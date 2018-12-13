import React from 'react';
import ReactDOM from 'react-dom';

import routeConfig from './app/routeConfig';
import AwesomeRouter from './app/AwesomeRouter';

import { applyMiddleware, createStore } from './lib/redux';
import reducer from './app/awesomeReducer';
import { receiveData } from './app/actions';
import { Provider } from './lib/react-redux';
import loggerMiddleware from './logger-middleware';
import reduxThunk from './lib/redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    receiveData(data)(store.dispatch);
  })

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