import React from 'react';
import { connect } from 'react-redux';
import {  
    BackHandler, 
    Alert, 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TextInput, 
    StatusBar, 
    navigate } from 'react-native';
import EventsContainer from '../containers/EventsContainer/EventsContainer';
import RootNavigator from '../tabNavigation/MainTabNavigator';



export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);



  }
  
handleBackButton = () => {               
  Alert.alert(
      'Exit App',
      'Exiting the application?', [{
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
      }, {
          text: 'OK',
          onPress: () => BackHandler.exitApp()
      }, ], {
          cancelable: false
      }
   )
   return true;
 }
 componentDidMount() {
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}
  static navigationOptions = {
    title: 'San Diego JS',
    tabBarLabel:'Events',
    headerLeft: null
  };

  




  render() {
    const { navigate } = this.props.navigation;
    const { user } = this.props;
    return (
      <View>
        <EventsContainer navigation={this.props.navigation} />
        <View style={styles.container}>
          {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />} */}
          <RootNavigator navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
