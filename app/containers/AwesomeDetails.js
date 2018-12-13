import React from 'react';
import { navigateToRoute } from '../AwesomeRouter';
import { connect } from '../../lib/react-redux';
import { receiveData } from '../actions';

class AwesomeDetails extends React.Component {
  componentDidMount() {
    if(!this.props.hasData) {
      this.props.receiveData();
    }
  }

  render() {    
    return (
      <div className='details-view'>
        <h1>Awesome Details</h1>
        
        { !this.props.personData &&
          <p>Keine Informationen zu der Person mit ID { this.props.personId } gefunden!</p>
        }
        
        { this.props.personData &&
          <div className='person-profile'>      
            <img className='avatar' src={ this.props.personData.details.avatar } alt='avatar' />
            <dl>
              <dt>Name</dt>
              <dd>{ this.props.personData.name }</dd>
              <dt>Nummer</dt>
              <dd>{ this.props.personId }</dd>
              <dt>Alter</dt>
              <dd>{ this.props.personData.details.age }</dd>
              <dt>Interessen</dt>
              <dd>
                <ul>
                  { this.props.personData.details.interests.map((interest, index) => <li key={index}>{interest}</li>)}
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
  }
};

const mapDispatchToProps = {
  receiveData
};

const mapStateToProps = (state, ownProps) => ({
  hasData: Boolean(state.data && state.data.length),
  personData: state.data.find(person => person.id === ownProps.personId)
})

const connectedAwesomeDetails = connect(mapStateToProps, mapDispatchToProps)(AwesomeDetails);
export default connectedAwesomeDetails;
