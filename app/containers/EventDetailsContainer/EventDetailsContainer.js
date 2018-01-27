import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { updateEventsData } from '../EventsContainer/eventsActions';

class EventDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    //      console.log("props", eventDetails)
    //     console.log("Second",eventsData)

    render() {
        const { eventDetails, eventsData } = this.props;
        const eventInfo = eventsData.filter(event => event.id === eventDetails)
        console.log("name",eventInfo[0].name)
        
        return (
            <View style={ styles.container }>
                <Text style={ styles.title }>{eventInfo[0].name}</Text>
                <Text style={styles.bodyText}>{eventInfo[0].description.replace(/<(?:.|\n)*?>/gm, '')}</Text>
                <Text></Text>
                <Text></Text>
            </View>
        )
    }
}

function mapStoreToProps(store) {
    return {
      eventDetails: store.eventsData.selectedEvent,
      eventsData: store.eventsData.eventsData
    };
  }
  
  const styles = StyleSheet.create ({
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
        marginTop:19
      }
  })

export default connect(mapStoreToProps)(EventDetailsContainer);