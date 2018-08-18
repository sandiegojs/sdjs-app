import React from 'react';
import { connect } from 'react-redux';
import { ImageBackground, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import { WebBrowser } from 'expo';

class SlackContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        source={{ uri: 'https://a.slack-edge.com/52353/marketing/img/home/home_illo.png' }}
      >
        <Button
          large
          buttonStyle={{
            backgroundColor: '#346abb',
            borderRadius: 7,
            width: 231,
            height: 65
          }}
          title="SDJS SLACK"
          onPress={async () => {
            let result = await WebBrowser.openBrowserAsync('http://sandiegojs.herokuapp.com/');
            return result
          }}
        />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    padding: 30
  },
});

function mapStoreToProps(store) {
  return {

  };
}

export default connect(mapStoreToProps)(SlackContainer);
