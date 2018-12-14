import React from 'react';
import { connect } from '../../lib/react-redux';

const UnicornCounter = ({ numberOfUnicorns }) => (
  <span>
    { '🦄'.repeat(numberOfUnicorns) }
  </span>
);

const mapStateToProps = state => ({
  numberOfUnicorns: state.unicornCounter
});

export default connect(mapStateToProps)(UnicornCounter);