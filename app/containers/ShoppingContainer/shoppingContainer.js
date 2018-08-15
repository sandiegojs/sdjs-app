import React from 'react';
import { connect } from 'react-redux';
import { ImageBackground, Text, View, StyleSheet, Image } from 'react-native';
import { Button } from "react-native-elements";
import { Constants, WebBrowser } from 'expo';

<<<<<<< HEAD
=======

>>>>>>> Shopping app changes
class ShoppingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
        };
    }

<<<<<<< HEAD
    handlePressButtonAsync = async () => {
=======
    _handlePressButtonAsync = async () => {
>>>>>>> Shopping app changes
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/sdjs-winter-2017#pid=212&cid=5832&sid=front');
        this.setState({ result });
    };

<<<<<<< HEAD
    handlePressButtonAsyncForCap = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/sdjs-winter-2017#pid=522&cid=101870&sid=front');
        this.setState({ result });
    };
    handlePressButtonAsyncForLightBlue = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/sandiego-js?tsmac=recently_viewed&tsmic=recently_viewed#pid=369&cid=6524&sid=front');
        this.setState({ result });
    };
    handlePressButtonAsyncForBlack = async () => {
=======
    _handlePressButtonAsyncForCap = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/sdjs-winter-2017#pid=522&cid=101870&sid=front');
        this.setState({ result });
    };
    _handlePressButtonAsyncForLightBlue = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/sandiego-js?tsmac=recently_viewed&tsmic=recently_viewed#pid=369&cid=6524&sid=front');
        this.setState({ result });
    };
    _handlePressButtonAsyncForBlack = async () => {
>>>>>>> Shopping app changes
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/sdjs-sun-on-black?tsmac=recently_viewed&tsmic=recently_viewed#pid=211&cid=5288&sid=front');
        this.setState({ result });
    };
    render() {
<<<<<<< HEAD
        return (
=======

        return (

>>>>>>> Shopping app changes
            <ImageBackground
                style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
<<<<<<< HEAD
                    backgroundColor: '#fff',
                }}
=======
                }}
                source={require('../../assets/images/shoppingBackground.png')}
>>>>>>> Shopping app changes
            >
                <View style={styles.container}>
                    <View style={styles.Item}>
                        <Image
                            source={require('../../assets/images/grayhoodie.png')}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderColor: '#fff',
                                borderWidth: 3,
                                marginBottom: -10,
                                backgroundColor:'#fff'
                            }}
                        /><Button
                            medium
                            backgroundColor={'#346abb'}
                            borderRadius={3}
                            style={{ width: '100%', alignItems: 'center', marginTop: 20 }}
<<<<<<< HEAD
                            title="ORDER"
                            onPress={this.handlePressButtonAsync}
=======
                            title="SHOP"
                            onPress={this._handlePressButtonAsync}
>>>>>>> Shopping app changes
                        />
                    </View>
                    <View style={styles.Item}>
                        <Image
                            source={require('../../assets/images/capImage.png')}
                            style={{
<<<<<<< HEAD
                                height: '100%',
                                width: '100%',
                                borderColor: '#fff',
                                borderWidth: 3,
                                marginBottom: -10,
                                backgroundColor: '#fff',
=======
                                width: '100%',
                                height: '100%',
                                borderColor: '#fff',
                                borderWidth: 3,
                                marginBottom: -10
>>>>>>> Shopping app changes
                            }}
                        /><Button
                            medium
                            backgroundColor={'#346abb'}
                            borderRadius={3}
                            style={{ width: '100%', alignItems: 'center', marginTop: 20 }}
<<<<<<< HEAD
                            title="ORDER"
                            onPress={this.handlePressButtonAsyncForCap}
=======
                            title="SHOP"
                            onPress={this._handlePressButtonAsyncForCap}
>>>>>>> Shopping app changes
                        />
                    </View>
                    <View style={styles.Item}>
                        <Image
                            source={require('../../assets/images/lightBlue.png')}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderColor: '#fff',
                                borderWidth: 3,
                                marginBottom: -10
                            }}
                        /><Button
                            medium
                            backgroundColor={'#346abb'}
                            borderRadius={3}
                            style={{ width: '100%', alignItems: 'center', marginTop: 20 }}
<<<<<<< HEAD
                            title="ORDER"
                            onPress={this.handlePressButtonAsyncForLightBlue}
=======
                            title="SHOP"
                            onPress={this._handlePressButtonAsyncForLightBlue}
>>>>>>> Shopping app changes
                        />
                    </View>
                    <View style={styles.Item}>
                        <Image
                            source={require('../../assets/images/black.png')}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderColor: '#fff',
                                borderWidth: 3,
                                marginBottom: -10
                            }}
                        /><Button
                            medium
                            backgroundColor={'#346abb'}
                            borderRadius={3}
                            style={{ width: '100%', alignItems: 'center', marginTop: 20 }}
<<<<<<< HEAD
                            title="ORDER"
                            onPress={this.handlePressButtonAsyncForBlack}
=======
                            title="SHOP"
                            onPress={this._handlePressButtonAsyncForBlack}
>>>>>>> Shopping app changes
                        />
                    </View>
                </View>
            </ImageBackground>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Item: {
        width: '50%',
        height: '40%',
        padding: 10,
        marginBottom: 40

    }
})
function mapStoreToProps(store) {
<<<<<<< HEAD
    return {};
=======
    return {

    };
>>>>>>> Shopping app changes
}

export default connect(mapStoreToProps)(ShoppingContainer);