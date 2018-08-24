import React from 'react';
import { Provider } from 'react-redux';
import store from './rootStore';
import { Image, BackHandler, Alert } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import EventDetailsScreen from './screens/EventDetailsScreen';
import EventsScreen from './screens/EventsScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LogInScreen';
import SDJSScreen from './screens/SDJSScreen';
import SlackScreen from './screens/SlackScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
// import DonateScreen from './screens/DonateScreen';
import ThankyouScreen from './screens/ThankyouScreen';
import LogoutScreen from './screens/LogoutScreen';
import QuestionnaireScreen from './screens/QuestionnaireScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import SplashScreen from './screens/SplashScreen';

class App extends React.Component {

  handleBackButton = () => {
    Alert.alert(
      'Exit The App',
      'Are you sure you want to exit?', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => BackHandler.exitApp()
      },], {
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
      Password: { screen: PasswordResetScreen },
      Questionnaire: { screen: QuestionnaireScreen },
      Splash:{screen: SplashScreen },
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
            // Donate: {
            //   screen: DonateScreen,
            // },
            Profile: {
              screen: ProfileScreen,
            },
            Shopping: {
              screen: ShoppingScreen,
            },
            Logout: {
              screen: LogoutScreen,
            }
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
                  // case 'Donate':
                  //   return (
                  //     <Image
                  //       source={require('./assets/images/donate.png')}
                  //       fadeDuration={0}
                  //       style={{ width: 30, height: 30 }}
                  //     />
                  //   )
                  //   break;
                  case 'Profile':
                    return (
                      <Image
                        source={require('./assets/images/survey.png')}
                        fadeDuration={0}
                        style={{ width: 30, height: 30 }}
                      />
                    )
                    break;
                  case 'Logout':
                    return (
                      <Image
                        source={require('./assets/images/logout.png')}
                        fadeDuration={0}
                        style={{ width: 30, height: 30 }}
                      />
                    )
                    break;
                  case 'Shopping':
                    return (
                      <Image
                        source={require('./assets/images/shopping.png')}
                        fadeDuration={0}
                        style={{ width: 30, height: 30 }}
                      />
                    )
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
      EventDetails: { screen: EventDetailsScreen },
      // Donate: { screen: DonateScreen },
      ThankYou: { screen: ThankyouScreen }
    });
    return (
      <Provider store={store}>
        <AppRoot />
      </Provider>
    );
  }
};

export default App;
