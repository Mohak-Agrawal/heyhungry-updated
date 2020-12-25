import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Appbar } from 'react-native-paper'
import Dash from 'react-native-dash';
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';



const paymentList = [
    {
        title:"Mastercard",
        number:"XXXX XXXX XXXX 3745",
    },
    {
        title:"Cash on Delivery",
        number:"₹273",
    },
    {
        title:"Paytm",
        number:"₹3400",
    },
]

const PaymentScreen = (props) => {

    
    const [payment,setPayment] = useState(null)

    return (
        <View style={styles.container}>
            
            <Appbar.Header style={{backgroundColor:COLORS.white,elevation:0}} >
                <Appbar.BackAction onPress={() => {props.navigation.goBack()}} color={COLORS.red}/>
                <Appbar.Content title="Checkout (2/3)" color={COLORS.red} titleStyle={{...FONTS.h2}} />
            </Appbar.Header>

            <View style={styles.pageIndicator}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name="check-circle" size={24} color={COLORS.black}/>
                    <Text style={{...FONTS.body4,color:COLORS.black}}>Address</Text>
                </View>
                <Dash style={{width:'20%', height:1}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name="radiobox-marked" size={24} color={COLORS.red}/>
                    <Text style={{...FONTS.body4,color:COLORS.red}}>Payment</Text>
                </View>
                <Dash style={{width:'20%', height:1}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name="radiobox-marked" size={24} color={COLORS.gray}/>
                    <Text style={{...FONTS.body4,color:COLORS.gray}}>Confirmed</Text>
                </View>
            </View>

            <View style={{flex:1,backgroundColor:COLORS.lightGray}}>

            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.Button} onPress={() => {props.navigation.navigate("OrderPlaced")}}>
                    <Text style={{...FONTS.h2,color:COLORS.white}}>Place Order</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}



const renderPayment = (item,payment,setPayment) => {
    return(
        <View style={styles.paymentCard}>
            <View style={{width:'85%'}}>
                <Text style={{...FONTS.h3,}}>{item.title}</Text>
                <Text style={{...FONTS.body3,}}>{item.number}</Text>
            </View>
            <TouchableOpacity style={[styles.checkbox,{backgroundColor: payment === item.title ? COLORS.red:COLORS.gray}]} onPress={() => setPayment(item.title)}>
                <MaterialCommunityIcons name="check" size={28} color={COLORS.white} />
            </TouchableOpacity>
        </View>
    )
}

export default PaymentScreen
