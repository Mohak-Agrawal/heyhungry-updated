import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants/theme'
import { View } from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
  return (
      <Tab.Navigator 
        initialRouteName="Home"
        activeColor={COLORS.red}
        inactiveColor={COLORS.gray}
        shifting={false}
        backBehavior="none"
        barStyle={{ backgroundColor: 'white' }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="home-variant" size={24} color={color} />
          )
        }} />
        <Tab.Screen name="Cart" component={CartScreen} options={{
          tabBarLabel: 'Cart',
          tabBarBadge: 0,
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="shopping" size={24} color={color} />
          )
        }} />
        <Tab.Screen name="Account" component={AccountScreen} options={{
          tabBarLabel: 'Account',
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="account" size={24} color={color} />
          )
        }} />
      </Tab.Navigator>
  );
}
