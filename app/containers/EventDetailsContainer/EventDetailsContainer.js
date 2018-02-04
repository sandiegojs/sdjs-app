import React from 'react';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { StyleSheet, Text, View, Linking, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import {
    setLocationError,
    checkedInTrue,
    checkedInFalse,
    addAttendeeToEvent,
    removeAttendee,
    rsvpTrue,
    rsvpFalse,
} from '../EventsContainer/eventsActions';
import { getDayOfTheWeek, getMonthString, getMonthAbr, getDateString, getYearString, standardTime } from '../EventsContainer/eventsDateAndTime';
import Hyperlink from 'react-native-hyperlink'
import EventMap from './EventMap'

class EventDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            checkIn: false
        })
        this.checkInFalse = this.checkInFalse.bind(this);
        this.checkInTrue = this.checkInTrue.bind(this);
        this.handleButtons = this.handleButtons.bind(this);
        this.handleUnRSVP = this.handleUnRSVP.bind(this);
        this.handleRSVP = this.handleRSVP.bind(this);
        this.handleUnCheckIn = this.handleUnCheckIn.bind(this);
    }

    checkInTrue() {
        console.log("in CHeck In True")
        this.setState({ checkIn: true });
    }

    checkInFalse() {
        this.setState({ checkIn: false })
        console.log("in CHeck In false")
    }

    _getLocationAsync = async () => {
        console.log("inside check in ")

        const { dispatch, eventsData, user } = this.props;
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            let errorMessage = 'Permission to access location was denied';
            dispatch(setLocationError(errorMessage));
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
            console.log('result', result)
            if (result[0] === undefined) {
                console.log("Geolocation cannot confirm your location to the event, please try again")
            } else {
                eventObj = {
                    "event_title": eventsData[0].name,
                    "meetup_id": eventsData[0].id,
                    "url": eventsData[0].group.urlname + ".org",
                    "location": startPoint
                };
                dispatch(checkedInTrue(true));
                dispatch(addAttendeeToEvent(eventObj, user.id));

            }
        }
    };

    handleUnCheckIn() {
        const { dispatch, attendeeId } = this.props;
        dispatch(removeAttendee(attendeeId))
        dispatch(checkedInFalse(false));
    }



    handleRSVP() {
        const { dispatch } = this.props;
        dispatch(rsvpTrue(true));
    }
    handleUnRSVP() {
        const { dispatch } = this.props;
        dispatch(rsvpFalse(false));
    }


    handleButtons() {
        const { eventsData, checkedIn, rsvp } = this.props;

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }



        var d = new Date();
        var todaysISOdate = d.toISOString().slice(0, 10);

        var exampleDate = "2018-02-06";// for testing, REMOVE and update to todaysISODate
        var nextEvent = eventsData[0];

        var hours = addZero(d.getHours());
        var mins = addZero(d.getMinutes());




        var currentTime = null;//parseInt(hours+mins);  currently set to 1230 for testing
        var eventTime = parseInt(nextEvent.local_time.replace(':', ''));
        var hoursPriorToEvent = eventTime - 100;
        var hoursAfterEventStart = eventTime + 400;

        currentTime = 1300//parseInt(hours+mins);  currently set to 1230 for testing
        console.log("current", currentTime);
        console.log("before", hoursPriorToEvent);
        console.log("after", hoursAfterEventStart);
        console.log('event start time', eventTime);


        if (currentTime >= hoursPriorToEvent && currentTime <= hoursAfterEventStart && exampleDate == nextEvent.local_date) {
            if (checkedIn) {
                nextEventButton = <Button
                    large
                    backgroundColor={'#D95351'}
                    borderRadius={3}
                    style={styles.checkInButton}
                    raised
                    icon={{ name: 'undo', type: 'font-awesome' }}
                    title=' UNDO CHECK-IN'
                    onPress={this.handleUnCheckIn}
                />
            }
            if (!checkedIn) {
                nextEventButton = <Button
                    large
                    backgroundColor={'#346abb'}
                    borderRadius={3}
                    style={styles.checkInButton}
                    raised
                    icon={{ name: 'check-circle', type: 'font-awesome' }}
                    title=' CHECK-IN'
                    onPress={this._getLocationAsync}
                />
            }
        }

        if (currentTime < hoursPriorToEvent || exampleDate != nextEvent.local_date) {
            if (rsvp) {
                nextEventButton = <Button
                    large
                    backgroundColor={'#D95351'}
                    borderRadius={3}
                    style={styles.checkInButton}
                    raised
                    icon={{ name: 'undo', type: 'font-awesome' }}
                    title=' UN-RVSP'
                    onPress={this.handleUnRSVP}
                />
            }

            if (!rsvp) {
                nextEventButton = <Button
                    large
                    backgroundColor={'green'}
                    borderRadius={3}
                    style={styles.checkInButton}
                    raised
                    icon={{ name: 'check-circle', type: 'font-awesome' }}
                    title=' RSVP'
                    onPress={this.handleRSVP}
                />
            }
        }
        if (currentTime > hoursAfterEventStart && exampleDate == nextEvent.local_date) {
            nextEventButton = "null"
        }

        return nextEventButton;
    }

    render() {
        const { eventDetails, eventsData, user, locationError } = this.props;
        const eventInfo = eventsData.filter(event => event.id === eventDetails)
        const latitude = eventInfo[0].venue.lat
        const longitude = eventInfo[0].venue.lon
        const location = { latitude, longitude }

        let locationErrorMessage = null;
        if (!!locationError) {
          locationErrorMessage = <Text style={styles.locationErrorMessage}>Please Enable </Text>
        }

        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.title}>{eventInfo[0].name}</Text>
                    <Text style={styles.date}>{`${getDayOfTheWeek(eventInfo[0].local_date)}, ${getMonthString(eventInfo[0].local_date)} ${getDateString(eventInfo[0].local_date)}, ${standardTime(eventInfo[0].local_time)}`}</Text>
                    {/* <Text style={styles.checkInHeader}>CHECK-IN</Text> */}
                    {this.handleButtons()}
                    {locationErrorMessage}
                    <View style={styles.venueContainer}>
                        <Text style={styles.venueName}>{eventInfo[0].venue.name}</Text>
                        <Text>{`${eventInfo[0].venue.address_1}, ${eventInfo[0].venue.city}`}</Text>
                    </View>
                </View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker
                        key={1}
                        title='My Marker'
                        coordinate={{ latitude: latitude, longitude: longitude }}
                    />
                </MapView>
                <Hyperlink linkDefault={true} linkStyle={ { color: '#2980b9'}}>
                    <View>
                        <Text style={styles.bodyText}>{eventInfo[0].description.replace(/<(?:.|\n)*?>/gm, '')}</Text>
                    </View>
                </Hyperlink>
            </ScrollView>

        )
    }
}

function mapStoreToProps(store) {
    return {
        eventDetails: store.eventsData.selectedEvent,
        eventsData: store.eventsData.eventsData,
        user: store.signupData.user,
        locationError: store.eventsData.locationError,
    };
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'Kailasa',
        lineHeight: 50
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
        flex: 2
    },
    bodyText: {
        lineHeight: 24,
        marginTop: 19,
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
    checkInButton: {

    },
    date: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#346abb',
        letterSpacing: 3,
        marginTop: -10,
        marginBottom: 50
    },
    venueName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 43
    },
    venueContainer: {
        paddingLeft: 20
    },
    locationErrorMessage: {
        textAlign: 'center'
      },
})

export default connect(mapStoreToProps)(EventDetailsContainer);