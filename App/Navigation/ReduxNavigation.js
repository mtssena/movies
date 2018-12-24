import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import AppNavigation from './AppNavigation';

const App = reduxifyNavigator(AppNavigation, 'root');
const mapStateToProps = state => ({ state: state.nav });
const AppWithNavigationState = connect(mapStateToProps)(App);

export default connect(mapStateToProps)(AppWithNavigationState);
