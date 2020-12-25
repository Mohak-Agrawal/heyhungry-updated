import React,{useState} from 'react'
import { View, Text ,Button,FlatList} from 'react-native'
import {  Appbar} from 'react-native-paper'
import { COLORS, FONTS ,SIZES} from '../../constants/theme'
import styles from '../AddressScreen/Styles'
import Dash from 'react-native-dash';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


const addresslist = [
    {
        title:"Home",
        icon:"home-outline",
        name:"Mohak Agrawal",
        number:"+91 8959210749",
        locality:"123 Main Street",
        address:"123 Main Street, New York, NY 10030",
    },
    {
        title:"Work",
        icon:"briefcase-outline",
        name:"Mohak Agrawal",
        number:"+91 8959210749",
        locality:"123 Main Street",
        address:"123 Main Street, New York, NY 10030"
    },
    {
        title:"Other",
        icon:"map-marker",
        name:"Mohak Agrawal",
        number:"+91 8959210749",
        locality:"123 Main Street",
        address:"123 Main Street, New York, NY 10030"
    },
    
]

const AddressScreen = (props) => {

    const [address,setAddress] = useState(null)

    return (
        <View style={styles.container}>
            
            <Appbar.Header style={{backgroundColor:COLORS.white,elevation:0}} >
                <Appbar.BackAction onPress={() => {props.navigation.goBack()}} color={COLORS.red}/>
                <Appbar.Content title="Checkout (1/3)" color={COLORS.red} titleStyle={{...FONTS.h2}} />
            </Appbar.Header>
            <ScrollView>
            <View style={styles.pageIndicator}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name="radiobox-marked" size={24} color={COLORS.red}/>
                    <Text style={{...FONTS.body4,color:COLORS.red}}>Address</Text>
                </View>
                <Dash style={{width:'20%', height:1}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name="radiobox-marked" size={24} color={COLORS.gray}/>
                    <Text style={{...FONTS.body4,color:COLORS.gray}}>Payment</Text>
                </View>
                <Dash style={{width:'20%', height:1}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name="radiobox-marked" size={24} color={COLORS.gray}/>
                    <Text style={{...FONTS.body4,color:COLORS.gray}}>Confirmed</Text>
                </View>
            </View>

            <View style={styles.addressContainer}>
                <Text style={{...FONTS.h3,color:COLORS.black}}>Select Delivery Address</Text>
                <TouchableOpacity style={styles.addButton}>
                    <MaterialCommunityIcons name="plus-circle-outline" size={24} color={COLORS.gray}/>
                    <Text style={{...FONTS.h3,marginLeft:10,color:COLORS.gray}}>Add New Address</Text>
                </TouchableOpacity>
                <FlatList
                    data={addresslist} 
                    renderItem={( {item} ) => renderAddress(item,address,setAddress)}
                    keyExtractor={(item, index) => index.toString()}    
                    showsVerticalScrollIndicator={false} 
                />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.Button} onPress={() => {props.navigation.navigate("Payment")}}>
                    <Text style={{...FONTS.h2,color:COLORS.white}}>PROCEED TO PAYMENT</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

const renderAddress = (item,address,setAddress) => {
    return(
        <TouchableOpacity style={[styles.addressCard,{borderColor:address===item.title?COLORS.red:COLORS.lightGray}]} onPress={() => setAddress(item.title)}>
            
            <View style={{width:'85%'}}>
                <View style={{flexDirection:'row'}}>
                    <MaterialCommunityIcons name={item.icon} size={24} color={COLORS.gray}/>
                    <Text style={{...FONTS.h2,marginLeft:SIZES.margin}}>{item.title}</Text>
                </View>
                <Text style={{...FONTS.h3,marginTop:SIZES.margin/2}}>{item.name}</Text>
                <Text style={{...FONTS.h3,marginBottom:SIZES.margin/2}}>{item.number}</Text>
                <Text style={{...FONTS.body3}}>{item.locality}</Text>
                <Text style={{...FONTS.body3}}>{item.address}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default AddressScreen
