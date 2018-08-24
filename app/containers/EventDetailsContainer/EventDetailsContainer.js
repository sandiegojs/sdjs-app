/* eslint-disable camelcase,max-len */
import React from 'react';
import Geofence from 'react-native-expo-geofence';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { Location, Permissions, WebBrowser } from 'expo';
import { Button } from 'react-native-elements';
import {
  setLocationError,
  checkedInTrue,
  checkedInFalse,
  addAttendeeToEvent,
  removeAttendee
} from '../EventsContainer/eventsActions';
import {
  getDayOfTheWeek,
  getMonthString,
  getDateString,
  standardTime
} from '../EventsContainer/eventsDateAndTime';
import Hyperlink from 'react-native-hyperlink';

const moment = require('moment-timezone');

class EventDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtons = this.handleButtons.bind(this);
    this.handleUnCheckIn = this.handleUnCheckIn.bind(this);
  }

  _getLocationAsync = async() => {
    const { dispatch, eventsData, user } = this.props;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      dispatch(setLocationError('Permission to access location was denied.'));
    } else {
      let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

      // user's location
      const points = [
        {
          latitude: location.coords.latitude.toFixed(6),
          longitude: location.coords.longitude.toFixed(6)
        }
      ];

      // venue lat lon
      const startPoint = {
        latitude: eventsData[0].venue.lat,
        longitude: eventsData[0].venue.lon
      };

      // 500m distance
      const maxDistanceInKM = 0.5;

      // startPoint - center of perimeter
      // points - array of points
      // maxDistanceInKM - max point distance from startPoint in KM's
      // result - array of points inside the max distance
      const result = Geofence.filterByProximity(
        startPoint,
        points,
        maxDistanceInKM,
      );

      if (!result[0]) {
        alert(
          'Unable to Check In',
          'You need to be within 500 meters of the event location to check in',
          [{ text: 'OK' }],
          { cancelable: false }
        );
      } else {
        const eventObj = {
          event_title: eventsData[0].name,
          meetup_id: eventsData[0].id,
          url: `${eventsData[0].group.urlname}.org`,
          location: startPoint
        };
        dispatch(checkedInTrue(true));
        dispatch(addAttendeeToEvent(eventObj, user.id));
      }
    }
  };

  handleUnCheckIn() {
    const { dispatch, attendeeId, user } = this.props;
    dispatch(checkedInFalse(false))
      .then(dispatch(removeAttendee(attendeeId, user.token)));
  }

  _handlePressButtonAsync = async() => {
    const { eventDetails, eventsData } = this.props;
    const eventInfo = eventsData.filter(event => event.id === eventDetails);

    // eslint-disable-next-line no-unused-vars
    let result = await WebBrowser.openBrowserAsync(eventInfo[0].link);
  };

  handleButtons() {
    const { eventsData, checkedIn, eventDetails } = this.props;

    function addZero(i) {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    }

    const d = new Date();
    // below date using moment.js/moment-timezone npm package
    // for testing, hard code date as string, format: '2018-07-24'
    const todaysDate = moment().tz('America/Los_Angeles').format().slice(0, 10);
    const nextEvent = eventsData.filter(event => event.id === eventDetails);
    const hours = (addZero(d.getHours())).toString();
    const mins = (addZero(d.getMinutes())).toString();
    const currentTime = parseInt(hours + mins);
    const eventTime = parseInt(nextEvent[0].local_time.replace(':', ''));
    const hoursPriorToEvent = eventTime - 100;
    const hoursAfterEventStart = eventTime + 400;
    let nextEventButton;

    if (
      currentTime >= hoursPriorToEvent &&
      currentTime <= hoursAfterEventStart &&
      todaysDate === nextEvent[0].local_date
    ) {
      if (checkedIn) {
        nextEventButton = <Button
          large
          backgroundColor={ '#D95351' }
          borderRadius={ 3 }
          style={ styles.checkInButton }
          raised
          icon={ { name: 'undo', type: 'font-awesome' } }
          title=' UNDO CHECK-IN'
          onPress={ this.handleUnCheckIn }
        />;
      } else {
        nextEventButton = <Button
          large
          buttonStyle={ {
            backgroundColor: '#346abb',
            borderRadius: 7
          } }
          raised
          icon={ { name: 'check-circle', type: 'font-awesome' } }
          title=' CHECK-IN'
          onPress={ this._getLocationAsync }
        />;
      }
    }

    if (currentTime < hoursPriorToEvent || todaysDate !== nextEvent[0].local_date) {
      nextEventButton = <Button
        large
        buttonStyle={ {
          backgroundColor: '#346abb',
          borderRadius: 7
        } }
        raised
        icon={ { name: 'check-circle', type: 'font-awesome' } }
        title=' RSVP'
        onPress={ this._handlePressButtonAsync }
      />;
    }

    if (currentTime > hoursAfterEventStart && todaysDate === nextEvent[0].local_date) {
      nextEventButton = null;
    }

    return nextEventButton;
  }

  render() {
    const { eventDetails, eventsData, locationError } = this.props;
    const eventInfo = eventsData.filter(event => event.id === eventDetails);
    const latitudeDelta = 0.0922;
    const longitudeDelta = 0.0421;

    let latitude = 32.7157;
    if (!!eventInfo[0].venue) {
      latitude = eventInfo[0].venue.lat;
    }

    let longitude = -117.1611;
    if (!!eventInfo[0].venue) {
      longitude = eventInfo[0].venue.lon;
    }

    let locationText = null;
    if (!!eventInfo[0].venue) {
      locationText =
        <View>
          <Text style={ styles.venueName }>{ eventInfo[0].venue.name }</Text>
          <Text style={ styles.venueAddress }>{ `${eventInfo[0].venue.address_1}` }</Text>
          <Text style={ styles.venueAddress }>{ `${eventInfo[0].venue.city}, ${eventInfo[0].venue.state}` }</Text>
        </View>;
    }

    let locationErrorMessage = null;
    if (!!locationError) {
      locationErrorMessage =
        <Text style={ styles.locationErrorMessage }>Please Enable location
          services </Text>;
    }

    if (!eventInfo[0].rsvp_limit) {
      return (
        <ScrollView style={ styles.container }>
          <View>
            <Text style={ styles.title }>{ eventInfo[0].name }</Text>
            <Text style={ styles.date }>{
              `${getDayOfTheWeek(eventInfo[0].local_date)}, ` +
              `${getMonthString(eventInfo[0].local_date)} ` +
              `${getDateString(eventInfo[0].local_date)}, ` +
              `${standardTime(eventInfo[0].local_time)}`
            }</Text>
            <Text style={ {
              fontWeight: 'bold',
              paddingLeft: 20,
              fontSize: 16,
              marginBottom: 10
            } }>
              Are you going?
              <Text style={ {
                fontSize: 16,
                fontWeight: '100'
              } }>{ `  ${eventInfo[0].yes_rsvp_count} people are going` }
              </Text>
            </Text>
            { this.handleButtons() }
            { locationErrorMessage }
            <View style={ styles.venueContainer }>{ locationText }</View>
          </View>
          <MapView
            style={ styles.map }
            initialRegion={ { latitude, longitude, latitudeDelta, longitudeDelta } }
          >
            <MapView.Marker
              key={ 1 }
              title='My Marker'
              coordinate={ { latitude, longitude } }
            />
          </MapView>
          <Hyperlink linkDefault={ true } linkStyle={ { color: '#2980b9' } }>
            <View>
              <Text style={ styles.bodyText }>{ eventInfo[0].description.replace(/<(?:.|\n)*?>/gm, '\n') }</Text>
            </View>
          </Hyperlink>
        </ScrollView>
      );
    } else if (!eventInfo[0].yes_rsvp_count) {
      return (
        <ScrollView style={ styles.container }>
          <View>
            <Text style={ styles.title }>{ eventInfo[0].name }</Text>
            <Text style={ styles.date }>
              {
                `${getDayOfTheWeek(eventInfo[0].local_date)}, ` +
                `${getMonthString(eventInfo[0].local_date)} ` +
                `${getDateString(eventInfo[0].local_date)}, ` +
                `${standardTime(eventInfo[0].local_time)}`
              }
            </Text>
            <Text style={ {
              fontWeight: 'bold',
              paddingLeft: 20,
              fontSize: 16,
              marginBottom: 10
            } }
            >
              Are you going?
            </Text>
            { this.handleButtons() }
            { locationErrorMessage }
            <View style={ styles.venueContainer }>
              { locationText }
            </View>
          </View>
          <MapView
            style={ styles.map }
            initialRegion={ { latitude, longitude, latitudeDelta, longitudeDelta } }
          >
            <MapView.Marker
              key={ 1 }
              title='My Marker'
              coordinate={ { latitude, longitude } }
            />
          </MapView>
          <Hyperlink linkDefault={ true } linkStyle={ { color: '#2980b9' } }>
            <View>
              <Text style={ styles.bodyText }>
                { eventInfo[0].description.replace(/<(?:.|\n)*?>/gm, '\n') }
              </Text>
            </View>
          </Hyperlink>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView style={ styles.container }>
          <View>
            <Text style={ styles.title }>{ eventInfo[0].name }</Text>
            <Text style={ styles.date }>
              {
                `${getDayOfTheWeek(eventInfo[0].local_date)}, ` +
                `${getMonthString(eventInfo[0].local_date)} ` +
                `${getDateString(eventInfo[0].local_date)}, ` +
                `${standardTime(eventInfo[0].local_time)}`
              }
            </Text>
            <Text style={ {
              fontWeight: 'bold',
              paddingLeft: 20,
              fontSize: 16,
              marginBottom: 10
            } }>
              Are you going?
              <Text style={ {
                fontSize: 16,
                fontWeight: '100'
              } }>{ `  ${eventInfo[0].rsvp_limit - eventInfo[0].yes_rsvp_count} spots left` }
              </Text>
            </Text>
            { this.handleButtons() }
            { locationErrorMessage }
            <View style={ styles.venueContainer }>
              { locationText }
            </View>
          </View>
          <MapView
            style={ styles.map }
            initialRegion={ { latitude, longitude, latitudeDelta, longitudeDelta } }
          >
            <MapView.Marker
              key={ 1 }
              title='My Marker'
              coordinate={ { latitude, longitude } }
            />
          </MapView>
          <Hyperlink linkDefault={ true } linkStyle={ { color: '#2980b9' } }>
            <View>
              <Text style={ styles.bodyText }>
                { eventInfo[0].description.replace(/<(?:.|\n)*?>/gm, '\n') }
              </Text>
            </View>
          </Hyperlink>
        </ScrollView>
      );
    }
  }
}

function mapStoreToProps(store) {
  return {
    eventDetails: store.eventsData.selectedEvent,
    eventsData: store.eventsData.eventsData,
    user: store.userData.user,
    locationError: store.eventsData.locationError,
    checkedIn: store.eventsData.checkedIn,
    attendeeId: store.eventsData.attendeeId,
    checkedInStatus: store.eventsData.checkedInStatus
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Kailasa' : 'Roboto',
    lineHeight: 50,
    paddingTop: 5,
    paddingBottom: 10
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 2
  },
  bodyText: {
    lineHeight: 24,
    marginTop: 19,
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 50,
    fontSize: 14
  },
  map: {
    flex: 1,
    height: 300,
    width: 300,
    marginTop: 10,
    alignSelf: 'center'
  },
  checkInButton: {},
  date: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#346abb',
    letterSpacing: 3,
    marginTop: -10,
    marginBottom: 30
  },
  venueName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 43
  },
  venueAddress: {
    marginTop: 1
  },
  venueContainer: {
    paddingLeft: 20
  },
  locationErrorMessage: {
    textAlign: 'center'
  }
});

export default connect(mapStoreToProps)(EventDetailsContainer);
