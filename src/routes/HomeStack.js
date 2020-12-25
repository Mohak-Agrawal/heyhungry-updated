import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import ItemScreen from '../screens/ItemScreen/ItemScreen';


const Stack = createStackNavigator();

 const HomeStack =() => {
  return (
        <Stack.Navigator initialRouteName="Categories" headerMode="none">
          {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
          <Stack.Screen name="Categories" component={CategoryScreen}/>
          <Stack.Screen name="Items" component={ItemScreen}/>
        </Stack.Navigator>
  );
}

export default HomeStack