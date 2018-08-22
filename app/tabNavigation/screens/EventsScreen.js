import React from 'react';
import { View, Button, Image } from 'react-native';

export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'tabBAR',
    tabBarIcon: () => (
      <Image
        source={require('../../assets/images/sdjs.png')}
        fadeDuration={0}
        style={{ width: 30, height: 30 }}
        onPress={() => this.props.navigation.navigate('Profile')}
      />
    ),
  };

  render() {
    const { navigate } = this.props.navigation;
    

    return (
      <View>
        <Button
          title="Go to Profile Screen"
          onPress={() =>
            navigate('Profile')
          }
        />
      </View>
    );
  }
};
