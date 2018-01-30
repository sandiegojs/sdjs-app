import React from 'react';
import { Platform, Image } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
// import Colors from '../constants/Colors';
import EventsScreen from './screens/EventsScreen';

// 1. get /event (filter by meetup_id)
    // IF TRUE - get event id, post to /attendees = {userId, eventId}
    // ELSE - post /user/{id}/events = { "event_title": "string", "meetup_id": "string", "url": "string", "location": {} }

export default TabNavigator(
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
        let iconName;
        switch (routeName) {
          case 'Events':
          return(
            <Image
            source={require('../assets/images/sdjs.png')}
            fadeDuration={0}
            style={{width: 30, height:30}}
          />
          )
          break;
          case 'Events':
          return(
            <Image
            source={require('../assets/images/slack.png')}
            fadeDuration={0}
            style={{width: 30, height:30}}
          />
          )
          break;
          case 'Events':
          return(
            <Image
            source={require('../assets/images/calendar.png')}
            fadeDuration={0}
            style={{width: 30, height:30}}
          />
          )
            break;
          case 'Events':
          return(
            <Image
            source={require('../assets/images/survey.png')}
            fadeDuration={0}
            style={{width: 30, height:30}}
          />
          )
            break;
          case 'Events':
          return(
            <Image
            source={require('../assets/images/poll.png')}
            fadeDuration={0}
            style={{width: 30, height:30}}
          />
          )
        }
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
