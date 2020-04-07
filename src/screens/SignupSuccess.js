import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';


//Class Component
class SignupSuccess extends Component {


    render(){
        const {userName} = this.props.route.params;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Welcome to Signup Success screen</Text>
                <Text>{userName}</Text>
            </View>
        );
    }
}



export default SignupSuccess;
