import React from 'react'
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen';
import OrderPlacedScreen from '../screens/OrderPlacedScreen/OrderPlacedScreen'

const Stack = createStackNavigator();

 const CheckoutStack =() => {
  return (
        <Stack.Navigator 
          initialRouteName="Address" 
          headerMode="none"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        >
          <Stack.Screen name="Address" component={AddressScreen}/>
          <Stack.Screen name="Payment" component={PaymentScreen}/>
          <Stack.Screen name="OrderPlaced" component={OrderPlacedScreen}/>
        </Stack.Navigator>
  );
}

export default CheckoutStack