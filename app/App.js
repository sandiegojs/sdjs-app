import React from 'react';
import { Provider } from 'react-redux';
import store from './rootStore';
import { Image } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import EventDetailsScreen from './screens/EventDetailsScreen';
import EventsScreen from './screens/EventsScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';

import PollScreen from './screens/PollScreen';
import SDJSScreen from './screens/SDJSScreen';
import SlackScreen from './screens/SlackScreen';


class App extends React.Component {

  render() {

    const AppRoot = StackNavigator({
      Signup: { screen: SignupScreen },
      Login: { screen: LoginScreen },
      Events: {
        screen: TabNavigator(
          {
            SanDiegoJS: {
              screen: SDJSScreen,
            },
            Slack: {
              screen: SlackScreen,
            },
            Events: {
              screen: EventsScreen,
            },
            Profile: {
              screen: ProfileScreen,
            },
            Poll: {
              screen: PollScreen,
            },
          },
          {
            navigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                  case 'SanDiegoJS':
                    return (
                      <Image
                        source={require('./assets/images/sdjs.png')}
                        fadeDuration={0}
                        style={{ width: 30, height: 30 }}
                      />
                    )
                    break;
                  case 'Slack':
                    return (
                      <Image
                        source={require('./assets/images/slack.png')}
                        fadeDuration={0}
                        style={{ width: 30, height: 30 }}
                      />
                    )
                    break;
                  case 'Events':
                    return (
                      <Image
                        source={require('./assets/images/calendar.png')}
                        fadeDuration={0}
                        style={{ width: 30, height: 30 }}
                      />
                    )
                    break;
                  case 'Profile':
                    return (
                      <Image
                        source={require('./assets/images/survey.png')}
                        fadeDuration={0}
                        style={{ width: 30, height: 30 }}
                      />
                    )
                    break;
                  case 'Poll':
                    return (
                      <Image
                        source={require('./assets/images/poll.png')}
                        fadeDuration={0}
                        style={{ width: 30, height: 30 }}
                      />
                    )
                }
              },
            }),
            tabBarComponent: TabBarBottom,
            tabBarPosition: 'bottom',
            animationEnabled: false,
            swipeEnabled: false,
            initialRouteName: 'Events',
          }
        )
      },
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


