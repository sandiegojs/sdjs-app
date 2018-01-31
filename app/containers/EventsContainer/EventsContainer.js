import React from 'react';
import Geofence from 'react-native-expo-geofence';
import { connect } from 'react-redux';
import { Constants, Location, Permissions } from 'expo';
import {
  updateEventsData,
  updateSelectedEvent,
  setLocationError,
  checkedInTrue,
  checkedInFalse,
  addAttendeeToEvent,
  removeAttendee
} from './eventsActions';
import { FlatList, StyleSheet, View, Text, } from 'react-native';
import { List, ListItem, Button } from "react-native-elements";
import { getDayOfTheWeek, getMonthString, getMonthAbr, getDateString, getYearString, standardTime } from './eventsDateAndTime';

class EventsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.selectionHandler = this.selectionHandler.bind(this)
    this.handleUnCheckIn = this.handleUnCheckIn.bind(this);

  }
  componentWillMount() {
    const { dispatch } = this.props
    const eventsData = null;

    dispatch(updateEventsData(eventsData));

  }

  selectionHandler(id) {
    const { navigate } = this.props.navigation;
    const { dispatch } = this.props;
      selectedEventId = id;
      dispatch(updateSelectedEvent(selectedEventId));

      navigate('EventDetails')

  }
  _getLocationAsync = async () => {

    const { dispatch, eventsData, user } = this.props;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      let errorMessage = 'Permission to access location was denied';
      dispatch(setLocationError(errorMessage));
    }

    var d = new Date();
    var todaysISOdate = d.toISOString().slice(0, 10);
    var exampleDate = "2018-02-06";// for testing, REMOVE and update to todaysISODate
    var todaysEvents = eventsData.filter(event => event.local_date == exampleDate);

    var eventTime = null;
    var hoursPriorToEvent = null;
    var hoursAfterEventStart = null;
    var currentTime = null;

    if (todaysEvents[0] === undefined) {
      console.log("No Meetup found for today")
    } else {
      function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      var hours = addZero(d.getHours());
      var mins = addZero(d.getMinutes());
      eventTime = parseInt(todaysEvents[0].local_time.replace(':', ''));
      console.log("event time", eventTime);
      //changes hrs allowed for check in before or after event start time.
      //ex. 1h == 100
      hoursPriorToEvent = eventTime - 200;
      hoursAfterEventStart = eventTime + 400;
      console.log("before", hoursPriorToEvent);
      console.log("after", hoursAfterEventStart);

      currentTime = 1830//parseInt(hours+mins);  currently set to 1230 for testing
      console.log("current", currentTime);
    }
    if (currentTime < hoursPriorToEvent || currentTime > hoursAfterEventStart) {
      console.log("Unable to check in at this time")
    } else {

      let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

      var points = [
        {//REMOVE & UPDATE currently set to location off site of 350 10th Ave SD 92101
          latitude: 32.717793.toFixed(6),//location.coords.latitude.toFixed(6)
          longitude: -117.155565.toFixed(6)//location.coords.longitude.toFixed(6)
        }
      ]

      var startPoint = { //venue lat lon
        latitude: 32.70893096923828,//todaysEvents.venue.lat
        longitude: -117.15599060058594//todaysEvents.venue.lon
      }

      var maxDistanceInKM = 5; // 500m distance
      // startPoint - center of perimeter
      // points - array of points
      // maxDistanceInKM - max point distance from startPoint in KM's
      // result - array of points inside the max distance
      var result = Geofence.filterByProximity(startPoint, points, maxDistanceInKM);

      if (result[0] === undefined) {
        console.log("Geolocation cannot confirm your location to the event, please try again")
      } else {
        eventObj = {
          "event_title": todaysEvents[0].name,
          "meetup_id": todaysEvents[0].id,
          "url": todaysEvents[0].group.urlname + ".org",
          "location": startPoint
        };
        dispatch(checkedInTrue(true));
        dispatch(addAttendeeToEvent(eventObj, user.id));

      }

    }

  };

  handleUnCheckIn() {
    const { dispatch, attendeeId} = this.props;
    dispatch(removeAttendee(attendeeId))
    dispatch(checkedInFalse(false));
  }

  render() {
    const { eventsData, locationError, checkedIn } = this.props

    let checkInButton = null;
    if (checkedIn) {
      checkInButton = <Button
        onPress={this.handleUnCheckIn}
        title="Undo Check In"
        buttonStyle={styles.purple}
      />
    } else {
      checkInButton = <Button
        onPress={this._getLocationAsync}
        title="Check In!"
        buttonStyle={styles.green}
      />
    }

    let locationErrorMessage = null;
    if (!!locationError) {
      locationErrorMessage = <Text style={styles.locationErrorMessage}>{locationError}</Text>
    }
    return (

      <View>
        {checkInButton}
        {locationErrorMessage}
        <List>
          <FlatList
            data={eventsData}
            renderItem={({ item }) => <ListItem
              key={item.id}
              title={`${getDayOfTheWeek(item.local_date)}, ${getMonthString(item.local_date)} ${getDateString(item.local_date)}, ${getYearString(item.local_date)}, ${standardTime(item.local_time)}`}
              subtitle={item.name}
              onPress={() => this.selectionHandler(item.id)
              }
            />}
          />
        </List>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  green: {
    backgroundColor: 'green',
    color: 'white'
  },
  purple: {
    backgroundColor: 'purple',
    color: 'white'
  },
  locationErrorMessage: {
    textAlign: 'center',
    color: 'red'
  },
});

function mapStoreToProps(store) {
  return {
    eventsData: store.eventsData.eventsData,
    locationError: store.eventsData.locationError,
    checkedIn: store.eventsData.checkedIn,
    user: store.loginData.user,
    attendeeId: store.eventsData.attendeeId,

  };
}


export default connect(mapStoreToProps)(EventsContainer);


