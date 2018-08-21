import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Back, Heart, More, PinIcon, Share } from '../util/icons';


export default class UtilityNavButton extends Component{

render(){
    switch (this.props.icon){
        case 'Back':
            return <Back />
        case 'Heart':
            return <Heart />
        case 'More':
            return <More />
        case 'PinIcon':
            return <PinIcon />
        case 'Share':
            return <Share />
    }
  }
}