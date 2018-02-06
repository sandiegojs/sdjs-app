import React from 'react';
import { Provider } from 'react-redux';
import store from './rootStore';
import { StackNavigator } from 'react-navigation';
import EventDetailsScreen from './screens/EventDetailsScreen';
import EventsScreen from './screens/EventsScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';



class App extends React.Component {

  render() {

    const AppRoot = StackNavigator({
      Signup: { screen: SignupScreen },
      Login: { screen: LoginScreen },
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


