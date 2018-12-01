import React from 'react';

class AwesomeRouter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = this.getDerivedStateFromLocationHash()
  }
  
  componentDidMount() {
    window.addEventListener('hashchange', this.handleHashChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);  
  }
  
  isValidRoute = candidate => candidate && this.props.config.routes.hasOwnProperty(candidate);
  
  mapRouteProps = (newRoute, routeProps) => {
    if (!this.isValidRoute(newRoute) || !routeProps || !routeProps.length) return {};
    
    const routePropsConfig = this.props.config.routes[newRoute].props;
    if (!routePropsConfig || !routePropsConfig.length) return {};
    
    const mappedProps = routePropsConfig.reduce((acc, prop, index) => {
      acc[prop] = routeProps[index];
      return acc;
    }, {});
    
    return mappedProps;
  }
  
  getDerivedStateFromLocationHash = () => {
    const hash = window.location.hash ? window.location.hash.substring(1) : '';
    let [ newRoute, ...routeProps ] = hash.split('/').map(s => s.toLowerCase());
    let mappedRouteProps = {};
    
    if(!this.isValidRoute(newRoute)) {
      newRoute = this.props.config.default;
    }
    
    mappedRouteProps = this.mapRouteProps(newRoute, routeProps);
    return { currentRoute: newRoute, currentRouteProps: mappedRouteProps };
  }
  
  handleHashChange = () => {
    const newState = this.getDerivedStateFromLocationHash();
    this.setState(newState);
  }
  
  render() {
    const Component = this.props.config.routes[this.state.currentRoute].component;
    
    return (
      <Component {...this.state.currentRouteProps} data={ this.props.data } store={ this.props.store }/>
    );
  }
}

const navigateToRoute = (route, ...props) => {
  if (!route) throw new Error('no route specified');
  
  const newHash = props && props.length ?
    `${route}/${props.join('/')}` :
    route;
    
  window.location.hash = newHash;
}

export default AwesomeRouter;
export { AwesomeRouter, navigateToRoute};