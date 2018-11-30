import AwesomeList from './containers/AwesomeList';
import AwesomeDetails from './containers/AwesomeDetails';

const routeConfig = {
  default: 'list',
  routes: {
    list: {
      component: AwesomeList
    },
    details: {
      component: AwesomeDetails,
      props: [ "personId" ]
    }
  }
};

export default routeConfig;