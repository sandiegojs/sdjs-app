import React from 'react';
import Geofence from 'react-native-expo-geofence';
import { connect } from 'react-redux';
import { Constants, Location, Permissions, LinearGradient, WebBrowser } from 'expo';
import {
  updateEventsData,
  updateSelectedEvent,
  setLocationError,
  checkedInTrue,
  checkedInFalse,
  addAttendeeToEvent,
  removeAttendee,
  profileQuery
} from './eventsActions';
import { FlatList, StyleSheet, View, Text, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { List, ListItem, Button } from "react-native-elements";
import { 
        getDayOfTheWeek, 
        getMonthString, 
        getMonthAbr, 
        getDateString, 
        getYearString, 
        standardTime 
      } from './eventsDateAndTime';
const moment = require('moment-timezone');

class EventsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.selectionHandler = this.selectionHandler.bind(this);
    this.handleUnCheckIn = this.handleUnCheckIn.bind(this);
    this.handleButtons = this.handleButtons.bind(this);
  }

  componentDidMount() {
    const { dispatch, user } = this.props
    dispatch(updateEventsData());
    // dispatch(profileQuery(user.id)); this line uncommented throws error but may be needed when profile returns
  }

  selectionHandler(id, rsvpEventDetails, rsvpEventId) {
    const { navigate } = this.props.navigation;
    const { dispatch } = this.props;
    selectedEventId = id;
    dispatch(updateSelectedEvent(selectedEventId));
    navigate('EventDetails')
  }

  _getLocationAsync = async () => {

    const { dispatch, eventsData, user, id } = this.props;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      let errorMessage = 'Permission to access location was denied';
      dispatch(setLocationError(errorMessage));
    } else {
      let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

      var points = [ // user's location
        {
          latitude: location.coords.latitude.toFixed(6),
          longitude: location.coords.longitude.toFixed(6)
        }
      ]

      var startPoint = { //venue lat lon
        latitude: eventsData[0].venue.lat,
        longitude: eventsData[0].venue.lon
      }

      var maxDistanceInKM = 0.5; // 500m distance
      // startPoint - center of perimeter
      // points - array of points
      // maxDistanceInKM - max point distance from startPoint in KM's
      // result - array of points inside the max distance
      var result = Geofence.filterByProximity(startPoint, points, maxDistanceInKM);
      if (result[0] === undefined) {
        Alert.alert(
          'Unable to Check In',
          'You need to be within 500 meters of the event location to check in', [{
              text: 'OK',
          }], {
              cancelable: false
          }
       ) 
      } else {
        eventObj = {
          "event_title": eventsData[0].name,
          "meetup_id": eventsData[0].id,
          "url": eventsData[0].group.urlname + ".org",
          "location": startPoint
        };
        dispatch(checkedInTrue(true));
        dispatch(addAttendeeToEvent(eventObj, id));
      }
    }
  };

  handleUnCheckIn() {
    const { dispatch, attendeeId } = this.props;
    dispatch(checkedInFalse(false));
    dispatch(removeAttendee(attendeeId));
  }

  //Queries DB with user ID and sends to profile page
  // profilePageHandler() {
  //   const { user, dispatch } = this.props;
  //   const { navigate } = this.props.navigation;
  //   dispatch(profileQuery(user.id))
  // }

  _handlePressButtonAsync = async () => {
    const { eventDetails, eventsData } = this.props;
    const eventInfo = eventsData.filter(event => event.id === eventDetails);

    let result = await WebBrowser.openBrowserAsync(eventsInfo[0].link);
  }

  handleButtons() {
    const { eventsData, checkedIn, eventDetails } = this.props;

    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    var d = new Date();
     // below date using moment.js/moment-timezone npm package
    var todaysDate = moment().tz("America/Los_Angeles").format().slice(0, 10); // for testing, hard code date as string, format: '2018-07-24'

    var nextEvent = eventsData[0];

    var hours = addZero(d.getHours()).toString();
    var mins = addZero(d.getMinutes()).toString();

    var currentTime = parseInt(hours+mins);
    var eventTime = parseInt(nextEvent.local_time.replace(':', ''));
    var hoursPriorToEvent = eventTime - 100;
    var hoursAfterEventStart = eventTime + 400;

    if (currentTime >= hoursPriorToEvent && currentTime <= hoursAfterEventStart && todaysDate == nextEvent.local_date) {
      if (checkedIn) {
        nextEventButton = <Button
                            large
                            backgroundColor={'#D95351'}
                            borderRadius={3}
                            style={styles.checkInButton}
                            icon={{ name: 'undo', type: 'font-awesome' }}
                            title=' UNDO CHECK-IN'
                            onPress={this.handleUnCheckIn}
                          />
      }
      //if(!checkedInStatus) is false
      if (!checkedIn) {
        nextEventButton = <Button
                            large
                            backgroundColor={'#346abb'}
                            borderRadius={3}
                            style={styles.checkInButton}
                            icon={{ name: 'check-circle', type: 'font-awesome' }}
                            title=' CHECK-IN'
                            onPress={this._getLocationAsync}
                          />
      }
    }

    if (currentTime < hoursPriorToEvent || todaysDate != nextEvent.local_date) {
      nextEventButton = <Button
                          large
                          backgroundColor={'green'}
                          borderRadius={3}
                          style={styles.checkInButton}
                          raised
                          icon={{ name: 'check-circle', type: 'font-awesome' }}
                          title=' RSVP'
                          onPress={this._handlePressButtonAsync}
                        />
    }
    if (currentTime > hoursAfterEventStart && todaysDate == nextEvent.local_date) {
      nextEventButton = null;
    }

    return nextEventButton;
  }

  render() {
    const { eventsData, locationError, user, dispatch } = this.props;
    let locationErrorMessage = null;
    if (!!locationError) {
      locationErrorMessage = <Text style={styles.locationErrorMessage}>{locationError}</Text>
    }
    if (!!eventsData) {
      return (
        <View
          style={styles.listWrapper}
        >
          <Text style={{ textAlign: 'center', paddingTop: 10, fontWeight: 'bold' }}>Next Event: {eventsData[0].name} </Text>
          {this.handleButtons()}
          {locationErrorMessage}
          <Text style={{ textAlign: 'center', paddingTop: 20, marginBottom: 0 }}>Upcoming Events</Text>
          <List>
            <FlatList
              data={eventsData}
              renderItem={({ item }) => <ListItem
                title={`${getDayOfTheWeek(item.local_date)}, ${getMonthString(item.local_date)} ${getDateString(item.local_date)}, ${getYearString(item.local_date)}, ${standardTime(item.local_time)}`}
                subtitle={item.name}
                onPress={() => this.selectionHandler(item.id)
                }
              />}
              keyExtractor={(item, index) => item.id}
            />
          </List>
        </View>
      );
    } else {
      return (
        <Text></Text>
      )
    }
  }
};

const styles = StyleSheet.create({
  green: {
    backgroundColor: '#008000'
  },
  purple: {
    backgroundColor: '#551a8b'
  },
  locationErrorMessage: {
    textAlign: 'center'
  },
  checkInButton: {
    //marginTop: 25
  },
  mainContainer: {
    paddingTop: 15
  },
  listWrapper: {
    marginBottom: 380
  }
});

function mapStoreToProps(store) {
  return {
    eventDetails: store.eventsData.selectedEvent,
    eventsData: store.eventsData.eventsData,
    id: store.signupData.id,
    user: store.signupData.user,
    first_name: store.signupData.first_name,
    last_name: store.signupData.last_name,
    email: store.signupData.email,
    locationError: store.eventsData.locationError,
    checkedIn: store.eventsData.checkedIn,
    attendeeId: store.eventsData.attendeeId,
    checkedInStatus: store.eventsData.checkedInStatus
  };
}

export default connect(mapStoreToProps)(EventsContainer);