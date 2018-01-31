import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';


class SurveyContiner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
           
                <View>
                    <Text>Survey Page coming soon...</Text>
                </View>
                
        )
    }
}

function mapStoreToProps(store) {
    return {
        
    };
}

export default connect(mapStoreToProps)(SurveyContiner);