import React, {Component} from 'react';
import {View, Text} from 'react-native';

// Funtional Component
// const SignupScreen = ()=>{
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Welcome to Signup screen</Text>
//         </View>
//     );
// };

//Class Component
class SignupScreen extends Component {

    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Welcome to Signup screen</Text>
            </View>
        );
    }
}



export default SignupScreen;
