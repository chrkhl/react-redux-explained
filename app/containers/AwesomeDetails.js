import React from 'react';
import { navigateToRoute } from '../AwesomeRouter';
import { connect } from '../../lib/react-redux';

const AwesomeDetails = props => {
  return (
    <div className='details-view'>
      <h1>Awesome Details</h1>
      
      { !props.personData &&
        <p>Keine Informationen zu der Person mit ID { props.personId } gefunden!</p>
      }
      
      { props.personData &&
        <div className='person-profile'>      
          <img className='avatar' src={ props.personData.details.avatar } alt='avatar' />
          <dl>
            <dt>Name</dt>
            <dd>{ props.personData.name }</dd>
            <dt>Nummer</dt>
            <dd>{ props.personId }</dd>
            <dt>Alter</dt>
            <dd>{ props.personData.details.age }</dd>
            <dt>Interessen</dt>
            <dd>
              <ul>
                { props.personData.details.interests.map((interest, index) => <li key={index}>{interest}</li>)}
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

const mapStateToProps = (state, ownProps) => ({
  personData: state.data.find(person => person.id === ownProps.personId)
})

const connectedAwesomeDetails = connect(mapStateToProps)(AwesomeDetails);
export default connectedAwesomeDetails;
