import React from 'react';
import { MapView } from 'expo';

export default class EventMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MapView
        style={ { flex: 1 } }
        initialRegion={ {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        } }
      />
    );
  }
}
