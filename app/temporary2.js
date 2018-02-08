import React from 'react';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { Button } from 'react-native-elements'
import { updateEventsData } from '../EventsContainer/eventsActions';
import { getDayOfTheWeek, getMonthString, getMonthAbr, getDateString, getYearString, standardTime } from '../EventsContainer/eventsDateAndTime';

class EventDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { eventDetails, eventsData } = this.props;
        const eventInfo = eventsData.filter(event => event.id === eventDetails)

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{eventInfo[0].name}</Text>
                <Text>{`${eventInfo[0].venue.address_1}, ${eventInfo[0].venue.city}`}</Text>
                <Text>{`${getDayOfTheWeek(eventInfo[0].local_date)}, ${getMonthString(eventInfo[0].local_date)} ${getDateString(eventInfo[0].local_date)}, ${getYearString(eventInfo[0].local_date)}, ${standardTime(eventInfo[0].local_time)}`}</Text>
                <Text>Are You Going?</Text>
                <Button
                    raised
                    icon={{ name: 'check-circle', type: 'font-awesome', buttonStyle: styles.someButtonStyle }}
                    fontSize={100}
                />
                <Text style={styles.bodyText}>{eventInfo[0].description.replace(/<(?:.|\n)*?>/gm, '')}</Text>
            </View>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        )
    }
}

function mapStoreToProps(store) {
    return {
        eventDetails: store.eventsData.selectedEvent,
        eventsData: store.eventsData.eventsData
    };
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Kailasa',
        lineHeight: 48
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    bodyText: {
        lineHeight: 20,
        marginTop: 19
    }
})

export default connect(mapStoreToProps)(EventDetailsContainer);