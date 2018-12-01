import React from 'react';
import { StoreConsumer } from './index';

const withStoreConsumer = WrappedComponent => props => (
  <StoreConsumer>
    { store => <WrappedComponent store={ store } { ...props } />}
  </StoreConsumer>
)

const connect = (mapStateToProps) => WrappedComponent => withStoreConsumer(
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