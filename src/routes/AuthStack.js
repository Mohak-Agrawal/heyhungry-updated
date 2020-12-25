import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import OtpScreen from '../screens/OtpScreen/OtpScreen';



const Stack = createStackNavigator();

 const AuthStack =() => {
  return (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Otp" component={OtpScreen}/>
          <Stack.Screen name="Signup" component={SignupScreen}/>
        </Stack.Navigator>
  );
}

export default AuthStack