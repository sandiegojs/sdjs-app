import React from 'react';
import { Provider } from 'react-redux';
import store from './rootStore';
import { StackNavigator } from 'react-navigation';
import EventDetailsScreen from './screens/EventDetailsScreen';
import EventsScreen from './screens/EventsScreen';
import LogInScreen from './screens/LogInScreen';
import ProfileScreen from './screens/ProfileScreen';



class App extends React.Component {

  render() {

    const AppRoot = StackNavigator({
      // LogIn: { screen: LogInScreen },
      Events: { screen: EventsScreen },
      Profile: { screen: ProfileScreen },
      EventDetails: { screen: EventDetailsScreen },
    });
    return (
      <Provider store={store}>
        <AppRoot />
      </Provider>
    );
  }
};





export default App;


