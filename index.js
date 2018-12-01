import React from 'react';
import ReactDOM from 'react-dom';

import routeConfig from './app/routeConfig';
import AwesomeRouter from './app/AwesomeRouter';

import { createStore } from './lib/redux';
import reducer from './app/awesomeReducer';

const store = createStore(reducer);
const data = [{
    "id": "4711",
    "name": "Max Mustermann",
    "details": {
      "avatar": "https://pickaface.net/gallery/avatar/unr_funny_170108_2338_7hs7qcl1.png",
      "age": 32,
      "interests": [
        "Design", "Kunst", "Reisen"
      ]
    }
  },{
    "id": "4712",
    "name": "Sabine Mustermann",
    "details": {
      "avatar": "https://pickaface.net/gallery/avatar/unr_qwerty_161123_0418_9ndl6z.png",
      "age": 28,
      "interests": [
        "Bücher", "Reiten", "Kochen"
      ]
    }
  },{
    "id": "4713",
    "name": "John Doe",
    "details": {
      "avatar": "https://pickaface.net/gallery/avatar/unr_mrz34_171220_0103_2h8btat.png",
      "age": 36,
      "interests": [
        "Sport", "Zauberei", "Lesen"
      ]
    }
  },{
    "id": "4714",
    "name": "Jane Doe",
    "details": {
      "avatar": "https://pickaface.net/gallery/avatar/20121027_064623_1221_Maxanakz1.png",
      "age": 29,
      "interests": [
        "Yoga", "Handarbeit", "Martial Arts"
      ]
    }
  }];

store.dispatch({
  type: 'receiveData',
  data
});

ReactDOM.render(
  <div className='content'>
    <div className='container'>
      <AwesomeRouter config={ routeConfig } store={ store } />
    </div>
  </div>,
  document.getElementById('app')
);