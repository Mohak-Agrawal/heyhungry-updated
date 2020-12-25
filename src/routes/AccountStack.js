import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen/AccountScreen'


const Stack = createStackNavigator();

 const AccountStack =() => {
  return (
        <Stack.Navigator initialRouteName="onboarding" headerMode="none">
          <Stack.Screen name="Account" component={AccountScreen}/>
        </Stack.Navigator>
  );
}

export default AccountStack