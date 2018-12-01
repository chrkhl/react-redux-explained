import React from 'react';

const connect = (mapStateToProps) => WrappedComponent => (
  class extends React.Component {
    state = {
      mappedProps: mapStateToProps(this.props.store.getState(), this.props)
    }
    
    componentDidMount() {
      this.unsubscribeFromStore = this.props.store.subscribe(this.handleStoreChange);
    }
    
    componentWillUnmount() {
      this.unsubscribeFromStore();
    }
    
    handleStoreChange = () => {
      const newState = this.props.store.getState();
      const mappedProps = mapStateToProps(newState, this.props);
      this.setState({ mappedProps });
    }
    
    render() {
      return (
        <WrappedComponent { ...this.state.mappedProps } { ...this.props } />
      )
    }
  }
);

export default connect;