import React from 'react';
import { navigateToRoute } from '../AwesomeRouter';

const staticDetails = {
  "id": "4711",
  "name": "Max Mustermann",
  "details": {
    "avatar": "https://pickaface.net/gallery/avatar/unr_funny_170108_2338_7hs7qcl1.png",
    "age": 32,
    "interests": [
      "Design", "Kunst", "Reisen"
    ]
  }
};

const AwesomeDetails = props => (
  <div className='details-view'>
    <h1>Awesome Details</h1>
    
    <div className='person-profile'>      
      <img className='avatar' src={ staticDetails.details.avatar } alt='avatar' />
      <dl>
        <dt>Name</dt>
        <dd>{ staticDetails.name }</dd>
        <dt>Nummer</dt>
        <dd>{ props.personId }</dd>
        <dt>Alter</dt>
        <dd>{ staticDetails.details.age }</dd>
        <dt>Interessen</dt>
        <dd>
          <ul>
            { staticDetails.details.interests.map((interest, index) => <li key={index}>{interest}</li>)}
          </ul>
        </dd>
      </dl>
    </div>
    
    <p>
      <button onClick={() => navigateToRoute('list')}>
        Zurück zur Liste
      </button>
    </p>
  </div>
);

export default AwesomeDetails;
