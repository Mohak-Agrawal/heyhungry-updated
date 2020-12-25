import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from './BottomTab';
import HomeStack from './HomeStack';
import CheckoutStack from './CheckoutStack';


const Stack = createStackNavigator();

 const AppStack =() => {
  return (
        <Stack.Navigator initialRouteName="home" headerMode="none">
          <Stack.Screen name="home" component={BottomTab}/>
          <Stack.Screen name="products" component={HomeStack}/>
          <Stack.Screen name="cart" component={CheckoutStack}/>

        </Stack.Navigator>
  );
}

export default AppStack