import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Appbar } from 'react-native-paper'
import Dash from 'react-native-dash';
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

const OrderPlacedScreen = (props) => {
    return (

<View style={styles.container}>
            
            <Appbar.Header style={{backgroundColor:COLORS.white,elevation:0}} >
                <Appbar.BackAction onPress={() => {props.navigation.goBack()}} color={COLORS.red}/>
                <Appbar.Content title="Checkout (3/3)" color={COLORS.red} titleStyle={{...FONTS.h2}} />
            </Appbar.Header>

            <View style={styles.pageIndicator}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name="check-circle" size={24} color={COLORS.black}/>
                    <Text style={{...FONTS.body4,color:COLORS.black}}>Address</Text>
                </View>
                <Dash style={{width:'20%', height:1}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name="check-circle" size={24} color={COLORS.black}/>
                    <Text style={{...FONTS.body4,color:COLORS.black}}>Payment</Text>
                </View>
                <Dash style={{width:'20%', height:1}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name="radiobox-marked" size={24} color={COLORS.red}/>
                    <Text style={{...FONTS.body4,color:COLORS.red}}>Confirmed</Text>
                </View>
            </View>

            <View style={styles.addressContainer}>
                <MaterialCommunityIcons name="check-decagram" size={150} color={COLORS.red}/>
                <Text style={{...FONTS.h2,marginBottom:SIZES.margin}}>Order Placed Successfully!</Text>
                <Text style={{...FONTS.body3,textAlign:'center',color:COLORS.gray}}>Thank you for your order! You can track the delivery in the "Orders" section</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.Button} onPress={() => {}}>
                    <Text style={{...FONTS.h3,color:COLORS.white}}>TRACK MY ORDER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.Button,{borderWidth:1,borderColor:COLORS.lightGray,backgroundColor:COLORS.white}]} onPress={() => {}}>
                    <Text style={{...FONTS.h3,color:COLORS.red}}>ORDER SOMETHING ELSE</Text>
                </TouchableOpacity>
            </View>

        </View>
            
    )
}

export default OrderPlacedScreen
