import React from 'react';
import { Image, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import EventsScreen from './screens/EventsScreen';

export default class RootNavigator extends React.Component {
  render() {
    const RootTabNavigator = TabNavigator(
      {
        Event: {
          screen: EventsScreen
        }
      },
      {
        navigationOptions: ({ navigation }) => ({
          // eslint-disable-next-line no-unused-vars
          tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            switch (routeName) {
              case 'Events':
                return (
                  <Image
                    source={ require('../assets/images/sdjs.png') }
                    fadeDuration={ 0 }
                    style={ { width: 30, height: 30 } }
                  />
                );
              case 'Events':
                return (
                  <Image
                    source={ require('../assets/images/slack.png') }
                    fadeDuration={ 0 }
                    style={ { width: 30, height: 30 } }
                  />
                );
              case 'Events':
                return (
                  <Image
                    source={ require('../assets/images/calendar.png') }
                    fadeDuration={ 0 }
                    style={ { width: 30, height: 30 } }
                  />
                );
              case 'Events':
                return (
                  <Image
                    source={ require('../assets/images/survey.png') }
                    fadeDuration={ 0 }
                    style={ { width: 30, height: 30 } }
                  />
                );
              case 'Events':
                return (
                  <Image
                    source={ require('../assets/images/poll.png') }
                    fadeDuration={ 0 }
                    style={ { width: 30, height: 30 } }
                  />
                );
              case 'Events':
                return (
                  <Image
                    source={ require('../assets/images/shopping.png') }
                    fadeDuration={ 0 }
                    style={ { width: 30, height: 30 } }
                  />
                );
              case 'Events':
                return (
                  <Image
                    source={ require('../assets/images/logout.png') }
                    fadeDuration={ 0 }
                    style={ { width: 30, height: 30 } }
                  />
                );
            }
          }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false
      },
    );
    return (
      <View style={ { flex: 1 } }>
        <RootTabNavigator />
      </View>
    );
  }
}
