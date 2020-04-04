import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SigninScreen from './src/screens/SignIn';
import SignupScreen from './src/screens/Signup';
import HomeScreen from './src/screens/Home';


const preLoginStack = createStackNavigator();




export default function App() {
  return (
      <NavigationContainer>
          <preLoginStack.Navigator>
              <preLoginStack.Screen name="Signin" component={SigninScreen} />
              <preLoginStack.Screen name="Signup" component={SignupScreen} />
              <preLoginStack.Screen name="Home" component={HomeScreen} />
          </preLoginStack.Navigator>
      </NavigationContainer>
  );
};

