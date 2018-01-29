import React from 'react';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { StyleSheet, View } from 'react-native';

class EventMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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

export default (EventMap);