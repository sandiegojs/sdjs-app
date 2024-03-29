import React from 'react';
import { Provider } from 'react-redux';
import store from './rootStore';
import { BackHandler, Alert } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import EventDetailsScreen from './screens/EventDetailsScreen';
import EventsScreen from './screens/EventsScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LogInScreen';
import SDJSScreen from './screens/SDJSScreen';
import SlackScreen from './screens/SlackScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import DonateScreen from './screens/DonateScreen';
import LogoutScreen from './screens/LogoutScreen';
import QuestionnaireScreen from './screens/QuestionnaireScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import SplashScreen from './screens/SplashScreen';
import Ionicons from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  handleBackButton = () => {
    Alert.alert(
      'Exit The App',
      'Are you sure you want to exit?', [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
    );
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  render() {
    const AppRoot = StackNavigator({
      Splash: { screen: SplashScreen },
      Login: { screen: LoginScreen },
      Signup: { screen: SignupScreen },
      Password: { screen: PasswordResetScreen },
      Questionnaire: { screen: QuestionnaireScreen },
      Events: { screen: TabNavigator(
        {
          SanDiegoJS: { screen: SDJSScreen },
          Slack: { screen: SlackScreen },
          Events: { screen: EventsScreen },
          Donate: { screen: DonateScreen },
          Profile: { screen: ProfileScreen },
          Shopping: { screen: ShoppingScreen },
          Logout: { screen: LogoutScreen }
        },
        {
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName, iconSize;

              switch (routeName) {
                case 'SanDiegoJS':
                  iconName = `home${focused ? '' : '-outline'}`;
                  iconName = 'home';
                  iconSize = 31;
                  return <Ionicons name={ iconName } size={ iconSize } color={ tintColor }/>;

                case 'Slack':
                  iconName = `slack${focused ? '' : '-outline'}`;
                  iconName = 'slack';
                  iconSize = 25;
                  return <Ionicons name={ iconName } size={ iconSize } color={ tintColor }/>;

                case 'Events':
                  iconName = `calendar${focused ? '' : '-outline'}`;
                  iconName = 'calendar';
                  iconSize = 23;
                  return <Ionicons name={ iconName } size={ iconSize } color={ tintColor }/>;

                case 'Donate':
                  iconName = `gift${focused ? '' : '-outline'}`;
                  iconName = 'gift';
                  iconSize = 30;
                  return <Ionicons name={ iconName } size={ iconSize } color={ tintColor }/>;

                case 'Profile':
                  iconName = `user${focused ? '' : '-outline'}`;
                  iconName = 'user';
                  iconSize = 27.5;
                  return <Ionicons name={ iconName } size={ iconSize } color={ tintColor }/>;

                case 'Logout':
                  iconName = `arrow-left${focused ? '' : '-outline'}`;
                  iconName = 'arrow-left';
                  iconSize = 27;
                  return <Ionicons name={ iconName } size={ iconSize } color={ tintColor }/>;

                case 'Shopping':
                  iconName = `shopping-cart${focused ? '' : '-outline'}`;
                  iconName = 'shopping-cart';
                  iconSize = 28;
                  return <Ionicons name={ iconName } size={ iconSize } color={ tintColor }/>;
              }
            }
          }),
          tabBarComponent: TabBarBottom,
          tabBarPosition: 'bottom',
          animationEnabled: false,
          swipeEnabled: true,
          initialRouteName: 'Events'
        }
      )
      },
      EventDetails: { screen: EventDetailsScreen },
      Donate: { screen: DonateScreen }
    });
    return (
      <Provider store={ store }>
        <AppRoot />
      </Provider>
    );
  }
}
