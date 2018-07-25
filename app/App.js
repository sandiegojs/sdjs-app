import React from 'react';
import { Provider } from 'react-redux';
import store from './rootStore';
import { Image,  BackHandler, Alert } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import EventDetailsScreen from './screens/EventDetailsScreen';
import EventsScreen from './screens/EventsScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LogInScreen';
import SDJSScreen from './screens/SDJSScreen';
import SlackScreen from './screens/SlackScreen';


class App extends React.Component {
  
handleBackButton = () => {               
  Alert.alert(
      'Exit App',
      'Exiting the application?', [{
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
      }, {
          text: 'OK',
          onPress: () => BackHandler.exitApp()
      }, ], {
          cancelable: false
      }
   )
   return true;
 }
 componentDidMount() {
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}
  render() {

    const AppRoot = StackNavigator({ 
      Login: { screen: LoginScreen },
      Signup: { screen: SignupScreen },
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
            }
            // Profile: {
            //   screen: ProfileScreen,
            // },
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
                  // case 'Profile':
                  //   return (
                  //     <Image
                  //       source={require('./assets/images/survey.png')}
                  //       fadeDuration={0}
                  //       style={{ width: 30, height: 30 }}
                  //     />
                    //)
                    break;
                }
              },
            }),
            tabBarComponent: TabBarBottom,
            tabBarPosition: 'bottom',
            animationEnabled: false,
            swipeEnabled: true,
            initialRouteName: 'Events',
          }
        )
      },
     // Profile: { screen: ProfileScreen },
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


