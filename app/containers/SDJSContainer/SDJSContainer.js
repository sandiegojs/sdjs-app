import React from 'react';
import {connect} from 'react-redux';
import {ImageBackground, StyleSheet} from 'react-native';
import {Button} from "react-native-elements";
import {WebBrowser} from 'expo';

class SDJSContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    };
  }

  _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('http://sandiegojs.org/');
    this.setState({result});
  };

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
        source={{uri: 'https://cdn-images-1.medium.com/max/653/1*wMZnVAEei1xbY1v6sAbYxQ.png'}}
      >

        <Button
          large
          buttonStyle={{
            backgroundColor: '#346abb',
            borderRadius: 7,
            width: 231,
            height: 65
          }}
          title="SAN DIEGO"
          onPress={this._handlePressButtonAsync}
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
  return {};
}

export default connect(mapStoreToProps)(SDJSContainer);
