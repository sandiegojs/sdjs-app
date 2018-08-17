import React from 'react';
import { connect } from 'react-redux';
import {  View, StyleSheet, Image, TouchableHighlight, ScrollView } from 'react-native';
import { WebBrowser } from 'expo';

class ShoppingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
        };
    }

    handlePressButtonAsyncHoodie = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/sdjs-winter-2017#pid=212&cid=5832&sid=front');
        this.setState({ result });
    };

    handlePressButtonAsyncForMug = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/sdjs-winter-2017#pid=522&cid=101870&sid=front');
        this.setState({ result });
    };

    handlePressButtonAsyncForSun = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/return-sunshine?tsmac=recently_viewed&tsmic=recently_viewed#pid=46&cid=2741&sid=front');
        this.setState({ result });
    };

    handlePressButtonAsyncForSun2 = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/return-sunshine_copy_1?tsmac=recently_viewed&tsmic=recently_viewed#pid=46&cid=2741&sid=front');
        this.setState({ result });
    };

    handlePressButtonAsyncForBlueSdjs = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/sandiego-js?tsmac=recently_viewed&tsmic=recently_viewed#pid=369&cid=6524&sid=front');
        this.setState({ result });
    };
    handlePressButtonAsyncForDarkSdjs = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/sdjs-sun-on-black?tsmac=recently_viewed&tsmic=recently_viewed#pid=211&cid=5288&sid=front');
        this.setState({ result });
    };
    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
            <View style={[styles.boxContainer, styles.boxOne]}>
                <TouchableHighlight
                    onPress={() => this.handlePressButtonAsyncHoodie()}>
                    <Image
                        source={require('../../assets/images/hoodie.png')}
                        style={{
                        width: 198,
                        height: 208,
                        marginRight:-2,
                        borderWidth: 1,
                        borderColor: '#bdc3c7',
                        backgroundColor: '#ecf0f1'}}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this.handlePressButtonAsyncForMug()}>
                    <Image
                        source={require('../../assets/images/mug.png')}
                        style={{
                        width: 198,
                        height: 208,
                        marginLeft:-7,
                        borderWidth: 1,
                        borderColor: '#bdc3c7',
                        backgroundColor: '#ecf0f1'}}
                    />
                </TouchableHighlight>
                </View>
                <View style={[styles.boxContainer, styles.boxTwo]}>
                <TouchableHighlight
                    onPress={() => this.handlePressButtonAsyncForSun()}>
                    <Image
                        source={require('../../assets/images/funcSunshine.png')}
                        style={{
                        width: 198,
                        height: 208,
                        marginRight:-2,
                        borderWidth: 1,
                        borderColor: '#bdc3c7',
                        backgroundColor: '#ecf0f1'}}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this.handlePressButtonAsyncForSun2()}>
                    <Image
                        source={require('../../assets/images/funcSunshine2.png')}
                        style={{
                        width: 198,
                        height: 208,
                        marginLeft:-7,
                        borderWidth: 1,
                        borderColor: '#bdc3c7',
                        backgroundColor: '#ecf0f1'}}
                    />
                </TouchableHighlight>
                </View>
                <View style={[styles.boxContainer, styles.boxThree]}>
                <TouchableHighlight
                    onPress={() => this.handlePressButtonAsyncForBlueSdjs()}>
                    <Image
                        source={require('../../assets/images/blueSdjs.png')}
                        style={{
                        width: 198,
                        height: 208,
                        marginRight:-2,
                        borderWidth: 1,
                        borderColor: '#bdc3c7',
                        backgroundColor: '#ecf0f1'}}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this.handlePressButtonAsyncForDarkSdjs()}>
                    <Image
                        source={require('../../assets/images/darkSdjs.png')}
                        style={{
                        width: 198,
                        height: 208,
                        marginLeft:-7,
                        borderWidth: 1,
                        borderColor: '#bdc3c7',
                        backgroundColor: '#ecf0f1'}}
                    />
                </TouchableHighlight>
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 500,
        width: 400
    },
    boxContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    boxOne: {
        flex: 1,
        flexDirection: 'row',
    },
    boxTwo: {
        flex: 1,
        flexDirection: 'row',
    },
    boxThree: {
        flex: 1,
        flexDirection: 'row',
    }
})
function mapStoreToProps(store) {
    return {};
}

export default connect(mapStoreToProps)(ShoppingContainer);