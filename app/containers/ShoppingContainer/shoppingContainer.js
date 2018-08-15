import React from 'react';
import { connect } from 'react-redux';
import { ImageBackground, Text, View, StyleSheet, Image } from 'react-native';
import { Button } from "react-native-elements";
import { Constants, WebBrowser } from 'expo';

class ShoppingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
        };
    }

    handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/sdjs-winter-2017#pid=212&cid=5832&sid=front');
        this.setState({ result });
    };

    handlePressButtonAsyncForCap = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/sdjs-winter-2017#pid=522&cid=101870&sid=front');
        this.setState({ result });
    };
    handlePressButtonAsyncForLightBlue = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/sandiego-js?tsmac=recently_viewed&tsmic=recently_viewed#pid=369&cid=6524&sid=front');
        this.setState({ result });
    };
    handlePressButtonAsyncForBlack = async () => {
        let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/sdjs-sun-on-black?tsmac=recently_viewed&tsmic=recently_viewed#pid=211&cid=5288&sid=front');
        this.setState({ result });
    };
    render() {
        return (
            <ImageBackground
                style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#fff',
                }}
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
                            title="ORDER"
                            onPress={this.handlePressButtonAsync}
                        />
                    </View>
                    <View style={styles.Item}>
                        <Image
                            source={require('../../assets/images/capImage.png')}
                            style={{
                                height: '100%',
                                width: '100%',
                                borderColor: '#fff',
                                borderWidth: 3,
                                marginBottom: -10,
                                backgroundColor: '#fff',
                            }}
                        /><Button
                            medium
                            backgroundColor={'#346abb'}
                            borderRadius={3}
                            style={{ width: '100%', alignItems: 'center', marginTop: 20 }}
                            title="ORDER"
                            onPress={this.handlePressButtonAsyncForCap}
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
                            title="ORDER"
                            onPress={this.handlePressButtonAsyncForLightBlue}
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
                            title="ORDER"
                            onPress={this.handlePressButtonAsyncForBlack}
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
    return {};
}

export default connect(mapStoreToProps)(ShoppingContainer);