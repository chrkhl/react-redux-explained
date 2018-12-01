import React from 'react';

const connect = WrappedComponent => (
  class extends React.Component {
    state = this.props.store.getState();
    
    componentDidMount() {
      this.unsubscribeFromStore = this.props.store.subscribe(this.handleStoreChange);
    }
    
    componentWillUnmount() {
      this.unsubscribeFromStore();
    }
    
    handleStoreChange = () => {
      const newState = this.props.store.getState();
      this.setState(newState);
    }
    
    render() {
      return (
        <WrappedComponent appState={ this.state } { ...this.props } />
      )
    }
  }
);

export default connect;