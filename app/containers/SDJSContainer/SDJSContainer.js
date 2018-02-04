import React from 'react';
import { connect } from 'react-redux';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import { Constants, WebBrowser } from 'expo';


class SDJSContiner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
        };
    }

    _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('http://sandiegojs.org/');
        this.setState({ result });
    };


    render() {
        const resizeMode = 'center';

        return (
            <ImageBackground style={{
                flex: 1,
                resizeMode,
                position: 'absolute',
                width: '100%',
                height: '100%',
                alignItems: 'center',
              }}
              source={{ uri: 'https://cdn-images-1.medium.com/max/653/1*wMZnVAEei1xbY1v6sAbYxQ.png' }}
            >
            
                <Button
                    large
                    backgroundColor={'#346abb'}
                    borderRadius={3}
                    style={{style:styles.paragraph, width:220, alignItems: 'center',marginTop: 180}}
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        
    },
});

function mapStoreToProps(store) {
    return {

    };
}

export default connect(mapStoreToProps)(SDJSContiner);