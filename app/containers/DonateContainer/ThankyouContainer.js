import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ThankyouContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={ styles.container }
        resetScrollToCoords={ { x: 0, y: 0 } }
        contentContainerStyle={ styles.container }
      >
        <View style={ styles.view }>
          <Text h3 style={ styles.text }>
            Thank you
          </Text>
          <Text h3 style={ styles.text2 }>
            for your donation!
          </Text>
        </View>
        <View style={ styles.imageview }>
          <Image
            source={ require('../../assets/images/sdjs-transparent.png') }
            style={ styles.image }
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1884c3',
    paddingTop: 20
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 30,
    color: '#DCDCDC',
    textAlign: 'center'
  },
  text2: {
    color: '#DCDCDC',
    textAlign: 'center'
  },
  imageview: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    resizeMode: 'center',
    width: 240,
    height: 200
  }
});

function mapStoreToProps(store) {
  return {

  };
}

export default connect(mapStoreToProps)(ThankyouContainer);
