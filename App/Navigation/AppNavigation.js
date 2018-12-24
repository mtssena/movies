import { createStackNavigator } from 'react-navigation';

import Theme from '../Theme';
import Home from '../Containers/Home';
import Details from '../Containers/Details';

const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
    },
    DetailsScreen: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'HomeScreen',
    cardStyle: { backgroundColor: Theme.app.defaultBackgroundColor },
  },
);

export default AppNavigator;
