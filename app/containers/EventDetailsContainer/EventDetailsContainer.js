import React from 'react';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { StyleSheet, Text, View, Linking, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import { updateEventsData } from '../EventsContainer/eventsActions';
import { getDayOfTheWeek, getMonthString, getMonthAbr, getDateString, getYearString, standardTime } from '../EventsContainer/eventsDateAndTime';
import EventMap from './EventMap'

class EventDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { eventDetails, eventsData, user } = this.props;
        const eventInfo = eventsData.filter(event => event.id === eventDetails)
        const latitude = eventInfo[0].venue.lat
        const longitude = eventInfo[0].venue.lon
        const location = { latitude, longitude }
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.title}>{eventInfo[0].name}</Text>
                    <Text style={styles.date}>{`${getDayOfTheWeek(eventInfo[0].local_date)}, ${getMonthString(eventInfo[0].local_date)} ${getDateString(eventInfo[0].local_date)}, ${standardTime(eventInfo[0].local_time)}`}</Text>
                    {/* <Text style={styles.checkInHeader}>CHECK-IN</Text> */}
                    <Button
                        large
                        backgroundColor={'#346abb'}
                        borderRadius={3}
                        style={styles.checkInButton}
                        raised
                        icon={{ name: 'check-circle', type: 'font-awesome' }}
                        title=' CHECK-IN'
                    />
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
                <View>
                    <Text style={styles.bodyText}>{eventInfo[0].description.replace(/<(?:.|\n)*?>/gm, '')}</Text>
                </View>
            </ScrollView>

        )
    }
}

function mapStoreToProps(store) {
    return {
        eventDetails: store.eventsData.selectedEvent,
        eventsData: store.eventsData.eventsData,
        user: store.loginData.user
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
    }
})

export default connect(mapStoreToProps)(EventDetailsContainer);