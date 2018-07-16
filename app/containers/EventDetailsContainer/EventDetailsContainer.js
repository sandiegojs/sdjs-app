import React from 'react';
import Geofence from 'react-native-expo-geofence';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { StyleSheet, Text, View, Linking, ScrollView } from 'react-native';
import { Constants, Location, Permissions, WebBrowser } from 'expo';
import { Button } from 'react-native-elements'
import {
    setLocationError,
    checkedInTrue,
    checkedInFalse,
    addAttendeeToEvent,
    removeAttendee,
} from '../EventsContainer/eventsActions';
import { getDayOfTheWeek, getMonthString, getMonthAbr, getDateString, getYearString, standardTime } from '../EventsContainer/eventsDateAndTime';
import Hyperlink from 'react-native-hyperlink'
import EventMap from './EventMap'

class EventDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtons = this.handleButtons.bind(this);
        this.handleUnCheckIn = this.handleUnCheckIn.bind(this);
    }
    _getLocationAsync = async () => {

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
            if (result[0] === undefined) {
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


    _handlePressButtonAsync = async () => {

        const { eventDetails, eventsData } = this.props;
        const eventInfo = eventsData.filter(event => event.id === eventDetails)

        let result = await WebBrowser.openBrowserAsync(eventInfo[0].link);

    };

    handleButtons() {
        const { eventsData, checkedIn, eventDetails } = this.props;

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }



        var d = new Date();
        var todaysISOdate = d.toISOString().slice(0, 10);

        var exampleDate = "2018-05-15";// for testing, REMOVE and update to todaysISODate
        var nextEvent = eventsData.filter(event => event.id === eventDetails);

        var hours = addZero(d.getHours());
        var mins = addZero(d.getMinutes());




        var currentTime = null;//parseInt(hours+mins);  currently set to 1230 for testing
        var eventTime = parseInt(nextEvent[0].local_time.replace(':', ''));
        var hoursPriorToEvent = eventTime - 100;
        var hoursAfterEventStart = eventTime + 400;

        currentTime = 1900//parseInt(hours+mins);  currently set to 1230 for testing


        if (currentTime >= hoursPriorToEvent && currentTime <= hoursAfterEventStart && exampleDate == nextEvent[0].local_date) {
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

        if (currentTime < hoursPriorToEvent || exampleDate != nextEvent[0].local_date) {

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
        if (currentTime > hoursAfterEventStart && exampleDate == nextEvent[0].local_date) {
            nextEventButton = "null"
        }

        return nextEventButton;
    }

    render() {
        const { eventDetails, eventsData, user, locationError, dispatch } = this.props;
        const eventInfo = eventsData.filter(event => event.id === eventDetails)
        var latitude = 32.7157
        if (!!eventInfo[0].venue) {
            latitude = eventInfo[0].venue.lat;
        }
        var longitude = -117.1611
        if (!!eventInfo[0].venue) {
            longitude = eventInfo[0].venue.lon;
        }
        var location = { latitude, longitude }

        var locationText = null;
        if (!!eventInfo[0].venue) {
            locationText = <View>
                <Text style={styles.venueName}>{eventInfo[0].venue.name}</Text>
                <Text style={styles.venueAddress}>{`${eventInfo[0].venue.address_1}`}</Text>
                <Text style={styles.venueAddress}>{`${eventInfo[0].venue.city}, ${eventInfo[0].venue.state}`}</Text>
            </View>
        }

        let locationErrorMessage = null;
        if (!!locationError) {
            locationErrorMessage = <Text style={styles.locationErrorMessage}>Please Enable location services </Text>
        }
        console.log(eventInfo[0].rsvp_limit, eventInfo[0].yes_rsvp_count, 'hellloooo');

        if (eventInfo[0].rsvp_limit == undefined) {
            return (
                <ScrollView style={styles.container}>
                    <View>
                        <Text style={styles.title}>{eventInfo[0].name}</Text>
                        <Text style={styles.date}>{`${getDayOfTheWeek(eventInfo[0].local_date)}, ${getMonthString(eventInfo[0].local_date)} ${getDateString(eventInfo[0].local_date)}, ${standardTime(eventInfo[0].local_time)}`}</Text>
                        <Text style={{ fontWeight: 'bold', paddingLeft: 20, fontSize: 16, marginBottom: 10 }}>
                            Are you going?
                            <Text style={{ fontSize: 16, fontWeight: '100' }}> {`  ${eventInfo[0].yes_rsvp_count} people are going`}
                            </Text>
                        </Text>
                        {this.handleButtons()}
                        {locationErrorMessage}
                        <View style={styles.venueContainer}>
                            {locationText}
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
                    <Hyperlink linkDefault={true} linkStyle={{ color: '#2980b9' }}>
                        <View>
                            <Text style={styles.bodyText}>{eventInfo[0].description.replace(/<(?:.|\n)*?>/gm, "\n")}</Text>
                        </View>
                    </Hyperlink>
                </ScrollView>
            )

        } else if (eventInfo[0].yes_rsvp_count == undefined) {

            return (
                <ScrollView style={styles.container}>
                    <View>
                        <Text style={styles.title}>{eventInfo[0].name}</Text>
                        <Text style={styles.date}>{`${getDayOfTheWeek(eventInfo[0].local_date)}, ${getMonthString(eventInfo[0].local_date)} ${getDateString(eventInfo[0].local_date)}, ${standardTime(eventInfo[0].local_time)}`}</Text>
                        <Text style={{ fontWeight: 'bold', paddingLeft: 20, fontSize: 16, marginBottom: 10 }}>
                            Are you going?
                        </Text>
                        {this.handleButtons()}
                        {locationErrorMessage}
                        <View style={styles.venueContainer}>
                            {locationText}
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
                    <Hyperlink linkDefault={true} linkStyle={{ color: '#2980b9' }}>
                        <View>
                            <Text style={styles.bodyText}>{eventInfo[0].description.replace(/<(?:.|\n)*?>/gm, "\n")}</Text>
                        </View>
                    </Hyperlink>
                </ScrollView>

            )

        } else {

            return (
                <ScrollView style={styles.container}>
                    <View>
                        <Text style={styles.title}>{eventInfo[0].name}</Text>
                        <Text style={styles.date}>{`${getDayOfTheWeek(eventInfo[0].local_date)}, ${getMonthString(eventInfo[0].local_date)} ${getDateString(eventInfo[0].local_date)}, ${standardTime(eventInfo[0].local_time)}`}</Text>
                        <Text style={{ fontWeight: 'bold', paddingLeft: 20, fontSize: 16, marginBottom: 10 }}>
                            Are you going?
                        <Text style={{ fontSize: 16, fontWeight: '100' }}> {`  ${eventInfo[0].rsvp_limit - eventInfo[0].yes_rsvp_count} spots left`}
                            </Text>
                        </Text>
                        {this.handleButtons()}
                        {locationErrorMessage}
                        <View style={styles.venueContainer}>
                            {locationText}
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
                    <Hyperlink linkDefault={true} linkStyle={{ color: '#2980b9' }}>
                        <View>
                            <Text style={styles.bodyText}>{eventInfo[0].description.replace(/<(?:.|\n)*?>/gm, "\n")}</Text>
                        </View>
                    </Hyperlink>
                </ScrollView>

            )
        }
    }
}

function mapStoreToProps(store) {
    return {
        eventDetails: store.eventsData.selectedEvent,
        eventsData: store.eventsData.eventsData,
        user: store.signupData.user,
        locationError: store.eventsData.locationError,
        checkedIn: store.eventsData.checkedIn,
        attendeeId: store.eventsData.attendeeId,


    };
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'Kailasa',
        lineHeight: 50,
        paddingTop: 5
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
    checkInButton: {

    },
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
        marginTop: 1,
    },
    venueContainer: {
        paddingLeft: 20
    },
    locationErrorMessage: {
        textAlign: 'center'
    },
})

export default connect(mapStoreToProps)(EventDetailsContainer);