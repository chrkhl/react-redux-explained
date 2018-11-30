import React from 'react';
import { navigateToRoute } from '../AwesomeRouter';

const AwesomeDetails = props => (
  <>
    <h1>Awesome Details</h1>
    props: { JSON.stringify(props) }
    
    <p>
      <button onClick={() => navigateToRoute('list')}>
        Zurück zur Liste
      </button>
    </p>
  </>
);

export default AwesomeDetails;
