import React from 'react';
import { connect } from 'react-redux';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import { Constants, WebBrowser } from 'expo';

class SlackContiner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
        };
    }

    _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('http://sandiegojs.herokuapp.com/');
        this.setState({ result });
    };

    render() {
        return (
            <ImageBackground style={{
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                alignItems: 'center',
              }}
              source={{ uri: 'https://a.slack-edge.com/52353/marketing/img/home/home_illo.png' }}
            >
            
                <Button
                    large
                    backgroundColor={'#346abb'}
                    borderRadius={3}
                    style={{ width:300, alignItems: 'center', marginTop: 180}}
                    title="SAN DIEGO JS SLACK"
                    onPress={this._handlePressButtonAsync}
                />
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        
    },
});

function mapStoreToProps(store) {
    return {
        
    };
}

export default connect(mapStoreToProps)(SlackContiner);