import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import LocalImage from './LocalImage';

let windowWidth = Dimensions.get('window').width;

export default class Pin extends Component {
  render() {
    return (
      <View
        style={ [
          styles.PinContainer,
          { width: windowWidth / this.props.columns }
        ] }
      >
        <View style={ styles.PinHeader }>
        </View>
        <View style={ styles.PinContent }>
          <LocalImage
            source={ this.props.pinsource.imagesource }
            originalWidth={ this.props.pinsource.originalWidth }
            originalHeight={ this.props.pinsource.originalHeight }
            columns={ this.props.columns }
          />
        </View>
        <View style={ styles.PinMeta }>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PinContainer: {
    backgroundColor: '#ecf0f1'
  },
  PinHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
    minHeight: 15,
    padding: 8
  },
  PinContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
  PinMeta: {
    flex: 1,
    minHeight: 70,
    flexDirection: 'row',
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8
  }
});
