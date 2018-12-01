import React from 'react';
import { StoreConsumer } from './index';

const withStoreConsumer = WrappedComponent => props => (
  <StoreConsumer>
    { store => <WrappedComponent store={ store } { ...props } />}
  </StoreConsumer>
)

const connect = (mapStateToProps, actions) => WrappedComponent => withStoreConsumer(
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
    
    mapActionsWithDispatch = () => {
      if (!actions) return {};
      
      return Object.keys(actions)
        .reduce((acc, actionName) => {
          acc[actionName] = (...args) => this.props.store.dispatch(actions[actionName](...args));
          return acc;
        }, {});
    }
    
    render() {
      const actionsWithDispatch = this.mapActionsWithDispatch();
      
      return (
        <WrappedComponent { ...this.state.mappedProps } { ...this.props } { ...actionsWithDispatch } />
      )
    }
  }
);

export default connect;