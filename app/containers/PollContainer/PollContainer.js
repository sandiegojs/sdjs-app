import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';


class PollContiner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
           
                <View>
                    <Text>Poll Page coming soon...</Text>
                </View>
                
        )
    }
}

function mapStoreToProps(store) {
    return {
        
    };
}

export default connect(mapStoreToProps)(PollContiner);