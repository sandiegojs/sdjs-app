import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import LocalImage from './LocalImage'

let windowWidth = Dimensions.get('window').width;

export default class Pin extends Component{

    render(){
        return(
          <View style={[styles.PinContainer, {width: windowWidth/this.props.columns}]}>
          <View style={styles.PinHeader}>
          </View>
        <View style={styles.PinContent}>
          <LocalImage
          source={this.props.pinsource.imagesource}
          originalWidth={this.props.pinsource.originalWidth}
          originalHeight={this.props.pinsource.originalHeight}
          columns={this.props.columns}
          />
        </View>
        <View style={styles.PinMeta}>
          <View style={styles.PinMetaTextContainer}>
          </View>
        </View>
      </View>
    )
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
  UtilityNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  PinButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'space-between',
    width: 60
  },
  PinButtonText: {
    color: 'white'
  },
  PinButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  PinContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  ImagePlaceholder: {
    backgroundColor: '#1e1e1e',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 6,
  },
  PinMeta: {
    flex: 1,
    minHeight: 70,
    flexDirection: 'row',
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  UtilityButton: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center'
  },
  UtilityButtonText: {
    color: 'black',
    fontWeight: 'bold'
  },
  PinUser: {
    flex: 5,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8
  },
  PinUserAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    marginRight: 8
  },
  TextBold: {
    fontWeight: 'bold'
  }
})
