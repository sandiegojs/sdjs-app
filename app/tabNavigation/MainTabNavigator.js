import React from 'react';
import { Image, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import EventsScreen from './screens/EventsScreen';

export default class RootNavigator extends React.Component {
  render() {
    const RootTabNavigator = TabNavigator(
      {
        // SanDiegoJS: {
        //   screen: EventsScreen,
        // },
        // Slack: {
        //   screen: EventsScreen,
        // },
        Event: {
          screen: EventsScreen,
        },
        // Survey: {
        //   screen: EventsScreen,
        // },
        // Poll: {
        //   screen: EventsScreen,
        // },
      },
      {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            switch (routeName) {
              case 'Events':
                return (
                  <Image
                    source={require('../assets/images/sdjs.png')}
                    fadeDuration={0}
                    style={{ width: 30, height: 30 }}
                  />
                );
                break;
              case 'Events':
                return (
                  <Image
                    source={require('../assets/images/slack.png')}
                    fadeDuration={0}
                    style={{ width: 30, height: 30 }}
                  />
                );
                break;
              case 'Events':
                return (
                  <Image
                    source={require('../assets/images/calendar.png')}
                    fadeDuration={0}
                    style={{ width: 30, height: 30 }}
                  />
                );
                break;
              case 'Events':
                return (
                  <Image
                    source={require('../assets/images/survey.png')}
                    fadeDuration={0}
                    style={{ width: 30, height: 30 }}
                  />
                );
                break;
              case 'Events':
                return (
                  <Image
                    source={require('../assets/images/poll.png')}
                    fadeDuration={0}
                    style={{ width: 30, height: 30 }}
                  />
                );
                break;
              case 'Events':
                return (
                  <Image
                    source={require('../assets/images/shopping.png')}
                    fadeDuration={0}
                    style={{ width: 30, height: 30 }}
                  />
                );
                break;
              case 'Events':
                return (
                  <Image
                    source={require('../assets/images/logout.png')}
                    fadeDuration={0}
                    style={{ width: 30, height: 30 }}
                  />
                );
                break;
            }
          },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
      },
    );
    return (
      <View style={{ flex: 1 }}>
        <RootTabNavigator />
      </View>
    );
  }
}
