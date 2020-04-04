import React from 'react';
import {View, Text, Button} from 'react-native';

const SigninScreen = ({navigation}) => {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text >Welcome to Signin screen</Text>
          <Button
              title="Go to Sign Up Screen"
              onPress={()=>{
                  navigation.navigate('Signup');
              }}
          />
          <Button
              title="Go to Home Screen"
              onPress={()=>{
                  navigation.navigate('Home');
              }}
          />
      </View>
  );
};


export default SigninScreen;
