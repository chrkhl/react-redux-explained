import React from 'react';
import { navigateToRoute } from '../AwesomeRouter';
import { connect } from '../../lib/react-redux';

const AwesomeDetails = props => {
  const personData = props.appState.data.find(person => person.id === props.personId);
  
  return (
    <div className='details-view'>
      <h1>Awesome Details</h1>
      
      { !personData &&
        <p>Keine Informationen zu der Person mit ID { props.personId } gefunden!</p>
      }
      
      { personData &&
        <div className='person-profile'>      
          <img className='avatar' src={ personData.details.avatar } alt='avatar' />
          <dl>
            <dt>Name</dt>
            <dd>{ personData.name }</dd>
            <dt>Nummer</dt>
            <dd>{ props.personId }</dd>
            <dt>Alter</dt>
            <dd>{ personData.details.age }</dd>
            <dt>Interessen</dt>
            <dd>
              <ul>
                { personData.details.interests.map((interest, index) => <li key={index}>{interest}</li>)}
              </ul>
            </dd>
          </dl>
        </div>
      }
      
      <p>
        <button onClick={() => navigateToRoute('list')}>
          Zurück zur Liste
        </button>
      </p>
    </div>
  );
};

const connectedAwesomeDetails = connect(AwesomeDetails);
export default connectedAwesomeDetails;
